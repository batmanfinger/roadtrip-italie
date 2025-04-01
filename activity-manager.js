/**
 * Activity Manager - Module d'ajout d'activités pour Roadtrip en Italie
 * Version sans eval() pour respecter la politique CSP
 */

(function() {
    // Attendre que la page soit complètement chargée
    window.addEventListener('load', function() {
        console.log("Page chargée, démarrage de l'initialisation du gestionnaire d'activités");
        // Attendre encore un peu pour s'assurer que les scripts sont exécutés
        setTimeout(checkAndInitActivityManager, 3000);
    });

    // Vérifier les dépendances et initialiser
    function checkAndInitActivityManager() {
        if (typeof L !== 'undefined' && 
            typeof window.map !== 'undefined' && 
            typeof window.roadtripData !== 'undefined' && 
            typeof window.markerGroups !== 'undefined') {
            
            console.log("Toutes les dépendances sont disponibles, initialisation du gestionnaire d'activités");
            initActivityManager();
        } else {
            console.log("Dépendances non disponibles:", {
                "Leaflet": typeof L !== 'undefined',
                "map": typeof window.map !== 'undefined',
                "roadtripData": typeof window.roadtripData !== 'undefined',
                "markerGroups": typeof window.markerGroups !== 'undefined'
            });
            
            // Ajouter un bouton pour initialisation manuelle
            if (!document.getElementById('manualInitButton')) {
                const button = document.createElement('button');
                button.id = 'manualInitButton';
                button.innerHTML = 'Initialiser le gestionnaire d\'activités';
                button.style.position = 'fixed';
                button.style.bottom = '130px';
                button.style.left = '15px';
                button.style.zIndex = '1001';
                button.style.backgroundColor = '#3498db';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '4px';
                button.style.padding = '8px 12px';
                button.onclick = function() {
                    document.getElementById('manualInitButton').remove();
                    checkAndInitActivityManager();
                };
                document.body.appendChild(button);
            }
        }
    }

    // Styles CSS pour l'UI d'ajout d'activité
    function injectStyles() {
        const styles = `
        /* Style du bouton d'ajout d'activité */
        .add-activity-button {
            position: absolute;
            bottom: 30px;
            left: 15px;
            z-index: 1001;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 8px 12px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            transition: background-color 0.3s;
        }

        .add-activity-button:hover {
            background-color: #2980b9;
        }

        .add-activity-button i {
            margin-right: 5px;
        }

        /* Styles du modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            overflow: auto;
        }

        .modal-content {
            background-color: #fff;
            margin: 50px auto;
            padding: 20px;
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            position: relative;
        }

        .close-modal {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 24px;
            font-weight: bold;
            color: #aaa;
            cursor: pointer;
        }

        .close-modal:hover {
            color: #333;
        }

        /* Styles du formulaire */
        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        .form-group textarea {
            height: 100px;
            resize: vertical;
        }

        .location-instruction {
            cursor: pointer;
            color: #3498db;
            font-size: 14px;
            margin-top: 5px;
        }

        .location-instruction:hover {
            text-decoration: underline;
        }

        #selectedLocation {
            margin-top: 8px;
            font-size: 14px;
            color: #666;
        }

        .form-actions {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            gap: 10px;
        }

        .btn-primary,
        .btn-secondary {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
        }

        .btn-primary {
            background-color: #3498db;
            color: white;
        }

        .btn-primary:hover {
            background-color: #2980b9;
        }

        .btn-secondary {
            background-color: #95a5a6;
            color: white;
        }

        .btn-secondary:hover {
            background-color: #7f8c8d;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .modal-content {
                width: 95%;
                margin: 20px auto;
                padding: 15px;
            }
            
            .add-activity-button {
                bottom: 80px;
            }
        }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Création du modal d'ajout d'activité
    function createAddActivityModal() {
        // Créer l'élément modal
        const modal = document.createElement('div');
        modal.id = 'addActivityModal';
        modal.className = 'modal';
        
        // Générer les options pour les jours
        let daysOptions = '';
        window.roadtripData.days.forEach(day => {
            daysOptions += `<option value="${day.day}">Jour ${day.day}: ${day.title}</option>`;
        });
        
        // Contenu du modal
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Ajouter une activité</h2>
                <form id="addActivityForm">
                    <div class="form-group">
                        <label for="activityDay">Jour:</label>
                        <select id="activityDay" required>
                            ${daysOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="activityTime">Heure:</label>
                        <input type="text" id="activityTime" placeholder="ex: 14:30-16:00" required>
                    </div>
                    <div class="form-group">
                        <label for="activityTitle">Activité:</label>
                        <input type="text" id="activityTitle" placeholder="ex: Visite du musée" required>
                    </div>
                    <div class="form-group">
                        <label for="activityTips">Conseils/Notes:</label>
                        <textarea id="activityTips" placeholder="ex: N'oubliez pas la crème solaire"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="activityLink">Lien (optionnel):</label>
                        <input type="url" id="activityLink" placeholder="ex: https://www.museum.com">
                    </div>
                    <div class="form-group">
                        <label>Emplacement:</label>
                        <p class="location-instruction">Cliquez sur la carte pour définir l'emplacement</p>
                        <input type="hidden" id="activityLat">
                        <input type="hidden" id="activityLng">
                        <div id="selectedLocation"></div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">Ajouter l'activité</button>
                        <button type="button" class="btn-secondary" id="cancelAddActivity">Annuler</button>
                    </div>
                </form>
            </div>
        `;
        
        // Ajouter le modal au body
        document.body.appendChild(modal);
        
        return modal;
    }

    // Initialisation de la fonctionnalité
    function initActivityManager() {
        // Injecter les styles CSS
        injectStyles();
        
        // Créer et ajouter le bouton
        const button = document.createElement('button');
        button.id = 'addActivityButton';
        button.className = 'add-activity-button';
        button.innerHTML = '<i class="fas fa-plus"></i> Ajouter une activité';
        
        // Ajouter le bouton au conteneur de carte
        const mapContainer = document.getElementById('map-container');
        mapContainer.appendChild(button);
        
        // Créer le modal
        const modal = createAddActivityModal();
        
        // Variable pour suivre si la sélection d'emplacement est active
        let locationSelectionActive = false;
        
        // Gestionnaires d'événements
        const closeModal = modal.querySelector('.close-modal');
        const cancelButton = modal.querySelector('#cancelAddActivity');
        const form = modal.querySelector('#addActivityForm');
        
        // Fermer le modal
        function closeAddActivityModal() {
            modal.style.display = 'none';
            window.map.off('click', handleMapClick);
            locationSelectionActive = false;
            // Réinitialiser le formulaire
            form.reset();
            document.getElementById('selectedLocation').textContent = '';
            
            // Supprimer le marqueur temporaire s'il existe
            if (window.tempMarker) {
                window.map.removeLayer(window.tempMarker);
                window.tempMarker = null;
            }
        }
        
        closeModal.addEventListener('click', closeAddActivityModal);
        cancelButton.addEventListener('click', closeAddActivityModal);
        
        // Fermer le modal en cliquant en dehors
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeAddActivityModal();
            }
        });
        
        // Gestionnaire de clic sur la carte pour définir l'emplacement
        function handleMapClick(e) {
            if (locationSelectionActive) {
                const lat = e.latlng.lat;
                const lng = e.latlng.lng;
                
                // Mettre à jour les champs cachés
                document.getElementById('activityLat').value = lat;
                document.getElementById('activityLng').value = lng;
                
                // Afficher les coordonnées sélectionnées
                document.getElementById('selectedLocation').textContent = 
                    `Emplacement sélectionné: [${lng.toFixed(4)}, ${lat.toFixed(4)}]`;
                
                // Ajouter un marqueur temporaire
                if (window.tempMarker) {
                    window.map.removeLayer(window.tempMarker);
                }
                window.tempMarker = L.marker([lat, lng]).addTo(window.map);
            }
        }
        
        // Activer la sélection d'emplacement sur la carte
        document.querySelector('.location-instruction').addEventListener('click', () => {
            locationSelectionActive = true;
            window.map.on('click', handleMapClick);
            alert("Cliquez sur la carte pour sélectionner l'emplacement de l'activité");
        });
        
        // Fonction pour mettre à jour l'affichage d'un jour
        function updateDayDisplay(dayNumber) {
            const dayItem = document.querySelector(`.dayItem[data-day="${dayNumber}"]`);
            if (dayItem) {
                const activitiesContainer = dayItem.querySelector('.activities');
                const day = roadtripData.days.find(d => d.day === dayNumber);
                
                if (day && activitiesContainer) {
                    // Construire le HTML des activités
                    let activitiesHTML = '';
                    day.activities.forEach(activity => {
                        activitiesHTML += `
                            <div class="activity">
                                <div class="activityTime">${activity.time}</div>
                                <div class="activityTitle">${activity.activity}</div>
                                ${activity.tips ? `<div class="activityTips">${activity.tips}</div>` : ''}
                            </div>
                        `;
                    });
                    
                    // Mettre à jour le contenu des activités
                    activitiesContainer.innerHTML = activitiesHTML;
                }
            }
        }
        
        // Fonction pour ajouter un marqueur d'activité à la carte
        function addActivityMarker(activity, dayNumber) {
            if (activity.coordinates) {
                // Accéder aux icônes définies dans l'application
                let icon;
                
                if (window.cityIcon && window.chargingIcon && window.visitIcon) {
                    // Utiliser les icônes existantes
                    icon = window.cityIcon; // Par défaut
                    
                    // Déterminer l'icône en fonction du type d'activité
                    if (activity.activity.toLowerCase().includes('recharge') ||
                        activity.activity.toLowerCase().includes('superchargeur')) {
                        icon = window.chargingIcon;
                    } else if (activity.activity.toLowerCase().includes('visite') ||
                            activity.activity.toLowerCase().includes('musée') ||
                            activity.activity.toLowerCase().includes('promenade') ||
                            activity.activity.toLowerCase().includes('exploration')) {
                        icon = window.visitIcon;
                    }
                } else {
                    // Créer de nouvelles icônes si nécessaire
                    if (activity.activity.toLowerCase().includes('recharge') ||
                        activity.activity.toLowerCase().includes('superchargeur')) {
                        icon = L.divIcon({
                            className: 'marker-charging',
                            html: '<i class="fas fa-charging-station"></i>',
                            iconSize: [30, 30],
                            iconAnchor: [15, 15]
                        });
                    } else if (activity.activity.toLowerCase().includes('visite') ||
                            activity.activity.toLowerCase().includes('musée') ||
                            activity.activity.toLowerCase().includes('promenade') ||
                            activity.activity.toLowerCase().includes('exploration')) {
                        icon = L.divIcon({
                            className: 'marker-visit',
                            html: '<i class="fas fa-camera"></i>',
                            iconSize: [30, 30],
                            iconAnchor: [15, 15]
                        });
                    } else {
                        icon = L.divIcon({
                            className: 'marker-city',
                            html: '<i class="fas fa-city"></i>',
                            iconSize: [30, 30],
                            iconAnchor: [15, 15]
                        });
                    }
                }
                
                // Corriger les coordonnées (inversion longitude/latitude)
                let correctedCoords;
                if (typeof window.correctCoordinates === 'function') {
                    correctedCoords = window.correctCoordinates(activity.coordinates);
                } else {
                    // Fonction de secours
                    correctedCoords = [activity.coordinates[1], activity.coordinates[0]];
                }
                
                // Créer le marqueur avec les coordonnées corrigées
                const marker = L.marker(correctedCoords, { icon: icon });
                
                // Créer le contenu du popup
                const day = roadtripData.days.find(d => d.day === dayNumber);
                let popupContent = `
                    <div class="marker-popup">
                        <h3>${activity.activity}</h3>
                        <p><strong>Jour ${dayNumber}:</strong> ${day.title}</p>
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
                if (window.markerGroups[dayNumber]) {
                    marker.addTo(window.markerGroups[dayNumber]);
                } else {
                    // Si le groupe n'existe pas encore, le créer
                    window.markerGroups[dayNumber] = L.layerGroup();
                    marker.addTo(window.markerGroups[dayNumber]);
                    window.markerGroups[dayNumber].addTo(window.map);
                }
                
                // Optionnellement, mettre à jour les distances et la consommation d'énergie
                if (typeof window.updateDayDistances === 'function') {
                    setTimeout(window.updateDayDistances, 500);
                }
            }
        }
        
        // Soumission du formulaire
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const dayNumber = parseInt(document.getElementById('activityDay').value);
            const time = document.getElementById('activityTime').value;
            const title = document.getElementById('activityTitle').value;
            const tips = document.getElementById('activityTips').value;
            const link = document.getElementById('activityLink').value;
            const lat = document.getElementById('activityLat').value;
            const lng = document.getElementById('activityLng').value;
            
            if (!lat || !lng) {
                alert("Veuillez sélectionner un emplacement sur la carte");
                return;
            }
            
            // Créer l'objet activité
            const newActivity = {
                time: time,
                activity: title,
                tips: tips || "",
                link: link || "",
                coordinates: [parseFloat(lng), parseFloat(lat)]
            };
            
            // Ajouter l'activité aux données
            const dayIndex = roadtripData.days.findIndex(day => day.day === dayNumber);
            if (dayIndex !== -1) {
                roadtripData.days[dayIndex].activities.push(newActivity);
                
                // Trier les activités par heure
                roadtripData.days[dayIndex].activities.sort((a, b) => {
                    const timeA = a.time.split('-')[0];
                    const timeB = b.time.split('-')[0];
                    return timeA.localeCompare(timeB);
                });
                
                // Mettre à jour l'affichage
                updateDayDisplay(dayNumber);
                
                // Ajouter le marqueur à la carte
                addActivityMarker(newActivity, dayNumber);
                
                // Fermer le modal
                closeAddActivityModal();
                
                // Message de confirmation
                alert(`Activité "${title}" ajoutée au jour ${dayNumber}`);
                
                // Fonction pour exporter les données
                const exportButton = document.createElement('button');
                exportButton.textContent = "Exporter les données mises à jour";
                exportButton.className = "btn-primary";
                exportButton.style.position = "fixed";
                exportButton.style.top = "10px";
                exportButton.style.right = "10px";
                exportButton.style.zIndex = "1500";
                
                exportButton.addEventListener('click', () => {
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(roadtripData, null, 2));
                    const downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", "roadtrip-data-updated.js");
                    document.body.appendChild(downloadAnchorNode);
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                });
                
                if (!document.getElementById('exportDataButton')) {
                    exportButton.id = 'exportDataButton';
                    document.body.appendChild(exportButton);
                }
            }
        });
        
        // Gestionnaire d'événement pour ouvrir le modal
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }
})();
