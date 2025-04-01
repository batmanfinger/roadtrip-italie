// Configuration Tesla Model 3 Performance 2019 avec dégradation
const teslaConfig = {
    model: "Model 3 Performance 2019",
    batteryCapacity: 75 * 0.85, // kWh (batterie de 75 kWh avec 15% de dégradation)
    averageConsumption: 175, // Wh/km (consommation de base)
    averageSpeed: 130, // km/h (vitesse moyenne sur autoroute ajustée)
    chargingEfficiency: 0.92, // Efficacité de charge (92%)
    // Facteurs affectant la consommation
    factors: {
        highway: 1.30, // Consommation autoroute à 130 km/h (+30%)
        mountain: 1.35, // Routes montagneuses (+35%)
        city: 0.85, // Conduite urbaine (-15%)
        temperature: {
            cold: 1.25, // Temps froid (<5°C) (+25%)
            mild: 1.0, // Température modérée
            hot: 1.15 // Temps chaud (>30°C) (+15%)
        }
    }
};

// Calcul de consommation d'énergie Tesla
function calculateEnergyConsumption(distance, routeType = 'highway', temperature = 'mild') {
    // Distance en km, consommation de base en Wh/km
    let consumption = teslaConfig.averageConsumption;
    
    // Appliquer facteurs selon type de route
    if (routeType === 'highway') {
        consumption *= teslaConfig.factors.highway;
    } else if (routeType === 'mountain') {
        consumption *= teslaConfig.factors.mountain;
    } else if (routeType === 'city') {
        consumption *= teslaConfig.factors.city;
    }
    
    // Appliquer facteur température
    consumption *= teslaConfig.factors.temperature[temperature];
    
    // Calculer consommation totale en kWh
    const totalConsumption = (consumption * distance) / 1000;
    
    // Calculer pourcentage de batterie utilisé
    const batteryPercentage = (totalConsumption / teslaConfig.batteryCapacity) * 100;
    
    return {
        distance: distance, // km
        consumption: consumption, // Wh/km
        totalEnergy: totalConsumption.toFixed(1), // kWh
        batteryPercentage: batteryPercentage.toFixed(1), // %
        remainingRange: ((teslaConfig.batteryCapacity - totalConsumption) / (consumption/1000)).toFixed(1) // km
    };
}

// Objet pour stocker les consommations d'énergie par jour
const dayEnergyConsumption = {};

// Script principal pour initialiser la carte et les fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
    // Configuration de l'API GraphHopper
    const graphHopperConfig = {
        apiKey: '08c8419d-5a98-4312-b836-4a8bcb7671fb', // Remplacez par votre clé API
        baseUrl: 'https://graphhopper.com/api/1'
    };

    // Objet pour stocker les distances par jour
    const dayDistances = {};

    // Initialisation de la carte
    const map = L.map('map').setView([45.4642, 9.1900], 6); // Centré sur Milan initialement
    
    // Ajout du fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Création des marqueurs pour chaque activité
    const markers = [];
    const markerGroups = {}; // Pour regrouper les marqueurs par jour
    
    // Fonction utilitaire pour corriger l'ordre des coordonnées (longitude/latitude -> latitude/longitude)
    function correctCoordinates(coords) {
        return [coords[1], coords[0]]; // Inverser l'ordre pour Leaflet
    }
    
    // Fonction pour créer des icônes de marqueur personnalisées à partir de classes Font Awesome
    function createMarkerIcon(iconClass, color) {
        // Définir la couleur par défaut si non fournie
        const bgColor = color || '#3498db';
        
        return L.divIcon({
            className: 'marker-custom',
            html: `<div style="background-color: ${bgColor}; width: 100%; height: 100%; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
                    <i class="${iconClass}" style="color: white;"></i>
                  </div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
    }
    
    // Icônes par défaut pour la compatibilité avec le code existant
    const cityIcon = createMarkerIcon('fas fa-city', '#3498db');
    const chargingIcon = createMarkerIcon('fas fa-charging-station', '#e74c3c');
    const visitIcon = createMarkerIcon('fas fa-camera', '#2ecc71');
    
    // Création des marqueurs pour chaque activité avec des popups
    roadtripData.days.forEach(day => {
        const dayGroup = L.layerGroup();
        markerGroups[day.day] = dayGroup;
        
        day.activities.forEach(activity => {
            if (activity.coordinates) {
                let icon;
                
                // Utiliser l'icône personnalisée si définie dans le JSON
                if (activity.icon) {
                    icon = createMarkerIcon(activity.icon, activity.iconColor);
                } else {
                    // Détecter automatiquement l'icône en fonction du type d'activité
                    if (activity.activity.toLowerCase().includes('recharge') ||
                        activity.activity.toLowerCase().includes('superchargeur')) {
                        icon = createMarkerIcon('fas fa-charging-station', '#e74c3c');
                    } else if (activity.activity.toLowerCase().includes('visite') ||
                              activity.activity.toLowerCase().includes('musée') ||
                              activity.activity.toLowerCase().includes('promenade') ||
                              activity.activity.toLowerCase().includes('exploration')) {
                        icon = createMarkerIcon('fas fa-camera', '#2ecc71');
                    } else if (activity.activity.toLowerCase().includes('hôtel') ||
                              activity.activity.toLowerCase().includes('hotel') ||
                              activity.activity.toLowerCase().includes('logement')) {
                        icon = createMarkerIcon('fas fa-bed', '#9b59b6');
                    } else if (activity.activity.toLowerCase().includes('restaurant') ||
                              activity.activity.toLowerCase().includes('dîner') ||
                              activity.activity.toLowerCase().includes('déjeuner') ||
                              activity.activity.toLowerCase().includes('repas')) {
                        icon = createMarkerIcon('fas fa-utensils', '#f39c12');
                    } else {
                        icon = createMarkerIcon('fas fa-map-marker-alt', '#3498db');
                    }
                }
                
                // Corriger les coordonnées (inversion longitude/latitude)
                const correctedCoords = correctCoordinates(activity.coordinates);
                
                // Créer le marqueur avec les coordonnées corrigées
                const marker = L.marker(correctedCoords, { icon: icon });
                
                // Créer le contenu du popup
                let popupContent = `
                    <div class="marker-popup">
                        <h3>${activity.activity}</h3>
                        <p><strong>Jour ${day.day}:</strong> ${day.title}</p>
                        <p><strong>Horaire:</strong> ${activity.time}</p>
                `;
                
                if (activity.tips) {
                    popupContent += `<p><strong>Conseils:</strong> ${activity.tips}</p>`;
                }
                
                if (activity.link) {
                    popupContent += `<p><a href="${activity.link}" target="_blank">Plus d'informations</a></p>`;
                }
                
                popupContent += `</div>`;
                
                // Ajouter le popup au marqueur
                marker.bindPopup(popupContent);
                
                // Ajouter le marqueur au groupe du jour
                marker.addTo(dayGroup);
                markers.push(marker);
            }
        });
        
        // Ajouter le groupe à la carte
        dayGroup.addTo(map);
    });
    
    // Fonction pour calculer la distance à vol d'oiseau (formule Haversine)
    function calculateHaversineDistance(coord1, coord2) {
        // Rayon de la Terre en km
        const R = 6371;
        
        // Convertir les coordonnées de degrés en radians
        const lat1 = coord1[0] * Math.PI / 180;
        const lon1 = coord1[1] * Math.PI / 180;
        const lat2 = coord2[0] * Math.PI / 180;
        const lon2 = coord2[1] * Math.PI / 180;
        
        // Différence des coordonnées
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;
        
        // Formule Haversine
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;
        
        return Math.round(distance); // Arrondir à l'entier le plus proche
    }
    
    // Fonction pour vérifier si un itinéraire est valide
    function checkValidRoute(start, end) {
        // Zones problématiques connues (routes alpines, etc.)
        const problematicCoords = [
            // Région d'Andermatt / Sources du Rhône
            [46.6376, 8.5944],
            [46.5786, 8.3903]
        ];
        
        // Vérifier si les points de départ ou d'arrivée sont dans des zones problématiques
        const isStartProblematic = problematicCoords.some(coord => 
            Math.abs(coord[0] - start[0]) < 0.1 && Math.abs(coord[1] - start[1]) < 0.1
        );
        
        const isEndProblematic = problematicCoords.some(coord => 
            Math.abs(coord[0] - end[0]) < 0.1 && Math.abs(coord[1] - end[1]) < 0.1
        );
        
        return !(isStartProblematic || isEndProblematic);
    }
    
async function fetchRouteAndDisplay(start, end, color, weight, opacity, dayNumber, routeType = 'highway', temperature = 'mild') {
    try {
        // Corriger les coordonnées pour GraphHopper
        const startCorrected = correctCoordinates(start);
        const endCorrected = correctCoordinates(end);
        
        // Vérifier si les coordonnées sont dans une zone valide
        const isValidRoute = checkValidRoute(startCorrected, endCorrected);
        
        if (!isValidRoute) {
            console.warn("Route potentiellement non valide, utilisation du mode de secours", startCorrected, endCorrected);
            // Utiliser une ligne droite pour les zones où l'API ne fonctionne pas bien
            const polyline = L.polyline([startCorrected, endCorrected], {
                color: color || '#3388ff',
                weight: weight || 3,
                opacity: opacity || 0.7,
                dashArray: '5, 5' // Ligne pointillée pour indiquer une approximation
            }).addTo(map);
            
            // Estimer la distance à vol d'oiseau
            const estimatedDistance = calculateHaversineDistance(startCorrected, endCorrected);
            
            // Calculer la consommation d'énergie
            const energyData = calculateEnergyConsumption(estimatedDistance, routeType, temperature);
            
            // Ajouter une estimation de distance et d'énergie au jour
            if (dayNumber) {
                if (!dayDistances[dayNumber]) {
                    dayDistances[dayNumber] = 0;
                    dayEnergyConsumption[dayNumber] = 0;
                }
                dayDistances[dayNumber] += estimatedDistance;
                dayEnergyConsumption[dayNumber] += parseFloat(energyData.totalEnergy);
            }
            
            return { polyline, distance: estimatedDistance, energyData };
        }
        
        // Construction de l'URL GraphHopper avec la clé API depuis la variable de configuration
        const url = `${graphHopperConfig.baseUrl}/route?point=${startCorrected[0]},${startCorrected[1]}&point=${endCorrected[0]},${endCorrected[1]}&vehicle=car&locale=fr&key=${graphHopperConfig.apiKey}&type=json`;
        
        // Appel API réel
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`GraphHopper API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        
        let polyline;
        let distance = 0;
        let energyData = null;
        
        if (data && data.paths && data.paths.length > 0) {
            // Extraire la distance en kilomètres
            distance = Math.round(data.paths[0].distance / 1000);
            
            // Calculer la consommation d'énergie
            energyData = calculateEnergyConsumption(distance, routeType, temperature);
            
            // Ajouter la distance et les données d'énergie au jour
            if (dayNumber) {
                if (!dayDistances[dayNumber]) {
                    dayDistances[dayNumber] = 0;
                    dayEnergyConsumption[dayNumber] = 0;
                }
                dayDistances[dayNumber] += distance;
                dayEnergyConsumption[dayNumber] += parseFloat(energyData.totalEnergy);
            }
            
            // Utiliser les points de l'itinéraire réel
            const points = decodePolyline(data.paths[0].points).map(coord => [coord[0], coord[1]]);
            polyline = L.polyline(points, {
                color: color || '#3388ff',
                weight: weight || 3,
                opacity: opacity || 0.7
            }).addTo(map);
        } else {
            throw new Error("No path found in GraphHopper response");
        }
        
        return { polyline, distance, energyData };
    } catch (error) {
        console.error("Erreur lors de la récupération de l'itinéraire:", error);
        
        // Fallback en cas d'erreur: tracer une ligne droite
        const startCorrected = correctCoordinates(start);
        const endCorrected = correctCoordinates(end);
        
        const polyline = L.polyline([startCorrected, endCorrected], {
            color: color || '#3388ff',
            weight: weight || 3,
            opacity: opacity || 0.7,
            dashArray: '5, 5' // Ligne pointillée pour indiquer une approximation
        }).addTo(map);
        
        // Calculer la distance à vol d'oiseau
        const estimatedDistance = calculateHaversineDistance(startCorrected, endCorrected);
        
        // Calculer la consommation d'énergie
        const energyData = calculateEnergyConsumption(estimatedDistance, routeType, temperature);
        
        // Ajouter une estimation de distance et d'énergie au jour
        if (dayNumber) {
            if (!dayDistances[dayNumber]) {
                dayDistances[dayNumber] = 0;
                dayEnergyConsumption[dayNumber] = 0;
            }
            dayDistances[dayNumber] += estimatedDistance;
            dayEnergyConsumption[dayNumber] += parseFloat(energyData.totalEnergy);
        }
        
        return { polyline, distance: estimatedDistance, energyData };
    }
}
    
    // Fonction pour décoder le polyline encodé retourné par GraphHopper
    function decodePolyline(encoded) {
        // Implémentation de l'algorithme de décodage polyline
        var points = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;
        
        while (index < len) {
            var b, shift = 0, result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;
            
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            
            points.push([lat / 1e5, lng / 1e5]);
        }
        
        return points;
    }
    
   function updateDayDistances() {
    // Pour chaque jour dans la sidebar
    document.querySelectorAll('.dayItem').forEach(dayItem => {
        const dayNumber = parseInt(dayItem.getAttribute('data-day'));
        const distanceSpan = dayItem.querySelector('.day-distance');
        
        // Si nous avons une distance pour ce jour
        if (dayDistances[dayNumber]) {
            // Préparer le texte avec distance
            const distance = dayDistances[dayNumber];
            let displayText = `(${distance} km`;
            
            // Ajouter information d'énergie si disponible
            if (dayEnergyConsumption && dayEnergyConsumption[dayNumber]) {
                const energy = dayEnergyConsumption[dayNumber].toFixed(1);
                const percent = ((energy / teslaConfig.batteryCapacity) * 100).toFixed(0);
                displayText += ` | ${energy} kWh (${percent}%)`;
            }
            
            // Fermer la parenthèse
            displayText += ")";
            
            // Mettre à jour ou créer l'élément span
            if (distanceSpan) {
                distanceSpan.textContent = displayText;
                
                // Ajouter classe si haute consommation
                if (dayEnergyConsumption && dayEnergyConsumption[dayNumber]) {
                    const energy = dayEnergyConsumption[dayNumber];
                    const percent = (energy / teslaConfig.batteryCapacity) * 100;
                    if (percent > 80) {
                        distanceSpan.classList.add('high-consumption');
                    } else {
                        distanceSpan.classList.remove('high-consumption');
                    }
                }
            } else {
                // Créer un nouveau span si nécessaire
                const dateDiv = dayItem.querySelector('.dayDate');
                if (dateDiv) {
                    const newSpan = document.createElement('span');
                    newSpan.className = 'day-distance';
                    newSpan.textContent = displayText;
                    
                    // Ajouter classe si haute consommation
                    if (dayEnergyConsumption && dayEnergyConsumption[dayNumber]) {
                        const energy = dayEnergyConsumption[dayNumber];
                        const percent = (energy / teslaConfig.batteryCapacity) * 100;
                        if (percent > 80) {
                            newSpan.classList.add('high-consumption');
                        }
                    }
                    
                    dateDiv.appendChild(newSpan);
                }
            }
        }
    });
}
    
    // Fonction améliorée pour tracer les itinéraires
    async function drawMainRoutes() {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#d35400'];
        
        // Définition des trajets spéciaux qui nécessitent un traitement particulier
        // Définition des trajets spéciaux qui nécessitent un traitement particulier
const specialRoutes = {
    // Jour 3: Milan - Côme - Vérone
    3: async (day, color) => {
        const milanCoords = [9.1900, 45.4642]; // Milan
        const comeCoords = [9.4012, 45.8080]; // Côme
        const tremezzo = [9.2296, 45.9878]; // Villa Carlotta/Tremezzo
        const varennaCoords = [9.2840, 46.0112]; // Varenna
        const bergamoCoords = [9.6700, 45.6983]; // Bergamo
        const veroneCoords = [10.9916, 45.4384]; // Vérone
        
        // Milan à Côme
        await fetchRouteAndDisplay(milanCoords, comeCoords, color, 4, 0.7, day.day, 'city', 'mild');
        // Côme à Tremezzo
        await fetchRouteAndDisplay(comeCoords, tremezzo, color, 4, 0.7, day.day, 'mountain', 'mild');
        // Traversée en ferry (ligne pointillée)
        const ferryLine = L.polyline([
            correctCoordinates(tremezzo), 
            correctCoordinates(varennaCoords)
        ], {
            color: color,
            weight: 3,
            opacity: 0.7,
            dashArray: '5, 5'
        }).addTo(map);
        // Varenna à Bergamo
        await fetchRouteAndDisplay(varennaCoords, bergamoCoords, color, 4, 0.7, day.day, 'mountain', 'mild');
        // Bergamo à Vérone
        await fetchRouteAndDisplay(bergamoCoords, veroneCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        
        return true;
    },
    
    // Jour 10: Sienne - Naples - Sorrento
    10: async (day, color) => {
        const sienneCoords = [11.3301, 43.3184]; // Sienne
        const cepranoCoords = [13.9136, 41.5569]; // Ceprano
        const sorrentoCoords = [14.3757, 40.6263]; // Sorrento
        
        // Sienne à Ceprano
        await fetchRouteAndDisplay(sienneCoords, cepranoCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        // Ceprano à Sorrento
        await fetchRouteAndDisplay(cepranoCoords, sorrentoCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        
        return true;
    },
    
    // Jour 12: Sorrento - Naples - Rome
    12: async (day, color) => {
        const sorrentoCoords = [14.3757, 40.6263]; // Sorrento
        const naplesCoords = [14.2681, 40.8518]; // Naples
        const romeCoords = [12.4964, 41.9028]; // Rome
        
        // Sorrento à Naples
        await fetchRouteAndDisplay(sorrentoCoords, naplesCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        // Naples à Rome
        await fetchRouteAndDisplay(naplesCoords, romeCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        
        return true;
    },
    
    // Jour 15: Pise - La Spezia - Gênes
    15: async (day, color) => {
        const piseCoords = [10.4017, 43.7228]; // Pise
        const viareggiCoords = [10.238491, 43.875921]; // Viareggio
        const laSpezia = [9.8259, 44.1024]; // La Spezia
        const riomaggioreCoords = [9.7379, 44.0999]; // Riomaggiore
        const rapalloCoords = [9.2310, 44.3522]; // Rapallo
        const genesCoords = [8.9463, 44.4056]; // Gênes
        
        // Pise à Viareggio
        await fetchRouteAndDisplay(piseCoords, viareggiCoords, color, 4, 0.7, day.day, 'highway', 'mild');
        // Viareggio à La Spezia
        await fetchRouteAndDisplay(viareggiCoords, laSpezia, color, 4, 0.7, day.day, 'coast', 'mild');
        // La Spezia à Riomaggiore
        await fetchRouteAndDisplay(laSpezia, riomaggioreCoords, color, 4, 0.7, day.day, 'coast', 'mild');
        // Riomaggiore à Rapallo
        await fetchRouteAndDisplay(riomaggioreCoords, rapalloCoords, color, 4, 0.7, day.day, 'coast', 'mild');
        // Rapallo à Gênes
        await fetchRouteAndDisplay(rapalloCoords, genesCoords, color, 4, 0.7, day.day, 'coast', 'mild');
        
        return true;
    }
};
        
        // Parcourir chaque jour
        for (let i = 0; i < roadtripData.days.length; i++) {
            const day = roadtripData.days[i];
            const dayNumber = day.day;
            const color = colors[i % colors.length];
            
            // Vérifier si c'est un itinéraire spécial qui nécessite un traitement particulier
            if (specialRoutes[dayNumber]) {
                console.log(`Traitement spécial pour le jour ${dayNumber}`);
                const handled = await specialRoutes[dayNumber](day, color);
                if (handled) continue; // Passer au jour suivant si l'itinéraire a été traité
            }
            
            // Vérifier si le titre contient un trajet (séparé par " - ")
            if (day.title.includes(" - ")) {
                // Extraire les villes du titre
                const cities = day.title.split(" - ");
                
                // Cas où le jour représente un déplacement entre villes
                if (cities.length >= 2) {
                    console.log(`Jour ${day.day}: Trajet de ${cities[0]} à ${cities[cities.length-1]}`);
                    
                    // Trouver les coordonnées des villes dans mainLocations
                    const startCity = mainLocations.find(loc => loc.name === cities[0]);
                    const endCity = mainLocations.find(loc => loc.name === cities[cities.length-1]);
                    
                    if (startCity && endCity) {
                        // Trajet normal entre villes
                        await fetchRouteAndDisplay(startCity.coords, endCity.coords, color, 4, 0.7, dayNumber);
                    }
                    
                    // Trouver les activités à l'intérieur de ces villes (visites, musées, etc.)
                    const activitiesWithCoords = day.activities.filter(act => act.coordinates);
                    
                    // Ignore première et dernière activité (départ/arrivée), c'est déjà traité
                    if (activitiesWithCoords.length > 2) {
                        let currentCityActivities = [];
                        
                        // Grouper les activités par ville
                        for (let j = 1; j < activitiesWithCoords.length - 1; j++) {
                            const activity = activitiesWithCoords[j];
                            currentCityActivities.push(activity);
                        }
                        
                        // Tracer les itinéraires à l'intérieur d'une même ville
                        for (let j = 0; j < currentCityActivities.length - 1; j++) {
                            const start = currentCityActivities[j].coordinates;
                            const end = currentCityActivities[j + 1].coordinates;
                            
                            // Vérifier si ces points sont suffisamment proches (même ville)
                            const distance = calculateHaversineDistance(
                                correctCoordinates(start), 
                                correctCoordinates(end)
                            );
                            
                            // Si la distance est inférieure à X km, considérer que c'est dans la même ville
                            if (distance < 30) {
                                await fetchRouteAndDisplay(start, end, color, 3, 0.6, dayNumber);
                            }
                        }
                    }
                }
            } 
            // Cas où le jour représente des activités dans une même ville
            else {
                // Ne tracer que les trajets entre points d'intérêt de la ville
                const activitiesWithCoords = day.activities.filter(act => act.coordinates);
                
                if (activitiesWithCoords.length >= 2) {
                    for (let j = 0; j < activitiesWithCoords.length - 1; j++) {
                        const start = activitiesWithCoords[j].coordinates;
                        const end = activitiesWithCoords[j + 1].coordinates;
                        await fetchRouteAndDisplay(start, end, color, 3, 0.6, dayNumber);
                    }
                }
            }
        }
        
        updateDayDistances();
    }
    
    // Appeler la fonction pour dessiner les routes principales
    drawMainRoutes();
    
    // Générer la liste des jours dans la sidebar
    const dayListElement = document.getElementById('dayList');
    
    roadtripData.days.forEach(day => {
        const dayItem = document.createElement('li');
        dayItem.className = 'dayItem';
        dayItem.setAttribute('data-day', day.day);
        
        // Formater la date
        const dateObj = new Date(day.date);
        const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        // Créer le contenu de l'élément
        dayItem.innerHTML = `
            <div class="dayTitle">
                <span>Jour ${day.day}: ${day.title}</span>
                <button class="toggle-activities"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="dayDate">
                ${formattedDate} <span class="day-distance"></span>
            </div>
            <div class="activities" id="activities-${day.day}">
                ${day.activities.map(activity => `
                    <div class="activity">
                        <div class="activityTime">${activity.time}</div>
                        <div class="activityTitle">${activity.activity}</div>
                        ${activity.tips ? `<div class="activityTips">${activity.tips}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        // Ajouter à la liste
        dayListElement.appendChild(dayItem);
        
        // Ajouter les écouteurs d'événements
        const toggleBtn = dayItem.querySelector('.toggle-activities');
        const activitiesDiv = dayItem.querySelector('.activities');
        
        toggleBtn.addEventListener('click', function(event) {
            // Empêcher la propagation pour éviter de déclencher l'événement de clic sur le dayItem
            event.stopPropagation();
            
            // Afficher/masquer les activités
            const isVisible = activitiesDiv.style.display === 'block';
            activitiesDiv.style.display = isVisible ? 'none' : 'block';
            
            // Changer l'icône
            toggleBtn.innerHTML = isVisible ? 
                '<i class="fas fa-chevron-down"></i>' : 
                '<i class="fas fa-chevron-up"></i>';
        });
        
        // Ajouter événement pour centrer la carte sur le jour sélectionné
        dayItem.addEventListener('click', function(e) {
            // Ne pas déclencher si on clique sur le bouton
            if (e.target === toggleBtn || toggleBtn.contains(e.target)) return;
            
            // Supprimer la classe active de tous les jours
            document.querySelectorAll('.dayItem').forEach(item => {
                item.classList.remove('active-day');
            });
            
            // Ajouter la classe active au jour sélectionné
            dayItem.classList.add('active-day');
            
            // Trouver les coordonnées des activités du jour
            const dayActivities = roadtripData.days.find(d => d.day == day.day).activities;
            const dayCoords = dayActivities
                .filter(act => act.coordinates)
                .map(act => correctCoordinates(act.coordinates)); // Corriger les coordonnées
            
            if (dayCoords.length > 0) {
                // Créer une bounds pour englober toutes les activités du jour
                const bounds = L.latLngBounds(dayCoords);
                map.fitBounds(bounds, { padding: [50, 50] });
            }
        });
    });
    
    // Gestion améliorée du bouton de bascule de la sidebar
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    // État initial
    sidebar.classList.add('active'); // Commencer avec la sidebar ouverte sur desktop

    // Fonction pour mettre à jour l'icône du bouton
    function updateToggleIcon() {
        if (sidebar.classList.contains('active')) {
            toggleSidebarBtn.innerHTML = '<i class="fas fa-times"></i>'; // X quand ouvert
        } else {
            toggleSidebarBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Burger quand fermé
        }
    }

    // Initialiser l'icône
    updateToggleIcon();

    // Gestionnaire d'événement click
    toggleSidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        updateToggleIcon();
    });

    // Sur mobile, initialiser la sidebar fermée
    function checkMobile() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
        updateToggleIcon();
    }

    // Vérifier la taille d'écran au chargement
    checkMobile();

    // Vérifier la taille d'écran au redimensionnement
    window.addEventListener('resize', checkMobile);
});
