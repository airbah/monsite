#!/usr/bin/env python3
"""Prépare la documentation publique depuis une cartographie locale Copado.

Usage : python3 scripts/copado-docs/import.py /chemin/vers/copado-source-format
Le répertoire source n'est jamais copié intégralement : liste positive de fichiers
et de champs, sans alias d'org, données d'usage, record types ni extensions tierces.
"""
import argparse
import copy
import csv
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "resources/copado-source-format"
PREFIXES = ("copado__", "cmcSf__", "copadoQuality__")


def esc(value):
    return html.escape(str(value if value is not None else ""), quote=True)


def csv_file(name, rows):
    with (OUT / name).open("w", encoding="utf-8", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=list(rows[0]), lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def page(title, filename, body, script=""):
    return f'''<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)} | Wisee.fr</title><meta name="description" content="{esc(title)} : objets, champs et relations du modèle Copado Source Format.">
<link rel="canonical" href="https://wisee.fr/resources/copado-source-format/{filename}"><link rel="stylesheet" href="documentation.css"></head>
<body><header><a class="brand" href="/">Wisee<span>.fr</span></a><nav aria-label="Documentation"><a href="./">Cartographie</a><a href="guide.html">Documentation</a><a href="dictionary.html">Dictionnaire</a></nav></header>
<main><p class="eyebrow">RESSOURCES / COPADO SOURCE FORMAT</p><h1>{esc(title)}</h1>{body}</main>
<footer><a href="/#resources">Retour aux ressources Wisee</a> · <a href="/mentions-legales.html">Mentions légales</a></footer>{script}</body></html>'''


def main(source):
    OUT.mkdir(parents=True, exist_ok=True)
    original = json.loads((source / "model.json").read_text())
    objects = copy.deepcopy(original["objects"])
    for obj in objects:
        obj.pop("recordTypes", None)
        obj["evidence"] = [e for e in obj["evidence"] if not e.startswith("org:")]
        obj["fields"] = [f for f in obj["fields"] if not f["custom"] or f["name"].startswith(PREFIXES)]
        for field in obj["fields"]:
            field.pop("inlineHelpText", None)
            field.pop("picklistValues", None)
            if field["name"].startswith("copadoQuality__"):
                field["origin"] = "Copado Quality"
        obj["role"] = obj["role"].replace("SFDX observées", "Source Format").replace("; définition des champs uniquement, aucune valeur secrète exportée", "")
        obj["role"] = obj["role"].replace(" .", ".")
        if obj["name"] == "copado__Installed_Artifact_Version__c":
            obj["role"] = "Version de package installée dans un environnement."
    fields = {(o["name"], f["name"]) for o in objects for f in o["fields"]}
    relations = [r for r in original["relationships"] if (r["child"], r["field"]) in fields]
    model = {
        "extractedAt": original["extractedAt"][:10],
        "apiVersion": original["apiVersion"],
        "edition": "Documentation publique Wisee — septembre 2026",
        "scope": original["scope"],
        "packageVersions": {"Copado Deployer": "26.43", "Copado SalesforceDx": "8.33", "Copado Quality Tools": "5.8"},
        "sources": original["sources"],
        "objects": objects,
        "relationships": relations,
        "logicalIdentifiers": [r for r in original["logicalIdentifiers"] if (r["object"], r["field"]) in fields]
    }
    (OUT / "model.json").write_text(json.dumps(model, ensure_ascii=False, indent=2) + "\n")
    csv_file("relationships.csv", relations)
    field_rows = [{"object": o["name"], "field": f["name"], "label": f["label"], "type": f["relationType"] or f["type"], "referenceTo": ";".join(f["referenceTo"]), "nullable": f["nillable"], "formula": f["calculated"], "origin": f["origin"]} for o in objects for f in o["fields"]]
    csv_file("fields.csv", field_rows)

    # Les vues conservent le choix des arêtes de la cartographie source ; seules
    # les relations de champs autorisés sont publiées.
    views = json.loads((source / "views.json").read_text())
    (OUT / "views.json").write_text(json.dumps(views, ensure_ascii=False, indent=2) + "\n")
    denied = {r["field"].removesuffix("__c") for r in original["relationships"] if (r["child"], r["field"]) not in fields}
    for view in views:
        text = (source / (view["slug"] + ".mmd")).read_text()
        # Les objets sont représentés par leur nom, sans ligne Id/PK répétitive.
        text = re.sub(r"(?m)^(\s+)(\w+) \{\n\s+id Id PK\n\s+\}", r"\1\2", text)
        text = "\n".join(line for line in text.splitlines() if not any('"' + field + '"' in line for field in denied)) + "\n"
        (OUT / (view["slug"] + ".mmd")).write_text(text)

    total = len(field_rows)
    dictionary = f'<p class="intro">{len(objects)} objets · {total} champs · noms API et relations du schéma de référence.</p><p>Ces objets sont partagés par plusieurs fonctionnalités Copado. Le dictionnaire décrit leurs champs installés ; leur présence ne garantit pas leur utilisation dans chaque parcours Source Format. Les extensions locales et tierces ne sont pas incluses.</p><div class="actions"><a href="fields.csv" download>Télécharger les champs (CSV)</a><a href="model.json" download>Modèle complet (JSON)</a></div><label class="search-label" for="filter">Rechercher un objet, un champ ou une relation</label><input id="filter" type="search" placeholder="Job Step, copado__JobExecution__c…"><p id="matches" aria-live="polite">{len(objects)} objets</p>'
    markdown = ["# Dictionnaire Copado Source Format", "", f"{len(objects)} objets, {total} champs. Édition publique Wisee, septembre 2026.", ""]
    scoped = {o["name"] for o in objects}
    for obj in objects:
        rows = []
        markdown += [f"## {obj['label']} — `{obj['name']}`", "", obj["role"], "", "| Champ | Libellé | Type | Null autorisé | Référence |", "|---|---|---|---|---|"]
        for f in obj["fields"]:
            dtype = (f["relationType"] or f["type"]) + (" (formule)" if f["calculated"] else "")
            targets = ", ".join(t + (" (hors carte)" if t not in scoped else "") for t in f["referenceTo"])
            values = [f["name"], f["label"], dtype, "oui" if f["nillable"] else "non", targets]
            rows.append('<tr>' + ''.join('<td>' + esc(v) + '</td>' for v in values) + '</tr>')
            markdown.append('| ' + ' | '.join(v.replace('|', '\\|').replace('\n', ' ') for v in values) + ' |')
        dictionary += f'<details class="object" id="{esc(obj["name"])}"><summary><span><strong>{esc(obj["label"])}</strong><code>{esc(obj["name"])}</code></span><small>{len(obj["fields"])} champs</small></summary><div class="object-body"><p>{esc(obj["role"])}</p><div class="scroll"><table><thead><tr><th>Champ API</th><th>Libellé</th><th>Type</th><th>Null</th><th>Référence</th></tr></thead><tbody>{"".join(rows)}</tbody></table></div></div></details>'
    dictionary_script = '''<script>
document.getElementById('filter').addEventListener('input',function(){const q=this.value.trim().toLocaleLowerCase('fr');let count=0;document.querySelectorAll('.object').forEach(o=>{const matchObject=o.querySelector('summary').textContent.toLocaleLowerCase('fr').includes(q);let rows=0;o.querySelectorAll('tbody tr').forEach(r=>{r.hidden=!!q&&!matchObject&&!r.textContent.toLocaleLowerCase('fr').includes(q);if(!r.hidden)rows++});o.hidden=rows===0;if(!o.hidden)count++;o.open=!!q&&!o.hidden});document.getElementById('matches').textContent=count+' objet'+(count===1?'':'s')});
if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target&&target.tagName==='DETAILS'){target.open=true;target.scrollIntoView()}}
</script>'''
    (OUT / "dictionary.html").write_text(page("Dictionnaire des objets et des champs", "dictionary.html", dictionary, dictionary_script))
    (OUT / "dictionary.md").write_text("\n".join(markdown) + "\n")
    source_links = ''.join(f'<li><a href="{esc(s["url"])}">{esc(s["title"])}</a></li>' for s in model["sources"].values())
    guide = f'''<p class="intro">Lire les objets, les liaisons et le moteur d'exécution de Copado Source Format.</p>
<div class="actions"><a href="./">Explorer les neuf vues</a><a href="dictionary.html">Consulter les {total} champs</a></div>
<section><h2>Le parcours principal</h2><p>Une <strong>User Story</strong> regroupe le travail à livrer. Ses commits sont rattachés via <code>copado__User_Story_Commit__c</code>. Une promotion sélectionne des US au moyen de la jonction <code>copado__Promoted_User_Story__c</code>. Les livraisons et leurs exécutions s'appuient ensuite sur <code>Deployment</code>, <code>JobExecution</code>, <code>JobStep</code> et <code>Result</code>.</p><p><strong>Job Step dans l'interface correspond à <code>copado__JobStep__c</code>.</strong> Le champ <code>copado__JobExecution__c</code> rattache l'étape à une exécution ; <code>copado__JobTemplate__c</code> à un modèle ; <code>copado__UserStory__c</code> à une US ; <code>copado__Result__c</code> à son dernier résultat.</p></section>
<section><h2>Lire les diagrammes</h2><ul><li>Les noms API sont abrégés : préfixe <code>copado__</code> et suffixe <code>__c</code> omis.</li><li>Chaque liaison porte le nom du champ sur l'objet enfant.</li><li>Trait continu : <strong>Master-Detail</strong>. Trait pointillé : <strong>Lookup</strong>.</li><li>Les cardinalités reposent sur la possibilité de valeur nulle du champ : 1 ou 0..1 côté parent, 0..N côté enfant sauf unicité du champ.</li><li>Les vues thématiques simplifient les liaisons. La neuvième vue et le CSV réunissent les {len(relations)} relations du périmètre public.</li></ul></section>
<section id="perimetre"><h2>Périmètre Source Format</h2><p><strong>{len(objects)} objets, {len(relations)} relations et {total} champs.</strong> Cette édition couvre la livraison, les commits, les pipelines, l'exécution, la qualité et les packages optionnels. Elle repose sur un schéma de référence de septembre 2026 : Copado Deployer 26.43, Copado SalesforceDx 8.33 et Copado Quality Tools 5.8.</p><p>L'extension Source Format utilise le namespace <code>cmcSf</code> et complète les objets du socle <code>copado</code>. Un namespace ou le mot « Metadata » ne permet donc pas, à lui seul, de classer un objet.</p><p>Les anciens objets d'exécution <code>Step</code>, <code>Deployment_Task</code>, <code>Deployment_Job</code>, <code>Destination_Org</code> et l'ancien <code>Quality_Gate</code> (Automation) sont écartés. Les objets dépréciés <code>User_Story_Bundle</code> et <code>Bundled_UserStory</code> sont également absents. Les objets dont l'usage Source Format n'est pas établi dans le périmètre étudié, notamment <code>Git_Commit</code>, ne sont pas ajoutés par simple proximité de schéma.</p><p>Les objets partagés <code>User_Story_Metadata</code>, <code>Deployment</code>, <code>Git_Backup</code> (Git Snapshot) et <code>Git_Org_Commit</code> (Snapshot Commit) sont conservés : ils interviennent aussi dans le parcours Source Format étudié. L'objet <code>Bundled_Story</code> relie une US à une version de package et se distingue des anciens objets de bundle.</p><p>La version publique exclut les extensions locales ou tierces, les données d'organisation, les valeurs de configuration et les statistiques d'utilisation. Les champs du dictionnaire appartiennent au socle Copado, à SalesforceDx, à Copado Quality ou à Salesforce. Les objets standard Salesforce et les autres modules périphériques ne sont pas développés dans les diagrammes. Le périmètre est documenté ; il ne représente pas tous les modules de toutes les versions de Copado.</p></section>
<section><h2>Repères pour les requêtes</h2><ul><li><code>Promoted_User_Story</code> possède deux Master-Detail, vers l'US et la promotion. Son statut <strong>Active / Outdated</strong> ne décrit pas le résultat du déploiement.</li><li><code>JobStep.Result</code> pointe vers le dernier résultat ; <code>Result.JobStep</code> permet de retrouver les résultats d'une étape. Ce n'est pas une relation 1:1 garantie.</li><li>Les champs tels que <code>Last_Deployment_Execution_Id</code> et <code>LastJobExecutionId</code> stockent du texte. Ils ne sont pas dessinés comme des Lookup.</li><li>Une promotion peut être liée au pipeline directement ou par son projet ou sa release. Le champ Environment de l'US ne suffit pas à reconstruire l'historique de livraison.</li><li>Les objets partagés peuvent contenir des enregistrements de plusieurs formats. Les requêtes d'analyse doivent tenir compte du pipeline et de sa plateforme.</li></ul></section>
<section><h2>Fichiers disponibles</h2><div class="actions"><a href="relationships.csv" download>Relations CSV</a><a href="fields.csv" download>Champs CSV</a><a href="model.json" download>Schéma JSON</a><a href="dictionary.md" download>Dictionnaire Markdown</a></div><p>Chaque vue propose également son SVG et son fichier source Mermaid.</p></section>
<section><h2>Sources et méthode</h2><p>Les relations physiques proviennent de Describe Salesforce et sont recoupées avec les relations enfants. La distinction Lookup / Master-Detail est complétée par les métadonnées de relation. Le périmètre fonctionnel s'appuie sur la documentation Copado et sur la vérification des parcours Source Format.</p><ul>{source_links}</ul></section>'''
    (OUT / "guide.html").write_text(page("Comprendre le modèle Source Format", "guide.html", guide))
    print(f"Version publique : {len(objects)} objets, {len(relations)} relations, {total} champs.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    main(parser.parse_args().source)
