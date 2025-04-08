const products = [
  {
    id: 1,
    name: "Clé Dynamométrique 1/2''",
    art: "ART-001",
    image: "https://picsum.photos/seed/1/300",
    desc: "Clé en acier allié pour serrages contrôlés.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 2,
    name: "Tournevis Inox Pro",
    art: "ART-002",
    image: "https://picsum.photos/seed/2/300",
    desc: "Tournevis inoxydable à haute durabilité.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 3,
    name: "Ciseau à bois HSS",
    art: "ART-003",
    image: "https://picsum.photos/seed/3/300",
    desc: "Ciseau tranchant en acier rapide pour le bois.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 4,
    name: "Douille 10mm",
    art: "ART-004",
    image: "https://picsum.photos/seed/4/300",
    desc: "Douille en acier allié pour cliquets standard.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 5,
    name: "Pinces coupantes inox",
    art: "ART-005",
    image: "https://picsum.photos/seed/5/300",
    desc: "Pinces inoxydables pour coupe nette.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 6,
    name: "Burin acier rapide",
    art: "ART-006",
    image: "https://picsum.photos/seed/6/300",
    desc: "Burin robuste pour maçonnerie.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 7,
    name: "Clé à pipe 17mm",
    art: "ART-007",
    image: "https://picsum.photos/seed/7/300",
    desc: "Clé à pipe en acier allié, usage intensif.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 8,
    name: "Tournevis plat inox",
    art: "ART-008",
    image: "https://picsum.photos/seed/8/300",
    desc: "Tournevis plat en inox, poignée ergonomique.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 9,
    name: "Lime acier HSS",
    art: "ART-009",
    image: "https://picsum.photos/seed/9/300",
    desc: "Lime en acier rapide pour finitions précises.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 10,
    name: "Cliquet 1/2''",
    art: "ART-010",
    image: "https://picsum.photos/seed/10/300",
    desc: "Cliquet solide en alliage d'acier.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 11,
    name: "Pince multiprise inox",
    art: "ART-011",
    image: "https://picsum.photos/seed/11/300",
    desc: "Pince polyvalente inox, antidérapante.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 12,
    name: "Foret métal HSS 8mm",
    art: "ART-012",
    image: "https://picsum.photos/seed/12/300",
    desc: "Foret haute performance pour métal dur.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 13,
    name: "Clé Allen 6mm",
    art: "ART-013",
    image: "https://picsum.photos/seed/13/300",
    desc: "Clé hexagonale en acier allié renforcé.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 14,
    name: "Cutter Inox Pro",
    art: "ART-014",
    image: "https://picsum.photos/seed/14/300",
    desc: "Cutter inoxydable à lame rétractable.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 15,
    name: "Scie à métaux HSS",
    art: "ART-015",
    image: "https://picsum.photos/seed/15/300",
    desc: "Scie précise avec lame en acier rapide.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 16,
    name: "Jeu de douilles 1/4''",
    art: "ART-016",
    image: "https://picsum.photos/seed/16/300",
    desc: "Kit de douilles en acier allié.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 17,
    name: "Marteau inox antichoc",
    art: "ART-017",
    image: "https://picsum.photos/seed/17/300",
    desc: "Marteau à tête inox avec manche anti-vibration.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 18,
    name: "Fraise conique HSS",
    art: "ART-018",
    image: "https://picsum.photos/seed/18/300",
    desc: "Fraise pour perçage conique de précision.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 19,
    name: "Clé mixte 13mm",
    art: "ART-019",
    image: "https://picsum.photos/seed/19/300",
    desc: "Clé mixte forgée en acier allié.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 20,
    name: "Ciseaux inox courbes",
    art: "ART-020",
    image: "https://picsum.photos/seed/20/300",
    desc: "Ciseaux inoxydables à lames incurvées.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 21,
    name: "Grattoir HSS 25mm",
    art: "ART-021",
    image: "https://picsum.photos/seed/21/300",
    desc: "Grattoir professionnel pour métal et bois.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 22,
    name: "Embout Torx T20",
    art: "ART-022",
    image: "https://picsum.photos/seed/22/300",
    desc: "Embout en alliage pour vis Torx.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 23,
    name: "Pince à sertir inox",
    art: "ART-023",
    image: "https://picsum.photos/seed/23/300",
    desc: "Pince inox pour câblage électrique.",
    categorie: 2,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 24,
    name: "Lame scie sauteuse HSS",
    art: "ART-024",
    image: "https://picsum.photos/seed/24/300",
    desc: "Lame de scie sauteuse en acier rapide.",
    categorie: 3,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  },
  {
    id: 25,
    name: "Clé plate 10mm",
    art: "ART-025",
    image: "https://picsum.photos/seed/25/300",
    desc: "Clé plate simple et résistante en acier allié.",
    categorie: 1,
    images: [
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300",
      "https://picsum.photos/seed/1/300"
    ]
  }
];

export default products;
