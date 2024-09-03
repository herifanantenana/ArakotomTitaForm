export const step1Data = {
	id: 1,
	title: "Visite du site par le représentant solaire",
	subStep: [
		{
			id: 1,
			type: "choix",
			title: "Type d'installation",
			options: ["kit anti-délestage", "kit autonome", "kit hybride"],
			selected: "",
		},
		{
			id: 2,
			type: "champ",
			title: "Localisation du site",
			subTitle: "Entrer les coordonnées",
			value: "",
		},
		{
			id: 3,
			type: "choix",
			title: "Accessibilité",
			options: [
				"accès camion",
				"accès voiture légère",
				"accès moto",
				"accès pied",
			],
			selected: "",
		},
		{
			id: 4,
			type: "choix",
			title: "Emplacement des panneaux",
			options: [
				"toiture bêton",
				"toiture tôle",
				"sur terrain",
				"sur poteau",
				"hangar",
			],
			selected: "",
		},
		{
			id: 5,
			type: "table",
			title: "Etude de câblages",
			headers: ["types de câble", "Longueur", "Observation"],
			tableValues: [
				{ type: "", length: "", observation: "" },
				{ type: "", length: "", observation: "" },
				{ type: "", length: "", observation: "" },
			],
		},
		{
			id: 6,
			type: "choix",
			title: "Tension d’utilisation ",
			options: ["monophasé 220/230V", "triphasé 380/400v"],
			selected: "",
		},
		{
			id: 7,
			type: "cocher",
			title: "Système en place",
			options: ["JIRAMA ", "SOLAIRE ", "GROUPE ELECTRGENE"],
			selected: [],
		},
		{
			id: 8,
			type: "observation",
			value: "",
		},
	],
};

export const step2Data = {
	id: 2,
	title: "Etude de faisabilité technique (bureau d'étude)",
	subStep: [
		{
			id: 1,
			type: "table",
			title: "Type de panneaux",
			headers: ["Type et puissance", "Quantité"],
			tableValues: [
				{ type: "", quantity: "" },
				{ type: "", quantity: "" },
			],
		},
		{
			id: 2,
			type: "table",
			title: "Convertisseurs",
			headers: ["Type et puissance", "Quantité"],
			tableValues: [
				{ type: "", quantity: "" },
				{ type: "", quantity: "" },
			],
		},
		{
			id: 3,
			type: "table",
			title: "Batteries",
			headers: ["Type et puissance", "Quantité"],
			tableValues: [
				{ type: "", quantity: "" },
				{ type: "", quantity: "" },
			],
		},
		{
			id: 4,
			type: "champ",
			title: "Inclinaison de l'emplacement des panneaux",
			value: "",
		},
		{
			id: 5,
			type: "champ",
			title: "Présence d'ombrage",
			value: "",
		},
		{
			id: 6,
			type: "observation",
			value: "",
		},
	],
};

export const step3Data = {
	id: 3,
	title: "Etude financière",
	subStep: [
		{
			id: 1,
			type: "cocher",
			title: "Système en place",
			options: ["Panneaux", "Batteries", "Convertisseurs"],
			selected: [],
		},
		{
			id: 2,
			type: "observation",
			value: "",
		},
	],
};

export const step4Data = {
	id: 4,
	title: "Phase de discussion et d’acceptation",
	subStep: [
		{
			id: 1,
			type: "cocher",
			title: "",
			options: ["Proposition 1", "Proposition 2", "Proposition 3"],
			selected: [],
		},
		{
			id: 2,
			type: "observation",
			value: "",
		},
	],
};

export const step5Data = {
	id: 5,
	title: "Ajustement des calculs",
	subStep: [
		{
			id: 1,
			type: "cocher",
			title: "",
			options: [
				"Prise en compte de la concurrence ",
				"Optimisation suivant budget",
				"Contrat",
			],
			selected: [],
		},
		{
			id: 2,
			type: "observation",
			value: "",
		},
	],
};

export const step6Data = {
	id: 6,
	title: "Intégration du projet dans le planning ",
	subStep: [
		{
			id: 1,
			type: "observation",
			value: "",
		},
	],
};

export const step7Data = {
	id: 7,
	title: "Achat des matériels nécessaires",
	subStep: [
		{
			id: 1,
			type: "cocher",
			title: "",
			options: [
				"Recherche de fournisseurs ",
				"Etablissement des bons de commande ",
			],
			selected: [],
		},
		{
			id: 2,
			type: "champ",
			title: "Possibilité de grouper les achats avec d’autre proje",
			value: "",
		},
		{
			id: 3,
			type: "observation",
			value: "",
		},
	],
};

export const step8Data = {
	id: 8,
	title: "Livraison des matériels",
	subStep: [
		{
			id: 1,
			type: "cocher",
			title: "Voie",
			options: ["terrestre", "avion", "maritime"],
			selected: [],
		},
		{
			id: 2,
			type: "cocher",
			title: "Véhicules ",
			options: ["Madecasse", "autre"],
			selected: [],
		},
		{
			id: 3,
			type: "observation",
			value: "",
		},
	],
};

export const step9Data = {
	id: 9,
	title:
		"Mobilisation, gestion des équipes et début de la réalisation sur le chantier",
	subStep: [
		{
			id: 1,
			type: "observation",
			value: "",
		},
	],
};

export const step10Data = {
	id: 10,
	title: "Rapport journalière",
	subStep: [
		{
			id: 1,
			type: "table",
			title: "",
			headers: [
				"Lundi",
				"Mardi",
				"Mercredi",
				"Jeudi",
				"Vendredi",
				"Samedi",
				"Dimanche",
			],
			tableValues: [
				{
					lundi: "",
					mardi: "",
					mercredi: "",
					jeudi: "",
					vendredi: "",
					samedi: "",
					dimanche: "",
				},
				{
					lundi: "",
					mardi: "",
					mercredi: "",
					jeudi: "",
					vendredi: "",
					samedi: "",
					dimanche: "",
				},
			],
		},
	],
};

export const step11Data = {
	id: 11,
	title: "Réception",
	subStep: [
		{
			id: 5,
			type: "champ",
			title: "",
			value: "",
		},
	],
};
