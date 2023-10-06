import { SitePortfolio, SiteWordPress, SolarTracker2, Domotique, Console, BoiteHistoire3, GPSTracker1, backend, mobile, creator, diamond, facebook, instagram, linkedin, twitter, send, shield, star, application, progiciel, web,  tesla, meta, shopify, starbucks,  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "realizations",
    title: "Réalisations",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: send,
    title: "Management",
    content:
      "Gestion d'une équipe technique de 10 personnes",
  },
  {
    id: "feature-2",
    icon: send,
    title: "Interface",
    content:
      "Gestion des Clients & Fournisseurs",
  },
  {
    id: "feature-3",
    icon: shield,
    title: "Qualité",
    content:
      "Développement des processus et méthodes de développement (Qualité)",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Electronique",
    content:
      "Conception et développement d'équipements électroniques",
  },
  {
  id: "feature-4",
  icon: star,
  title: "Développement Web",
  content:
    "Développement de site Web via REACT [JS, HTML, CSS]",
},
];

export const keyword = [
  {
    id: "keyword-1",
    title: "REACT/GITHUB",
    value: "Dev WEB",
  },
  {
    id: "keyword-2",
    title: "Analogique Numérique",
    value: "Electronique",
  },
  {
    id: "keyword-3",
    title: "Processus",
    value: "Qualité",
  },
];

export const footerLinks = [
  {
    title: "Ressources",
    links: [
      {
        name: "Lien",
        link: "Ressources",
      },
    ],
  },
  {
    title: "Mentions légales",
    links: [
      {
        name: "Lien",
        link: "LegalNotice",
      },
    ],
  },
  {
    title: "Politique de confidentialité",
    links: [
      {
        name: "Lien",
        link: "Policy",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const experiences = [
  {
    title: "Bac Scientifique",
    company_name: "Lycée Pablo Picasso, Perpignan",
    icon: starbucks,
    iconBg: "#F3F2F3",
    date: "2006",
    points: [],
  },
  {
    title: "BTS Systèmes Electroniques",
    company_name: "Lycée Pablo Picasso, Perpignan",
    icon: starbucks,
    iconBg: "#F3F2F3",
    date: "2009",
    points: [],
  },
  {
    title: "Ingénieur Systèmes Electroniques",
    company_name: "CESI, Labège",
    icon: starbucks,
    iconBg: "#F3F2F3",
    date: "2012",
    points: [
      "Apprentissage chez ACTIA AUTOMOTIVE",
      "Chaine de traction véhicule électrique Blue Car : Conception, Développement et Test équipement",
    ],
  },
  {
    title: "Ingénieur Electronicien",
    company_name: "Elsys Design, Toulouse",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2012 - 2015",
    points: [
      "Frein Pneumatique métro ESP : Test de carte électronique",
      "Distribution électrique avion militaire KC-390 : Rédaction de spécifications",
      "Supervision de poste Electrique Arkens : Conception, Développement et Test équipement",
    ],
  },
  {
    title: "Ingénieur Electronicien & Responsable Technique",
    company_name: "EREMS, Toulouse",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2016 - 2022",
    points: [
      "Observation de la création des trous noirs SVOM : Conception, Développement et Test équipement satellite",
      "Rapatriement d’échantillons martiens sur Terre ERO : Conception, Développement et Test équipement satellite",
    ],
  },
  {
    title: "Développeur WEB",
    company_name: "Reconversion en cours",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Aujourd'hui",
    points: [
      "Développement site Web Wordpress",
      "Développement site Web REACT",
    ],
  },
];

export const serviceCard = [
  {
    title: "Ingénieur Electronicien",
    icon: diamond,
  },
  {
    title: "Responsable Technique",
    icon: mobile,
  },
  {
    title: "Ingénieur Méthodes & Qualité",
    icon: backend,
  },
  {
    title: "Développeur Web",
    icon: creator,
  },
];

export const projects_elec = [
  {
    name: "Boite à histoire",
    description: "Boite à histoire pour enfant créé intégralement à partir de zéro. Une carte arduino Uno est utilisé et est alimenté par une batterie.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Electronique",
        color: "pink-text-gradient",
      },
    ],
    image: BoiteHistoire3,
    source_code_link: "https://github.com/",
  },
  {
    name: "GPS Tracker",
    description: "Ce GPS tracker permet de générer les coordonnées de l'utilisateur lors d'un appui bouton et de la transmettre par SMS.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Electronique",
        color: "pink-text-gradient",
      },
    ],
    image: GPSTracker1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Console de jeu Retro",
    description: "Console de jeu réalisé sous distribution batocera. Un grand nombre d'émulateurs sont ainsi utilisables  pour le plus grand bonheur des petits et des grands.",
    tags: [
      {
        name: "Raspberry pi",
        color: "blue-text-gradient",
      },
      {
        name: "Batocera",
        color: "green-text-gradient",
      },
      {
        name: "Electronique",
        color: "pink-text-gradient",
      },
    ],
    image: Console,
    source_code_link: "https://github.com/",
  },
  {
    name: "Domotique",
    description: "Cette centrale domotique à base de raspberry pi permet de monitorer les capteurs du domicile (température, humidité, consommation électrique ...) et de commander les actionneurs existants (Volets roulants, chauffages, portail, ...) le but étant de faciliter la gestion du quotidien au sein du domicile.",
    tags: [
      {
        name: "Raspberry pi",
        color: "blue-text-gradient",
      },
      {
        name: "jeedom",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "HTML_CSS_JS",
        color: "green-text-gradient",
      },
    ],
    image: Domotique,
    source_code_link: "https://github.com/",
  },
  {
    name: "Solar Tracker",
    description: "Grâce à des détecteurs de luminosité, le panneau solaire se positionne automatiquement de manière à obtenir le maximum de luminosité. L'énergie ainsi reçue permet d'alimenter le système et de recharger une batterie Li-Ion.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Electronique",
        color: "pink-text-gradient",
      },
    ],
    image: SolarTracker2,
    source_code_link: "https://github.com/",
  },
]

export const projects_web = [
  {
    name: "Site Web Sage femme",
    description: "Site de Sage femme développé via le CMS Wordpress. Il présente l'activité du cabinet.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "CMS++",
        color: "green-text-gradient",
      },
      {
        name: "HTML_CSS",
        color: "pink-text-gradient",
      },
    ],
    image: SiteWordPress,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Développeur Web",
    description: "Site portfolio développé sous librairie JS REACT et déployé via Vercel. C'est un site personnel me permettant de montrer mes compétences et expérences.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "Vitejs",
        color: "green-text-gradient",
      },
      {
        name: "HTML_CSS",
        color: "pink-text-gradient",
      },
    ],
    image: SitePortfolio,
    source_code_link: "https://github.com/",
  },
]
