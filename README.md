# Wisee.fr

Site professionnel d’Abdelhakim Irbah, hébergé sur o2switch et déployé via cPanel.

## Structure

- `index.html` : accueil, missions, profil, formulaire et aperçu des ressources Copado.
- `css/site.css` : styles des composants existants, extraits du HTML.
- `css/design.css` : identité visuelle, variables de thème et adaptations mobiles.
- `js/design.js` : onglets de l’aperçu Copado et accessibilité de la navigation.
- `cv.html`, `css/cv.css`, `js/cv.js` : CV et impression.
- `traitement-contact.php`, `csrf-token.php` : traitement du contact.
- `resources/copado-source-format/` : cartographie, documentation, dictionnaire et exports publics Copado.
- `scripts/copado-docs/` : préparation et rendu des livrables publics ; ces scripts ne sont pas déployés dans `public_html`.
- `.cpanel.yml` : copie des fichiers du site et des dossiers `css`, `js`, `img`, `resources` vers `public_html`.

## Prévisualisation

Avec PHP installé, depuis la racine :

```sh
php -S localhost:8765
```

Pour vérifier uniquement l’interface sans exécuter les scripts PHP :

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

L’envoi du formulaire nécessite le serveur PHP et sa configuration de messagerie. Il ne peut pas être validé avec le serveur statique Python.

## Documentation Copado Source Format

La section `#resources` donne accès au module public dans `resources/copado-source-format/` : neuf diagrammes avec exports SVG/Mermaid, guide de lecture, dictionnaire consultable avec recherche, et exports CSV/JSON.

L'édition de septembre 2026 contient **36 objets, 107 relations et 989 champs**. Elle conserve les objets Copado utilisés par Source Format, exclut les anciens objets d'exécution et retire les extensions locales ou tierces de la cartographie d'origine. Les objets partagés peuvent néanmoins comporter des champs installés utilisés par d'autres fonctionnalités : le guide explique cette limite.

L'import n'embarque aucun alias d'organisation, chemin local personnel, enregistrement métier, statistique d'utilisation, record type, aide personnalisée ni valeur de picklist issue d'une org. Les namespaces de champs custom autorisés sont `copado`, `cmcSf` et `copadoQuality`. Les relations sont filtrées selon cette même liste et tous les diagrammes sont régénérés.

Pour actualiser depuis une cartographie locale déjà extraite :

```sh
python3 scripts/copado-docs/import.py /chemin/vers/copado-source-format
PUPPETEER_SKIP_DOWNLOAD=true npm install --prefix /tmp/copado-model-render --no-audit --no-fund @mermaid-js/mermaid-cli
node scripts/copado-docs/render.mjs resources/copado-source-format /tmp/copado-model-render
```

Le rendu utilise Chrome local (chemin macOS par défaut, autre chemin possible en troisième argument après les deux dossiers). L'import et le rendu n'appellent pas Salesforce. Les livrables sont ensuite autonomes et n'utilisent aucun CDN pour les diagrammes. Revoir le périmètre, les versions de packages et les compteurs de l'accueil lors d'une nouvelle extraction.

Vérifier avant publication la navigation depuis l'accueil, les neuf onglets, les liens du guide, la recherche du dictionnaire, les exports, l'affichage mobile et l'absence de données d'organisation. Les trois pages du module sont déclarées dans `sitemap.xml` et le dossier `resources` est couvert par `.cpanel.yml`.

La fusion d'une branche GitHub et la mise en ligne cPanel sont deux opérations distinctes : dans Git Version Control, mettre à jour le dépôt depuis GitHub puis déployer le HEAD avec `.cpanel.yml`.
