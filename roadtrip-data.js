// Données du roadtrip
const roadtripData = {
    title: "Roadtrip en Italie",
    days: [
        {
            day: 1,
            title: "Paris - Annecy",
            date: "2025-04-10",
            activities: [
                {
                    time: "14:50",
                    activity: "Départ de Paris en Tesla Model 3",
                    tips: "Batterie pleine au départ, jeux et activités pour enfant préparés",
                    link: "https://abetterrouteplanner.com/?plan_uuid=c9d0b564-5e14-4ff7-a2db-20acfb79a8cf",
                    coordinates: [2.3522, 48.8566] // Paris
                },
                {
                    time: "16:45-17:30",
                    activity: "Recharge au Superchargeur d'Avallon",
                    tips: "Prévoir une petite collation, étirer les jambes",
                    coordinates: [3.9071, 47.4904] // Avallon
                },
                {
                    time: "19:30-20:30",
                    activity: "Diner + Recharge au Superchargeur de Bourg-en-Bresse",
                    tips: "Restau rapide juste à coté du SUC",
                    link: "https://maps.app.goo.gl/vLGs8pJfiPuTEfE56",
                    coordinates: [5.2281, 46.2044] // Bourg-en-Bresse
                },
                {
                    time: "21:50",
                    activity: "Arrivée à l'hôtel à Annecy",
                    tips: "Budget env 200€",
                    coordinates: [6.1296, 45.8992] // Annecy
                }
            ]
        },
        {
            day: 2,
            title: "Annecy - Milan",
            date: "2025-04-11",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Promenade et mini-croisière sur le lac d'Annecy",
                    tips: "Crème solaire, chapeau, veste légère au cas où",
                    link: "https://www.bateaux-annecy.com/",
                    coordinates: [6.1436, 45.8558] // Lac d'Annecy
                },
                {
                    time: "13:30-16:15",
                    activity: "Trajet Annecy-Aoste via tunnel du Mont-Blanc",
                    tips: "Prévoir 40€ de péage tunnel",
                    link: "https://abetterrouteplanner.com/?plan_uuid=109613c2-25b6-4747-bcf8-bc54e7ba9bf2",
                    coordinates: [6.8648, 45.9169] // Tunnel du Mont-Blanc
                },
                {
                    time: "16:15-17:00",
                    activity: "Recharge au Superchargeur d'Aoste",
                    tips: "Petite pause, possibilité d'acheter des spécialités italiennes (Carrefour à 10' du SUC)",
                    link: "https://maps.app.goo.gl/7e8RyVgfn8GsMfPi8",
                    coordinates: [7.3125, 45.7376] // Aoste
                },
                {
                    time: "19:20",
                    activity: "Arrivée à Milan",
                    tips: "Budget hotel >300€",
                    coordinates: [9.1900, 45.4642] // Milan
                },
                {
                    time: "20:20",
                    activity: "Dîner et balade nocturne (Duomo illuminé)",
                    tips: "Le Duomo est spectaculaire de nuit, restaurant conseillé: Ristorante Galleria",
                    link: "https://ristorantegalleria.it/en/",
                    coordinates: [9.1919, 45.4641] // Duomo Milan
                }
            ]
        },
        {
            day: 3,
            title: "Milan - Côme - Vérone",
            date: "2025-04-12",
            activities: [
                {
                    time: "08:00-10:00",
                    activity: "Visite du Château des Sforza et jardins",
                    tips: "Adapté aux enfants, grands espaces pour courir (ouvre à 7h00)",
                    link: "https://www.milanocastello.it/en/content/hours-and-admission",
                    coordinates: [9.1791, 45.4706] // Château des Sforza
                },
                {
                    time: "10:30-12:00",
                    activity: "Trajet Milan-Lac de Côme",
                    tips: "Recharger un peu au CityLife Milano avant de partir. Mini 65% pour arriver jusque Côme.",
                    link: "https://abetterrouteplanner.com/?plan_uuid=cabd10f5-ef01-4aae-9e63-82ef69a881ab",
                    coordinates: [9.2296, 45.9878] 
                },
                {
                    time: "12:00-15:30",
                    activity: "Déjeuner et visite de la Villa Carlotta",
                    tips: "Embarquer à Tremezzo pour la Villa Carlotta, prévoir chapeau et crème solaire",
                    link: "http://villacarlotta.it/fr/",
                    coordinates: [9.2296, 45.9878] // Villa Carlotta
                },
                {
                    time: "15:50-16:10",
                    activity: "Prendre le ferry avec la voiture",
                    tips: "Trajet de 20' de Cadenabia à Varenna (budget 12€)",
                    link: "https://www.navigazionelaghi.it/en/search-results/?lake=lago-como&andata_ritorno=solo_andata&from=160&to=34&data_partenza=13-04-2025&orario_partenza=14%3A00&Cerca+e+acquista=",
                    coordinates: [9.2840, 46.0112] // Ferry Cadenabbia-Varenna
                },
                {
                    time: "17:20",
                    activity: "Recharge au Superchargeur de Bergame",
                    tips: "Important pour assurer l'autonomie jusqu'à Vérone",
                    coordinates: [9.6700, 45.6983] // Bergame
                },
                {
                    time: "18:20",
                    activity: "Arrivée à Vérone",
                    tips: "Parking recommandé: Arena Parking (proche du centre). Budget nuit env 200€-250€",
                    coordinates: [10.9916, 45.4384] // Vérone
                },
                {
                    time: "19:20",
                    activity: "Dîner sur la Piazza delle Erbe",
                    tips: "Ambiance familiale, place animée mais sécurisée pour enfant",
                    coordinates: [10.9985, 45.4428] // Piazza delle Erbe
                }
            ]
        },
        {
            day: 4,
            title: "Vérone",
            date: "2025-04-13",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Arène romaine et Maison de Juliette",
                    tips: "Guide spécial enfants disponible pour l'Arène (25€), histoires de gladiateurs",
                    link: "https://www.italy-museum.com/fr/venise/maison-juliette",
                    coordinates: [10.9936, 45.4386] // Arène de Vérone
                },
                {
                    time: "13:00-17:30",
                    activity: "Parco Natura Viva",
                    tips: "Parco Natura Viva, Località Quercia, 37012 Bussolengo VR, Italie. Horaire 10h-19h",
                    link: "https://prezzi.parconaturaviva.it/en",
                    coordinates: [10.7824, 45.4825] // Parco Natura Viva
                },
                {
                    time: "19:50",
                    activity: "Dîner à Vérone",
                    tips: "Restaurant conseillé: Il Desco (menu enfant disponible)",
                    coordinates: [10.9953, 45.4419] // Restaurant Il Desco
                }
            ]
        },
        {
            day: 5,
            title: "Vérone - Modène - Bologne",
            date: "2025-04-14",
            activities: [
                {
                    time: "08:50",
                    activity: "Départ de l'hôtel",
                    tips: "Recharger au SUC de Vérona",
                    link: "https://abetterrouteplanner.com/?plan_uuid=7a4acd41-9936-4861-a4e2-86b9a176a493",
                    coordinates: [10.9916, 45.4384] // Vérone
                },
                {
                    time: "10:30-12:00",
                    activity: "Visite musée Ferrari de Modène",
                    link: "https://www.ferrari.com/fr-FR/museums/ferrari-museums-visit-tickets-packages",
                    coordinates: [10.8276, 44.6477] // Musée Ferrari Modène
                },
                {
                    time: "14:30-16:30",
                    activity: "Visite de Maranello",
                    coordinates: [10.8680, 44.5272] // Maranello
                },
                {
                    time: "17:50",
                    activity: "Arrivée à Bologne",
                    tips: "Budget environ 200€",
                    coordinates: [11.3426, 44.4938] // Bologne
                }
            ]
        },
        {
            day: 6,
            title: "Bologne - Florence",
            date: "2025-04-15",
            activities: [
                {
                    time: "09:00-11:00",
                    activity: "Visite du Quadrilatero (marché historique)",
                    tips: "Marché animé et coloré, tenir la main de l'enfant, dégustations possibles",
                    coordinates: [11.3451, 44.4936] // Quadrilatero Bologne
                },
                {
                    time: "13:00-14:30",
                    activity: "Trajet Bologne-Florence",
                    tips: "Recharger en arrivant sur Florence au max (pas de SUC jusque Sienne)",
                    coordinates: [11.2499, 43.7792] // Route Bologne-Florence
                },
                {
                    time: "15:00-18:00",
                    activity: "Premier aperçu de Florence (Ponte Vecchio)",
                    tips: "Gelato artisanal chez Vivoli, promenade le long de l'Arno",
                    coordinates: [11.2530, 43.7679] // Ponte Vecchio
                },
                {
                    time: "18:50",
                    activity: "Dîner dans restaurant familial",
                    tips: "Trattoria 4 Leoni (terrasse agréable, menu enfant)",
                    coordinates: [11.2485, 43.7668] // Trattoria 4 Leoni
                }
            ]
        },
        {
            day: 7,
            title: "Florence",
            date: "2025-04-16",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Jardins de Boboli",
                    tips: "Grand espace vert où votre enfant pourra courir, prévoir eau et chapeau",
                    coordinates: [11.2500, 43.7659] // Jardins de Boboli
                },
                {
                    time: "12:30-14:00",
                    activity: "Déjeuner au Mercato Centrale",
                    tips: "Grand choix de nourriture, ambiance animée",
                    coordinates: [11.2531, 43.7758] // Mercato Centrale
                },
                {
                    time: "14:30-17:00",
                    activity: "Museo dei Ragazzi au Palazzo Vecchio",
                    tips: "Musée interactif pour enfants, réserver la visite \"Vie à la cour des Médicis\"",
                    coordinates: [11.2558, 43.7694] // Palazzo Vecchio
                }
            ]
        },
        {
            day: 8,
            title: "Florence - Sienne",
            date: "2025-04-17",
            activities: [
                {
                    time: "09:00-11:00",
                    activity: "Visite du Musée Galilée",
                    tips: "Démonstrations scientifiques interactives adaptées aux enfants",
                    coordinates: [11.2538, 43.7668] // Musée Galilée
                },
                {
                    time: "11:00-12:15",
                    activity: "Trajet Florence-Sienne",
                    tips: "Routes de campagne toscane, paysages magnifiques",
                    coordinates: [11.1890, 43.4900] // Route Florence-Sienne
                },
                {
                    time: "12:30-16:30",
                    activity: "Piazza del Campo et visite de Sienne",
                    tips: "Place idéale pour les enfants (forme de coquillage inclinée), glaces chez Kopakabana",
                    coordinates: [11.3317, 43.3186] // Piazza del Campo
                }
            ]
        },
        {
            day: 9,
            title: "Toscane",
            date: "2025-04-18",
            activities: [
                {
                    time: "09:00-10:00",
                    activity: "Trajet Sienne-San Gimignano",
                    tips: "Routes sinueuses, paysages spectaculaires",
                    coordinates: [11.2230, 43.4300] // Route Sienne-San Gimignano
                },
                {
                    time: "10:00-15:00",
                    activity: "Visite des tours médiévales et déjeuner",
                    tips: "Tours impressionnantes pour les enfants, déjeuner chez Cum Quibus",
                    coordinates: [11.0417, 43.4677] // San Gimignano
                },
                {
                    time: "15:00-16:00",
                    activity: "Retour à Sienne",
                    tips: "Glaces chez Dondoli à San Gimignano avant de partir (champion du monde)",
                    coordinates: [11.3280, 43.3180] // Sienne
                }
            ]
        },
        {
            day: 10,
            title: "Sienne - Rome",
            date: "2025-04-19",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Trajet Sienne-Rome",
                    tips: "Prendre la direction du SUC de Grosseto et rejoindre la mer",
                    link: "https://abetterrouteplanner.com/?plan_uuid=b1008f24-d515-4f5b-b3d3-99155982543c",
                    coordinates: [12.4964, 41.9028] // Rome
                },
                {
                    time: "14:30-18:00",
                    activity: "Jardins de la Villa Borghese",
                    tips: "Location de barques sur le lac, vélos à 4 roues, grand espace vert",
                    coordinates: [12.4924, 41.9137] // Villa Borghese
                },
                {
                    time: "18:50",
                    activity: "Dîner dans le quartier de Trastevere",
                    tips: "Da Enzo al 29, réserver à l'avance, quartier animé mais familial",
                    coordinates: [12.4675, 41.8883] // Trastevere
                }
            ]
        },
        {
            day: 11,
            title: "Rome",
            date: "2025-04-20",
            activities: [
                {
                    time: "09:00-12:30",
                    activity: "Visite du Colisée et Forum Romain",
                    tips: "Guide adapté enfants OBLIGATOIRE, réserver à l'avance, éviter files d'attente",
                    coordinates: [12.4924, 41.8902] // Colisée
                },
                {
                    time: "15:00-18:00",
                    activity: "Fontaine de Trevi et quartier historique",
                    tips: "Jeter une pièce dans la fontaine (tradition), glaces chez Giolitti",
                    coordinates: [12.4833, 41.9009] // Fontaine de Trevi
                },
                {
                    time: "18:50",
                    activity: "Balade vers le Panthéon et dîner",
                    tips: "Panthéon illuminé, dîner à Armando al Pantheon",
                    coordinates: [12.4768, 41.8986] // Panthéon
                }
            ]
        },
        {
            day: 12,
            title: "Rome - Naples - Sorrento",
            date: "2025-04-21",
            activities: [
                {
                    time: "08:00-10:15",
                    activity: "Trajet Rome-Naples",
                    tips: "Autoroute A1, circulation généralement bonne le matin",
                    link: "https://abetterrouteplanner.com/?plan_uuid=da2b16b3-d4b1-4fc7-9ae2-34187a46bccd",
                    coordinates: [14.2681, 40.8518] // Naples
                },
                {
                    time: "10:30-12:30",
                    activity: "Visite du centre historique et déjeuner pizza",
                    tips: "Pizza Da Michele (la plus célèbre de Naples), quartier animé, rester vigilant",
                    coordinates: [14.2597, 40.8390] // Centre historique Naples
                },
                {
                    time: "14:30-16:30",
                    activity: "Visite des ruines de Pompéi",
                    tips: "Fascinant pour les enfants, chapeau et eau indispensables, bonnes chaussures",
                    coordinates: [14.4851, 40.7499] // Pompéi
                },
                {
                    time: "17:50",
                    activity: "Installation à l'hôtel avec vue sur mer",
                    tips: "Hôtel recommandé: Grand Hotel Riviera",
                    coordinates: [14.3650, 40.6263] // Sorrento
                }
            ]
        },
        {
            day: 13,
            title: "Côte amalfitaine",
            date: "2025-04-22",
            activities: [
                {
                    time: "09:00-17:00",
                    activity: "Excursion en bateau côte amalfitaine",
                    tips: "Réserver à l'avance, départ du port de Sorrento, crème solaire, chapeau",
                    coordinates: [14.3539, 40.6304] // Port de Sorrento
                },
                {
                    time: "12:30-14:30",
                    activity: "Déjeuner à Positano",
                    tips: "Ristorante La Cambusa, vue imprenable",
                    coordinates: [14.4851, 40.6263] // Positano
                }
            ]
        },
        {
            day: 14,
            title: "Sorrento - Pise",
            date: "2025-04-23",
            activities: [
                {
                    time: "08:00-13:30",
                    activity: "Trajet Sorrento-Rome",
                    tips: "Départ tôt, routes côtières puis A1, prévoir activités pour l'enfant",
                    coordinates: [12.4964, 41.9028] // Rome
                },
                {
                    time: "14:30-19:00",
                    activity: "Trajet Rome-Pise",
                    tips: "Long trajet, pauses régulières recommandées pour l'enfant",
                    coordinates: [10.4017, 43.7228] // Pise
                },
                {
                    time: "19:20",
                    activity: "Arrivée à Pise et dîner",
                    tips: "Osteria di Culegna, cuisine toscane",
                    coordinates: [10.4015, 43.7186] // Centre de Pise
                }
            ]
        },
        {
            day: 15,
            title: "Pise - La Spezia",
            date: "2025-04-24",
            activities: [
                {
                    time: "09:00-12:30",
                    activity: "Tour penchée et Place des Miracles",
                    tips: "Réserver les billets pour la tour à l'avance (si vous montez)",
                    coordinates: [10.3963, 43.7230] // Tour de Pise
                },
                {
                    time: "14:30-15:30",
                    activity: "Trajet Pise-La Spezia",
                    tips: "Route côtière, vues sur la mer",
                    coordinates: [9.8259, 44.1024] // La Spezia
                },
                {
                    time: "16:00-18:30",
                    activity: "Exploration de Riomaggiore",
                    tips: "Premier village des Cinque Terre, rue principale colorée, petit port pittoresque",
                    coordinates: [9.7379, 44.0999] // Riomaggiore
                }
            ]
        },
        {
            day: 16,
            title: "La Spezia - Suisse",
            date: "2025-04-25",
            activities: [
                {
                    time: "07:00-08:00",
                    activity: "Petit-déjeuner et départ matinal",
                    tips: "Départ tôt pour avoir le temps de visiter les sources du Rhône",
                    coordinates: [9.8259, 44.1024] // La Spezia
                },
                {
                    time: "10:00-10:30",
                    activity: "Recharge au Superchargeur de Milan",
                    tips: "Pause essentielle pour recharger, stretching pour tous",
                    coordinates: [9.1900, 45.4642] // Milan
                },
                {
                    time: "12:30-14:00",
                    activity: "Déjeuner à Andermatt",
                    tips: "Restaurant Toutoune, cuisine suisse",
                    coordinates: [8.5913829, 46.6398661] // Andermatt
                },
                {
                    time: "14:00-16:00",
                    activity: "Visite des sources du Rhône",
                    tips: "Prévoir vêtements chauds même en avril, chaussures adaptées",
                    coordinates: [8.3757938, 46.5756242] // Sources du Rhône
                },
                {
                    time: "16:20",
                    activity: "Retour à Andermatt et installation",
                    tips: "Hôtel Trois Rois Andermatt (bornes Tesla disponibles)",
                    coordinates: [8.5913829, 46.6398661] // Andermatt
                }
            ]
        },
        {
            day: 17,
            title: "Suisse - Paris",
            date: "2025-04-26",
            activities: [
                {
                    time: "05:50",
                    activity: "Petit-déjeuner très matinal et départ",
                    tips: "Départ aux aurores pour assurer le retour à Paris",
                    coordinates: [8.5913829, 46.6398661] // Andermatt
                },
                {
                    time: "10:00-10:45",
                    activity: "Recharge au Superchargeur de Bâle",
                    tips: "Pause brève, café et étirements",
                    coordinates: [7.5886, 47.5596] // Bâle
                },
                {
                    time: "14:00-14:45",
                    activity: "Déjeuner rapide et recharge à Langres",
                    tips: "Aire d'autoroute avec Superchargeur, repas léger",
                    coordinates: [5.3347, 47.8624] // Langres
                },
                {
                    time: "17:50",
                    activity: "Arrivée à Paris",
                    tips: "Planifier une soirée tranquille après ce long voyage",
                    coordinates: [2.3522, 48.8566] // Paris
                }
            ]
        }
    ]
};

// Coordonnées des villes principales pour le tracé des routes
const mainLocations = [
    { name: "Paris", coords: [2.3522, 48.8566] },
    { name: "Annecy", coords: [6.1296, 45.8992] },
    { name: "Milan", coords: [9.1900, 45.4642] },
    { name: "Côme", coords: [9.4012, 45.8080] },
    { name: "Vérone", coords: [10.9916, 45.4384] },
    { name: "Modène", coords: [10.9254, 44.6471] },
    { name: "Bologne", coords: [11.3426, 44.4938] },
    { name: "Florence", coords: [11.2558, 43.7696] },
    { name: "Sienne", coords: [11.3301, 43.3184] },
    { name: "Rome", coords: [12.4964, 41.9028] },
    { name: "Naples", coords: [14.2681, 40.8518] },
    { name: "Sorrento", coords: [14.3757, 40.6263] },
    { name: "Pise", coords: [10.4017, 43.7228] },
    { name: "La Spezia", coords: [9.8259, 44.1024] },
    { name: "Andermatt", coords: [8.5913829, 46.6398661] },
    { name: "Paris", coords: [2.3522, 48.8566] }
];