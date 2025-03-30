# Roadtrip en Italie - Carte Interactive

Application web permettant de visualiser un roadtrip en Italie avec une carte interactive OpenStreetMap et l'intégration de l'API GraphHopper pour les itinéraires.

## Caractéristiques

- **Interface responsive** adaptée à tous les appareils
- **17 jours d'itinéraire** détaillés avec toutes les étapes du voyage
- **Carte interactive** avec marqueurs personnalisés pour chaque type d'activité
- **Itinéraires calculés** entre les principales villes du parcours
- **Panneau latéral** organisé par jour avec liste détaillée des activités
- **Informations pratiques** pour chaque étape (conseils, liens, horaires)

## Structure du projet

Le projet est organisé selon les bonnes pratiques de développement web avec une séparation claire des préoccupations :

- `index.html` - Structure HTML de base
- `styles.css` - Styles et mise en page
- `roadtrip-data.js` - Données structurées du roadtrip
- `app.js` - Logique d'application et interactions

## Technologies utilisées

- **Leaflet.js** - Bibliothèque JavaScript pour les cartes interactives
- **OpenStreetMap** - Fournisseur de cartes
- **GraphHopper API** - Service de calcul d'itinéraires
- **Font Awesome** - Icônes pour l'interface
- **JavaScript natif** - Sans dépendances à des frameworks

## Installation et déploiement

1. Clonez ce dépôt
2. Ouvrez le fichier `index.html` dans un navigateur web
3. Pour un déploiement en production, hébergez les fichiers sur un serveur web standard

## Clé API GraphHopper

L'application utilise actuellement une clé démo pour l'API GraphHopper. Pour un usage en production :

1. Obtenez une clé API sur [GraphHopper](https://www.graphhopper.com/)
2. Remplacez la clé de démo dans `app.js` par votre clé personnelle
3. Décommentez les appels réels à l'API dans la fonction `fetchRouteAndDisplay`

## Personnalisation

Vous pouvez facilement personnaliser l'application :

- Modifier les données du roadtrip dans `roadtrip-data.js`
- Ajuster les styles et couleurs dans `styles.css`
- Ajouter des fonctionnalités supplémentaires dans `app.js`

## Extensions possibles

- Ajout d'un sélecteur de jour (calendrier) pour une navigation rapide
- Intégration d'informations météo pour chaque étape
- Calcul de la consommation électrique et autonomie Tesla
- Version imprimable de l'itinéraire
- Mode hors ligne pour utilisation sans connexion internet

## Licence

MIT