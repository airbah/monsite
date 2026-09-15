/**
 * Rendu local, sans envoi du schéma à un service externe.
 * Installation isolée :
 * PUPPETEER_SKIP_DOWNLOAD=true npm install --prefix /tmp/copado-model-render --no-audit --no-fund @mermaid-js/mermaid-cli
 * Exécution (macOS avec Chrome installé) :
 * node scripts/copado-docs/render.mjs resources/copado-source-format /tmp/copado-model-render
 * Le troisième argument facultatif est le chemin de Chrome.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const output = path.resolve(process.argv[2] || 'resources/copado-source-format');
const runtime = path.resolve(process.argv[3] || '/tmp/copado-model-render');
const chrome = process.argv[4] || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const views = JSON.parse(await fs.readFile(path.join(output, 'views.json'), 'utf8'));
const model = JSON.parse(await fs.readFile(path.join(output, 'model.json'), 'utf8'));
const config = path.join(runtime, 'mermaid-config.json');
const puppeteerConfig = path.join(runtime, 'puppeteer-config.json');
await fs.writeFile(config, JSON.stringify({
  theme: 'base',
  themeVariables: {
    fontFamily: 'Arial, sans-serif', fontSize: '14px',
    primaryColor: '#eef5ff', primaryTextColor: '#172d4a', primaryBorderColor: '#6390ba',
    lineColor: '#67819b', secondaryColor: '#f5f8fc', tertiaryColor: '#ffffff'
  },
  er: { useMaxWidth: false, minEntityWidth: 135, minEntityHeight: 55, entityPadding: 16 },
  maxEdges: 500
}));
await fs.writeFile(puppeteerConfig, JSON.stringify({ executablePath: chrome, args: ['--no-sandbox'] }));
for (const view of views) {
  execFileSync(path.join(runtime, 'node_modules/.bin/mmdc'), [
    '-i', path.join(output, view.slug + '.mmd'),
    '-o', path.join(output, view.slug + '.svg'),
    '-c', config, '-p', puppeteerConfig, '-b', '#ffffff'
  ], { stdio: 'pipe' });
  console.log('Rendu : ' + view.slug);
}
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
// Chaque SVG embarqué possède ses propres identifiants (marqueurs, styles, liens).
const svgs = await Promise.all(views.map(async (v) => {
  let svg = await fs.readFile(path.join(output, v.slug + '.svg'), 'utf8');
  const prefix = 'diagram-' + v.slug + '-';
  const ids = [...svg.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  for (const id of [...new Set(ids)].sort((a,b) => b.length-a.length)) {
    const newId = prefix + id;
    svg = svg.replaceAll('id="' + id + '"', 'id="' + newId + '"')
      .replaceAll('url(#' + id + ')', 'url(#' + newId + ')')
      .replaceAll('href="#' + id + '"', 'href="#' + newId + '"');
  }
  svg = svg.replaceAll('#my-svg', '#' + prefix + 'my-svg');
  return svg;
}));
const cards = model.objects.map(o => `<tr><td><a href="dictionary.html#${esc(o.name)}"><strong>${esc(o.label)}</strong></a><code>${esc(o.name)}</code></td><td>${esc(o.group)}</td><td>${esc(o.role)}</td><td>${o.fields.length}</td></tr>`).join('');
const tabButtons = views.map((v, i) => `<button role="tab" id="tab-${i}" aria-selected="${i === 0}" aria-controls="panel-${i}" data-tab="${i}" tabindex="${i === 0 ? 0 : -1}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(v.title)}</button>`).join('');
const panels = views.map((v, i) => `<section class="panel" role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}" ${i ? 'hidden' : ''}><div class="panel-head"><div><p class="eyebrow">Relations physiques · ${i === 8 ? 'périmètre complet' : 'vue thématique'}</p><h2>${esc(v.title)}</h2></div><div class="downloads"><a href="${v.slug}.svg" download>SVG ↗</a><a href="${v.slug}.mmd" download>Mermaid ↗</a></div></div><div class="viewport">${svgs[i]}</div></section>`).join('');
const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Copado Source Format : modèle de données | Wisee.fr</title><meta name="description" content="Explorez le modèle de données Copado Source Format : objets, champs, relations et neuf diagrammes détaillés."><link rel="canonical" href="https://wisee.fr/resources/copado-source-format/"><meta property="og:title" content="Copado Source Format — Wisee.fr"><meta property="og:url" content="https://wisee.fr/resources/copado-source-format/"><meta property="og:type" content="article">
<style>
:root{font-family:Arial,sans-serif;color:#182740;background:#f9f9f6;font-synthesis:none}*{box-sizing:border-box}body{margin:0}a{color:#2555d9}header{padding:34px 40px 24px;background:#fff;border-bottom:1px solid #dbe3ec}.eyebrow{font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#577088;margin:0 0 9px}h1{font-size:30px;letter-spacing:-.8px;margin:0 0 12px}header p{margin:0;font-size:14px;color:#5c6d80}.badge{display:inline-block;background:#e7f5ef;color:#146a4a;padding:5px 9px;border-radius:5px;font-size:11px;font-weight:bold;vertical-align:middle;margin-left:12px;letter-spacing:.2px}.stats{display:flex;gap:30px;margin-top:22px}.stats strong{font-size:23px;font-weight:600}.stats span{font-size:12px;color:#62768a;margin-left:6px}.workspace{display:grid;grid-template-columns:268px minmax(0,1fr);gap:20px;padding:24px 32px}aside{padding:8px 0}nav{display:grid;gap:5px}nav button{text-align:left;border:0;background:transparent;border-radius:6px;color:#53677c;font-size:13px;line-height:1.5;padding:11px 12px;cursor:pointer}nav button span{display:inline-block;width:28px;color:#7c90a5;font-size:11px}nav button[aria-selected=true]{color:#134d84;background:#e0ecfa;font-weight:bold}nav button:hover{background:#e7edf5}.side-note{margin:24px 12px 16px;font-size:12px;line-height:1.65;color:#63778d}.side-note strong{color:#36516b}.side-links{margin:20px 12px;display:grid;gap:11px;font-size:12px}.content{min-width:0}.panel{border:1px solid #dbe3ec;border-radius:10px;background:white;overflow:hidden}.panel-head{padding:22px 24px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid #e8edf3}h2{font-size:20px;margin:0}.downloads{display:flex;gap:16px;font-size:12px;white-space:nowrap}.viewport{padding:24px;overflow:auto;min-height:390px;background:white}.viewport svg{width:100%;height:auto;max-height:none}.viewport.actual svg{width:auto;min-width:100%}.toolbar{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:12px;font-size:12px;color:#5c738a}.toolbar button{font-size:12px;padding:7px 12px;border:1px solid #ced9e5;background:white;color:#325b80;border-radius:5px;cursor:pointer}.legend{display:flex;gap:18px;flex-wrap:wrap;padding:16px 4px;font-size:11px;color:#63778d}.legend b{color:#304e6e}.note{padding:16px 20px;background:#eaf1f9;border-left:3px solid #749bc2;font-size:12px;line-height:1.6;margin:8px 0 20px}.catalog{margin:8px 32px 32px;background:white;border:1px solid #dbe3ec;border-radius:10px;padding:24px}.catalog-head{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:18px}.catalog input{width:290px;padding:10px 12px;border:1px solid #cbd7e4;border-radius:6px;font:inherit;font-size:13px}.table-scroll{overflow:auto}table{width:100%;border-collapse:collapse;text-align:left;font-size:12px}th{font-weight:600;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6b7d91;background:#f5f8fb}td,th{padding:13px 12px;border-bottom:1px solid #e5ebf2;line-height:1.5}td:first-child{min-width:270px}td:nth-child(2){min-width:130px}code{display:block;margin-top:3px;font-size:10px;color:#6b7d91}footer{padding:0 36px 26px;font-size:11px;color:#73869a}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid #90b7df;outline-offset:2px}[hidden]{display:none!important}@media(max-width:850px){header{padding:24px}.workspace{grid-template-columns:1fr;padding:16px}nav{grid-template-columns:repeat(2,minmax(0,1fr))}.side-note,.side-links{display:none}.catalog{margin:0 16px 20px;padding:16px}.catalog-head{display:block}.catalog input{margin-top:12px;width:100%}.panel-head{padding:18px}.toolbar{flex-wrap:wrap}.stats{gap:15px}.badge{margin:8px 0 0;display:table}.viewport{padding:10px}}
.wisee-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 40px;border-bottom:1px solid #dde2e6;background:#f9f9f6;font-size:12px}.wisee-brand{font-size:24px;font-weight:700;text-decoration:none;color:#182740;letter-spacing:-1px}.wisee-brand span{color:#69798c}.wisee-nav div{display:flex;gap:20px;flex-wrap:wrap}.wisee-nav a:focus-visible{outline:3px solid #2555d9}@media(max-width:600px){.wisee-nav{padding:16px 24px;flex-wrap:wrap}}
</style></head><body><div class="wisee-nav"><a class="wisee-brand" href="/">Wisee<span>.fr</span></a><div><a href="/#resources">Ressources</a><a href="guide.html">Lire la documentation</a><a href="dictionary.html">Dictionnaire</a></div></div>
<header><p class="eyebrow">Architecture des données · Copado</p><h1>Source Format <span class="badge">Édition publique · septembre 2026</span></h1><p>US, promotions et exécutions — les objets partagés nécessaires au parcours SFDX.</p><div class="stats"><div><strong>${model.objects.length}</strong><span>objets</span></div><div><strong>${model.relationships.length}</strong><span>relations</span></div><div><strong>${model.objects.reduce((n,o)=>n+o.fields.length,0).toLocaleString('fr-FR')}</strong><span>champs</span></div><div><strong>9</strong><span>vues</span></div></div></header>
<main><div class="workspace"><aside><nav role="tablist" aria-label="Vues du modèle">${tabButtons}</nav><p class="side-note"><strong>Périmètre contrôlé</strong><br>Les anciens objets d'exécution Metadata Format sont exclus des vues. Les objets partagés restent présents lorsque leur usage Source Format est documenté.<br><br>Deployer 26.43 · SalesforceDx 8.33<br>Schéma de référence du ${esc(model.extractedAt.slice(0,10))}.</p><div class="side-links"><a href="guide.html">Méthode et limites ↗</a><a href="dictionary.html">Dictionnaire des champs ↗</a><a href="guide.html#perimetre">Périmètre et exclusions ↗</a><a href="relationships.csv" download>Relations CSV ↗</a><a href="model.json" download>Modèle JSON ↗</a></div></aside>
<div class="content"><div class="toolbar"><span>Les libellés des liens sont les champs API sur l'objet enfant.</span><button id="size" aria-pressed="false">Taille réelle</button></div>${panels}<div class="legend"><span><b>━━</b> Master-Detail</span><span><b>┄┄</b> Lookup</span><span><b>||</b> exactement 1</span><span><b>o|</b> 0 ou 1</span><span><b>o{</b> 0 à plusieurs</span></div><div class="note"><strong>Lecture du modèle.</strong> Les noms des diagrammes omettent <code style="display:inline;color:inherit">copado__</code> et <code style="display:inline;color:inherit">__c</code>. Les champs contenant un identifiant en texte ne sont pas dessinés comme des Lookup. Les vues thématiques simplifient les liens ; la vue complète et le CSV contiennent les ${model.relationships.length} relations retenues.</div></div></div>
<section class="catalog"><div class="catalog-head"><div><p class="eyebrow">Périmètre Source Format</p><h2>Objets et responsabilités</h2></div><input id="search" type="search" aria-label="Rechercher un objet" placeholder="Rechercher un objet ou un domaine…"></div><div class="table-scroll"><table><thead><tr><th>Objet / nom API</th><th>Domaine</th><th>Rôle</th><th>Champs</th></tr></thead><tbody>${cards}</tbody></table></div><p id="empty" hidden>Aucun objet ne correspond à la recherche.</p></section></main>
<footer>Lecture seule · Aucun contenu métier exporté · Les champs du dictionnaire décrivent le schéma installé des objets partagés, y compris leurs champs historiques. Ils ne sont pas tous utilisés dans chaque parcours Source Format.</footer>
<script>
const buttons=[...document.querySelectorAll('[data-tab]')];buttons.forEach((b,i)=>{b.addEventListener('click',()=>{buttons.forEach((x,j)=>{x.setAttribute('aria-selected',String(i===j));x.tabIndex=i===j?0:-1;document.getElementById('panel-'+j).hidden=i!==j;});});b.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();const n=buttons[(i+1)%buttons.length];n.click();n.focus()}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();const n=buttons[(i+buttons.length-1)%buttons.length];n.click();n.focus()}})});
document.getElementById('size').addEventListener('click',function(){const actual=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',String(actual));this.textContent=actual?'Adapter à la largeur':'Taille réelle';document.querySelectorAll('.viewport').forEach(v=>v.classList.toggle('actual',actual))});
document.getElementById('search').addEventListener('input',function(){const q=this.value.toLocaleLowerCase('fr');let count=0;document.querySelectorAll('tbody tr').forEach(r=>{r.hidden=!r.textContent.toLocaleLowerCase('fr').includes(q);if(!r.hidden)count++});document.getElementById('empty').hidden=count>0});
</script></body></html>`;
await fs.writeFile(path.join(output, 'index.html'), html);
console.log('HTML autonome créé.');
