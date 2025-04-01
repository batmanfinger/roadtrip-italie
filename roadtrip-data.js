// Données du roadtrip
const roadtripData = {
    title: "Roadtrip en Italie",
    days: [
        {
            day: 1,
            title: "Paris - Annecy",
            date: "2025-04-11",
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
            date: "2025-04-12",
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
            date: "2025-04-13",
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
                    coordinates: [9.4012, 45.8080] // Côme
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
            title: "Vérone - Modène",
            date: "2025-04-14",
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
                    time: "18:00-19:30",
                    activity: "Trajet vers Modène",
                    tips: "Prévoir une recharge avant de partir",
                    coordinates: [10.9254, 44.6471] // Modène
                },
                {
                    time: "20:00",
                    activity: "Dîner à Modène et installation à l'hôtel",
                    tips: "Cuisine locale traditionnelle",
                    coordinates: [10.9318, 44.6471] // 83 Via Saragozza, Modène
                }
            ]
        },
        {
            day: 5,
            title: "Modène - Bologne",
            date: "2025-04-15",
            activities: [
                {
                    time: "09:00",
                    activity: "Départ de l'hôtel",
                    tips: "Vérifier l'autonomie de la batterie",
                    coordinates: [10.9318, 44.6471] // Hôtel à Modène
                },
                {
                    time: "09:00-10:30",
                    activity: "Balade à Modène",
                    tips: "Visite du centre historique et de la cathédrale",
                    coordinates: [10.9254, 44.6471] // Centre de Modène
                },
                {
                    time: "10:30-12:00",
                    activity: "Visite musée Ferrari de Modène",
                    link: "https://www.ferrari.com/fr-FR/museums/ferrari-museums-visit-tickets-packages",
                    coordinates: [10.8276, 44.6477] // Musée Ferrari Modène
                },
                {
                    time: "12:00-14:00",
                    activity: "Déjeuner à Modène",
                    tips: "Essayer les spécialités locales comme le vinaigre balsamique",
                    coordinates: [10.9254, 44.6471] // Centre de Modène
                },
                {
                    time: "14:00-14:30",
                    activity: "Trajet Modène - Maranello",
                    tips: "Court trajet de 20 minutes",
                    coordinates: [10.8680, 44.5272] // Maranello
                },
                {
                    time: "14:30-16:30",
                    activity: "Visite de Maranello, Musée Ferrari",
                    tips: "Second musée Ferrari, plus axé sur les voitures de course",
                    coordinates: [10.8680, 44.5272] // Maranello
                },
                {
                    time: "16:30-18:00",
                    activity: "Trajet Maranello - Bologna + Recharge SUC Bologna",
                    tips: "Prévoir une recharge complète à Bologne",
                    coordinates: [11.3426, 44.4938] // Bologne
                },
                {
                    time: "19:00",
                    activity: "Dîner gastronomique",
                    tips: "Bologne est connue comme 'la grasse' pour sa gastronomie exceptionnelle",
                    coordinates: [11.3426, 44.4938] // Bologne
                }
            ]
        },
        {
            day: 6,
            title: "Bologne - Florence",
            date: "2025-04-16",
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
            date: "2025-04-17",
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
                },
                {
                    time: "17:30-19:00",
                    activity: "Balade dans le quartier de Santa Croce",
                    tips: "Quartier authentique, moins touristique",
                    coordinates: [11.2621, 43.7685] // Santa Croce
                },
                {
                    time: "19:50",
                    activity: "Dîner",
                    tips: "Osteria del Porcellino",
                    coordinates: [11.2538, 43.7691] // Restaurant
                }
            ]
        },
        {
            day: 8,
            title: "Florence - Sienne",
            date: "2025-04-18",
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
                },
                {
                    time: "17:00",
                    activity: "Installation à l'hôtel",
                    tips: "Se reposer avant la journée du lendemain",
                    coordinates: [11.3301, 43.3184] // Sienne
                },
                {
                    time: "19:30",
                    activity: "Dîner à Sienne",
                    tips: "Cuisine toscane traditionnelle",
                    coordinates: [11.3317, 43.3186] // Restaurant à Sienne
                }
            ]
        },
        {
            day: 9,
            title: "Toscane",
            date: "2025-04-19",
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
                },
                {
                    time: "17:00-19:00",
                    activity: "Balade dans le centre historique de Sienne",
                    tips: "Duomo de Sienne, sol en marbre à motifs",
                    coordinates: [11.3287, 43.3178] // Duomo de Sienne
                },
                {
                    time: "19:50",
                    activity: "Dîner et recharge Tesla",
                    tips: "Dernière soirée en Toscane",
                    coordinates: [11.3301, 43.3184] // Sienne
                }
            ]
        },
        {
            day: 10,
            title: "Sienne - Naples - Sorrento",
            date: "2025-04-20",
            activities: [
                {
                    time: "09:00-13:00",
                    activity: "Trajet Sienne-Ceprano",
                    tips: "Long trajet, prévoir distractions pour les enfants",
                    coordinates: [13.9136, 41.5569] // Ceprano
                },
                {
                    time: "13:00-14:00",
                    activity: "Déjeuner et recharge à Ceprano",
                    tips: "Pause nécessaire avant de continuer vers le sud",
                    coordinates: [13.9136, 41.5569] // Ceprano
                },
                {
                    time: "14:00-16:00",
                    activity: "Trajet Ceprano-Sorrento",
                    tips: "Route côtière avec vues sur la mer",
                    coordinates: [14.3757, 40.6263] // Sorrento
                },
                {
                    time: "16:30-19:00",
                    activity: "Visite de Sorrento",
                    tips: "Promenade dans le centre historique, vue sur la baie de Naples",
                    coordinates: [14.3757, 40.6263] // Sorrento
                },
                {
                    time: "21:00",
                    activity: "Installation à l'hôtel",
                    tips: "Corso Italia 186, 80067 Sorrente, Italie",
                    coordinates: [14.3746, 40.6255] // Hôtel à Sorrento
                }
            ]
        },
        {
            day: 11,
            title: "Côte amalfitaine",
            date: "2025-04-21",
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
                },
                {
                    time: "17:30",
                    activity: "Retour à Sorrento",
                    tips: "Recharge Tesla à l'hôtel si possible",
                    coordinates: [14.3757, 40.6263] // Sorrento
                },
                {
                    time: "19:50",
                    activity: "Dîner à Sorrento",
                    tips: "Cuisine locale et fruits de mer frais",
                    coordinates: [14.3757, 40.6263] // Sorrento
                }
            ]
        },
        {
            day: 12,
            title: "Sorrento - Naples - Rome",
            date: "2025-04-22",
            activities: [
                {
                    time: "09:00-10:00",
                    activity: "Trajet Sorrente - Naples",
                    tips: "Route côtière à travers la péninsule sorrentine",
                    coordinates: [14.2681, 40.8518] // Naples
                },
                {
                    time: "10:00-14:00",
                    activity: "Visite du centre historique et déjeuner pizza",
                    tips: "Pizza Da Michele (la plus célèbre de Naples), quartier animé, rester vigilant",
                    coordinates: [14.2597, 40.8390] // Centre historique Naples
                },
                {
                    time: "14:00-16:30",
                    activity: "Trajet Naples - Rome",
                    tips: "Autoroute directe, prévoir une recharge si nécessaire",
                    coordinates: [12.4964, 41.9028] // Rome
                },
                {
                    time: "16:30-19:00",
                    activity: "Visite Jardins Borghese",
                    tips: "Grand parc idéal pour se détendre après le voyage",
                    coordinates: [12.4924, 41.9137] // Jardins Borghese
                },
                {
                    time: "20:00",
                    activity: "Installation à l'hôtel et dîner",
                    tips: "Via Margutta, 54, Place d'Espagne, 00187 Rome, Italie",
                    coordinates: [12.4791, 41.9083] // Hôtel à Rome
                }
            ]
        },
        {
            day: 13,
            title: "Rome",
            date: "2025-04-23",
            activities: [
                {
                    time: "09:00-12:30",
                    activity: "Visite du Colisée et Forum Romain",
                    tips: "Guide adapté enfants OBLIGATOIRE, réserver à l'avance, éviter files d'attente",
                    coordinates: [12.4924, 41.8902] // Colisée
                },
                {
                    time: "13:00-14:30",
                    activity: "Déjeuner près de la Piazza Navona",
                    tips: "Ristorante Clemente alla Maddalena, terrasse ombragée",
                    coordinates: [12.4735, 41.8992] // Piazza Navona
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
                },
                {
                    time: "20:50",
                    activity: "Recharge Tesla",
                    tips: "Préparer le voyage du lendemain",
                    coordinates: [12.4964, 41.9028] // Rome
                }
            ]
        },
        {
            day: 14,
            title: "Rome - Pise",
            date: "2025-04-24",
            activities: [
                {
                    time: "08:00-13:30",
                    activity: "Trajet Rome-Pise",
                    tips: "Long trajet, prévoir des pauses",
                    coordinates: [10.4017, 43.7228] // Pise
                },
                {
                    time: "13:30-14:30",
                    activity: "Déjeuner à Pise",
                    tips: "Restaurant près de la tour",
                    coordinates: [10.3963, 43.7230] // Près de la Tour de Pise
                },
                {
                    time: "15:00-18:00",
                    activity: "Visite de la Tour penchée et Place des Miracles",
                    tips: "Photos amusantes avec la tour, visite du Duomo",
                    coordinates: [10.3963, 43.7230] // Tour de Pise
                },
                {
                    time: "19:30",
                    activity: "Dîner et nuit à Pise",
                    tips: "Cuisine toscane traditionnelle",
                    coordinates: [10.4017, 43.7228] // Pise
                }
            ]
        },
        {
            day: 15,
            title: "Pise - La Spezia - Gênes",
            date: "2025-04-25",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Trajet Pise-La Spezia",
                    tips: "Route côtière, vues sur la mer, passer par Viareggio, longer la côte, s'arrêter sur une plage",
                    coordinates: [10.3063, 43.8833] // Viareggio
                },
                {
                    time: "13:00-14:00",
                    activity: "Déjeuner à La Spezia",
                    tips: "Spécialités de fruits de mer",
                    coordinates: [9.8259, 44.1024] // La Spezia
                },
                {
                    time: "14:30-18:30",
                    activity: "Trajet le long de la côte",
                    tips: "Via Riomaggiore, Levanto, Deiva Marina, la SP370, Trigoso, Lavagna, Rapallo, Bogliasco",
                    coordinates: [9.7379, 44.0999] // Riomaggiore
                },
                {
                    time: "16:00-16:30",
                    activity: "Arrêt à Rapallo",
                    tips: "Belle promenade en bord de mer",
                    coordinates: [9.2310, 44.3522] // Rapallo
                },
                {
                    time: "19:00",
                    activity: "Dîner et nuit à Gênes",
                    tips: "Hôtel à réserver dans le centre historique",
                    coordinates: [8.9463, 44.4056] // Gênes
                }
            ]
        },
        {
            day: 16,
            title: "Gênes - Château de Pizay",
            date: "2025-04-26",
            activities: [
                {
                    time: "09:00-12:00",
                    activity: "Trajet Gênes - Turin",
                    tips: "Première étape de la journée",
                    coordinates: [7.6868, 45.0703] // Turin
                },
                {
                    time: "12:00-13:30",
                    activity: "Déjeuner et recharge à Turin",
                    tips: "Recharge nécessaire avant la traversée des Alpes",
                    coordinates: [7.6868, 45.0703] // Turin
                },
                {
                    time: "13:30-17:00",
                    activity: "Trajet Turin - Château de Pizay",
                    tips: "Passage par le tunnel du Fréjus et Chambéry",
                    coordinates: [5.9175, 45.5647] // Chambéry
                },
                {
                    time: "18:00",
                    activity: "Arrivée au Château de Pizay",
                    tips: "Installation et détente après la journée de route",
                    coordinates: [4.6500, 46.1500] // Château de Pizay
                },
                {
                    time: "20:00",
                    activity: "Dîner au Château",
                    tips: "Dégustation de vins locaux",
                    coordinates: [4.6500, 46.1500] // Château de Pizay
                }
            ]
        },
        {
            day: 17,
            title: "Château de Pizay - Marsinval",
            date: "2025-04-27",
            activities: [
                {
                    time: "09:00-10:30",
                    activity: "Départ du Château de Pizay",
                    tips: "Batterie pleine pour le retour",
                    coordinates: [4.6500, 46.1500] // Château de Pizay
                },
                {
                    time: "10:30-12:00",
                    activity: "Trajet vers Lyon",
                    tips: "Première étape de la journée",
                    coordinates: [4.8357, 45.7640] // Lyon
                    },
                {
                    time: "12:00-13:30",
                    activity: "Déjeuner et recharge à Lyon",
                    tips: "Pause avant la longue route vers Paris",
                    coordinates: [4.8357, 45.7640] // Lyon
                },
                {
                    time: "13:30-15:30",
                    activity: "Trajet Lyon - Dijon",
                    tips: "Trajet sur autoroute",
                    coordinates: [5.0415, 47.3220] // Dijon
                },
                {
                    time: "15:30-16:00",
                    activity: "Recharge rapide à Dijon",
                    tips: "Dernière recharge importante avant Paris",
                    coordinates: [5.0415, 47.3220] // Dijon
                },
                {
                    time: "16:00-18:00",
                    activity: "Trajet final vers Marsinval",
                    tips: "Dernière étape, arrivée prévue avant 18h",
                    coordinates: [1.9917, 48.9214] // Marsinval
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
    { name: "Naples", coords: [14.2681, 40.8518] },
    { name: "Sorrento", coords: [14.3757, 40.6263] },
    { name: "Rome", coords: [12.4964, 41.9028] },
    { name: "Pise", coords: [10.4017, 43.7228] },
    { name: "La Spezia", coords: [9.8259, 44.1024] },
    { name: "Gênes", coords: [8.9463, 44.4056] },
    { name: "Turin", coords: [7.6868, 45.0703] },
    { name: "Chambéry", coords: [5.9175, 45.5647] },
    { name: "Château de Pizay", coords: [4.6500, 46.1500] },
    { name: "Lyon", coords: [4.8357, 45.7640] },
    { name: "Dijon", coords: [5.0415, 47.3220] },
    { name: "Marsinval", coords: [1.9917, 48.9214] }
];
