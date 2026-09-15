# Wisee.fr

Site professionnel d’Abdelhakim Irbah, hébergé sur o2switch et déployé via cPanel.

## Structure

- `index.html` : accueil, missions, profil, formulaire et aperçu des ressources Copado.
- `css/site.css` : styles des composants existants, extraits du HTML.
- `css/design.css` : identité visuelle, variables de thème et adaptations mobiles.
- `js/design.js` : onglets de l’aperçu Copado et accessibilité de la navigation.
- `cv.html`, `css/cv.css`, `js/cv.js` : CV et impression.
- `traitement-contact.php`, `csrf-token.php` : traitement du contact.
- `.cpanel.yml` : copie des fichiers du site et des dossiers `css`, `js`, `img` vers `public_html`.

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

## Prochain module Copado

La section `#resources` prépare l’intégration de la documentation et de la cartographie Source Format développées dans le projet `sfCopadoDevs`, dossier `docs/copado-source-format`.

Cette version fournit trois aperçus conceptuels (US/commits, promotions, exécution) et annonce le module complet comme **en préparation**. Elle n’embarque ni l’extraction d’organisation, ni le dictionnaire, ni les SVG complets. Les chiffres affichés décrivent le périmètre du module préparé en septembre 2026 : 36 objets, 109 relations et neuf vues.

Lors de l’intégration complète :

1. Prévoir une route dédiée, par exemple `resources/copado-source-format/`, et réutiliser les variables de `css/design.css` pour harmoniser le module.
2. Revoir le périmètre et les fichiers destinés au public avant d’importer les livrables.
3. Remplacer les annonces et aperçus par les accès à la documentation et au visualiseur.
4. Ajouter le nouveau dossier à `.cpanel.yml` et ses pages à `sitemap.xml`.

Les nouveaux fichiers CSS et JS de la refonte sont déjà couverts par les règles de déploiement actuelles. La fusion d’une branche GitHub et la mise en ligne cPanel sont deux opérations distinctes.
