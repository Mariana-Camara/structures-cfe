let cardHtml = document.getElementById("container");
let modelHtml = document.getElementById("modals");

let structure = [
  {
    id: "1T",
    structure: "TS20",
    meaning: "Te con Cruceta sencilla, 2 fases, Retorno por tierra",
    description: "Se usa para alimentar transformadores monofásicos",
    code: [353233, 195, 151, 445120, 780393, 561239, 813415],
    material: [
      "Poste PCR 11C 500",
      "Cruceta PT200",
      "Abrazadera UC",
      "Alfiler 1A",
      "Aislador 13A",
      "Varilla Protectora",
      "Amarre Alambre",
    ],
    amount: [1, 1, 1, 2, 2, 2, 2],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Kg"],
    price: [8000, 3500, 2200, 4500, 2459, 1100, 80],
    store: ["D163", "D163", "D163", "D163", "D163", "D163", "D163"],
    image: "structur.png",
  },
  {
    id: "2T",
    structure: "TS2N",
    meaning: "Te con Cruceta sencilla, 2 fases, Neutro corrido",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [
      794155, 195, 151, 741141, 793757, 152, 175, 165, 795811, 794328, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Placa 1PC",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TS2N.jpg",
  },
  {
    id: "3T",
    structure: "TS2G",
    meaning: "Te con Cruceta sencilla, 2 fases, Neutro de guarda",
    description:
      "Usado en areas rurales con alta incidencia de descargas atmosféricas",
    code: [
      794155, 195, 151, 741141, 793757, 152, 175, 165, 795811, 794328, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Placa 1PC",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TS2G.jpg",
  },

  {
    id: "4T",
    structure: "TS30",
    meaning: "Te, Cruceta Sencilla, Retorno por Tierra",
    description: "Usado en areas urbanas y rurales en sistemas tipo B",
    code: [794155, 195, 151, 278698, 741141, 794326, 793736],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Alfiler ADOM 13A",
      "Aislador 13PD",
      "Varilla Preformada",
      "Alambre Cu#4",
    ],
    amount: [1, 1, 1, 3, 3, 3, 3],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Kg"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 80],
    store: ["D163", "D163", "D163", "D163", "D163", "D163", "D163"],
    image: "structur.png",
  },

  {
    id: "5T",
    structure: "TS3N",
    meaning: "Te, Cruceta Sencilla, 3 fases con Neutro corrido",
    description:
      "Usado en areas rurales con baja incidencia de descargas atmosféricas y en áreas urbanas para lineas primarias",
    code: [
      794155, 195, 151, 741141, 793757, 152, 175, 165, 795811, 794326, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Placa 1PC",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 1, 3, 1, 1, 1, 2, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TS3N.jpg",
  },

  {
    id: "6T",
    structure: "TS3G",
    meaning: "Te, Cruceta Sencilla, 3 fases con Neutro de guarda",
    description:
      "Usado en areas rurales con alta incidencia de descargas atmosféricas tanto en sistemas A como en B",
    code: [
      794155, 195, 151, 741141, 793757, 152, 175, 165, 795811, 794326, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Placa 1PC",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador", //checar de que es este codigo o cambiarlo por 793882
    ],
    amount: [1, 1, 1, 3, 1, 1, 1, 2, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TS3G.jpg",
  },

  {
    id: "7T",
    structure: "TE30",
    meaning: "Te, Especial, con Refuerzo de Alfiler",
    description: "Usado para sustituir a la estructura TD30 wn deflexiones",
    code: [794155, 195, 151, 278698, 741141, 445120, 794326, 234, 793736],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Alfiler ADOM 13A",
      "Aislador 13PD",
      "Refuerzo R1A", //445120
      "Varilla Preformada",
      "Retenida",
      "Alambre Cu#4",
    ],
    amount: [1, 1, 1, 3, 3, 3, 3, 1, 3],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Kg"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "structur.png",
  },

  {
    id: "8T",
    structure: "TD2N",
    meaning: "Te,Doble, 2 fases, Neutro corrido",
    description: "Estructura equivalente a la TS con refuerzo de alfiler",
    code: [
      794155,
      195,
      902,
      278698,
      741141,
      793757,
      175,
      152,
      795811,
      234,
      794326,
      793736,
      793733, //checar de que es este codigo o cambiarlo por 793882
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Perno DR 16 x 305",
      "Alfiler ADOM 13A",
      "Aislador 13PD",
      "Bastidor B1",
      "Carrete H",
      "Abrazadera 1BS",
      "Bajante de Tierra",
      "Retenida",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
    ],
    amount: [1, 2, 4, 4, 4, 1, 1, 1, 1, 1, 3, 2, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TD2G.jpg",
  },

  {
    id: "9T",
    structure: "TD2G",
    meaning: "Te,Doble, 2 fases, Neutro de Guarda",
    description:
      "Estructura utilizada en lineas rurales con alta incidencia de descargas atmosféricas",
    code: [
      794155,
      195,
      902,
      741141,
      793757,
      152,
      175,
      795811,
      234,
      794326,
      793736,
      793733,
      675200, //checar de que es este codigo o cambiarlo por 793882
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Perno DR 16 x 305",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Bajante de Tierra",
      "Retenida",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 2, 4, 4, 1, 1, 1, 1, 1, 3, 2, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TD2G.jpg",
  },

  {
    id: "9T",
    structure: "TD3G",
    meaning: "Te,Doble, 3 fases, Neutro de Guarda",
    description:
      "Estructura utilizada para ánguos verticales en líneas rectas o deflexiones horizontales que excedan limitaciones de la estructura TS",
    code: [
      794155, 195, 902, 741141, 793757, 152, 175, 795811, 234, 794326, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Perno DR 16 x 305",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Bajante de Tierra",
      "Retenida",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 2, 4, 6, 1, 1, 1, 1, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "TD3G.jpg",
  },

  {
    id: "1P",
    structure: "PS1N",
    meaning: "Puntaposte Sencilla, 1 fase, neutro corrido",
    description: "Estructura usada en líneas con retorno por tierra",
    code: [
      794155, 67172, 152, 741141, 793757, 175, 795811, 794326, 793736, 793733,
      675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Soporte SPA",
      "Abrazadera 1BS",
      "Aislador 13PD",
      "Bastidor B1",
      "Carrete H",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Kg", "Mts", "Pz"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 2459, 1100, 80, 127, 1200],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "PS1N.jpg",
  },

  {
    id: "2P",
    structure: "PS3N",
    meaning: "Puntaposte, Sencillo, 3 fases, Neutro corrido",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [
      794155, 195, 151, 67172, 152, 741141, 793757, 793677, 175, 795811, 794326,
      793736, 793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Abrazadera UC",
      "Soporte SPA",
      "Abrazadera 1BS",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 2BS",
      "Carrete H",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
      10,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "PS3N.jpg",
  },

  {
    id: "4P",
    structure: "PD1N",
    meaning: "Puntaposte, Doble, 1 fase, Neutro corrido",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [
      794155, 195, 902, 67172, 156, 741141, 793757, 793677, 175, 234, 795811,
      794326, 793736, 793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Perno DR 16 x 305",
      "Soporte SPA",
      "Abrazadera 1BD",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 2BS",
      "Carrete H",
      "Retenida",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 2, 4, 2, 2, 6, 1, 1, 1, 1, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
      20, 319,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "PD1N.jpg",
  },

  {
    id: "4P",
    structure: "PD3N",
    meaning: "Punta Poste Trifásico con Neutro",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [
      794155, 195, 902, 67172, 156, 741141, 793757, 793677, 175, 234, 795811,
      794326, 793736, 793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta PT200",
      "Perno DR 16 x 305",
      "Soporte SPA",
      "Abrazadera 1BD",
      "Aislador 13PD",
      "Bastidor B1",
      "Abrazadera 2BS",
      "Carrete H",
      "Retenida",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 2, 4, 2, 2, 6, 1, 1, 1, 1, 1, 4, 3, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
      20, 319,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "PD3N.jpg",
  },

  {
    id: "1R",
    structure: "RP1N",
    meaning: "Remate, Poste, 1 fase, Neutro corrido",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [794155, 158, 794127, 279515, 13807, 234, 861, 795811, 675200],
    material: [
      "Poste PCR 12 750",
      "Abrazadera 1AG",
      "Grillete GA1",
      "Aislador 13SHL45N",
      "Grapa remate",
      "Retenida",
      "Abrazadera 3 AG",
      "Bajante de Tierra",
      "Conectador",
    ],
    amount: [1, 1, 2, 1, 2, 3, 1, 1, 1],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "RP1N.jpg",
  },

  {
    id: "2R",
    structure: "RP1G",
    meaning: "Remate, Poste, 1 fase, Guarda",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [794155, 158, 862, 279515, 13807, 234, 794127, 793882],
    material: [
      "Poste PCR 12 750",
      "Abrazadera 1AG",
      "Abrazadera 2AG",
      "Aislador 13SHL45N",
      "Grapa remate",
      "Retenida",
      "Grillete GA1",
      "Conectador",
    ],
    amount: [1, 1, 1, 1, 2, 2, 2, 1],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 1256],
    store: ["D163", "D163", "D163", "D163", "D163", "D163", "D163", "D163"],
    image: "RP1G.jpg",
  },

  {
    id: "3R",
    structure: "RD2N",
    meaning: "Remate, Poste, 2 fases, Neutro Corrido",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [794155, 886, 225, 794145, 279515, 13807, 234, 795811, 862, 793882],
    material: [
      "Poste PCR 12 750",
      "Cruceta PR200",
      "Perno DR 16 x 457",
      "Ojo RE",
      "Aislador 13SHL45N",
      "Grapa remate",
      "Retenida",
      "Bajante de Tierra",
      "Abrazadera 2AG",
      "Conectador",
    ],
    amount: [1, 2, 4, 2, 2, 3, 2, 1, 1, 1],
    unit: ["Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz", "Pz"],
    price: [8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "RD2N.jpg",
  },

  {
    id: "4R",
    structure: "RD2G",
    meaning: "Remate, Poste, 2 fases, Guarda",
    description: "Usado en areas urbanas donde no existe linea secundaria",
    code: [
      794155, 195, 151, 741141, 793757, 152, 175, 165, 795811, 794328, 793736,
      793733, 675200,
    ],
    material: [
      "Poste PCR 12 750",
      "Cruceta C4R",
      "Perno DR 16 x 457",
      "Tuerca de ",
      "Bastidor B1",
      "Abrazadera 1BS",
      "Carrete H",
      "Placa 1PC",
      "Bajante de Tierra",
      "Varilla Preformada",
      "Alambre Cu#4",
      "Alambre",
      "Conectador",
    ],
    amount: [1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2, 1, 1],
    unit: [
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Pz",
      "Kg",
      "Pz",
      "Kg",
      "Mts",
      "Pz",
    ],
    price: [
      8000, 3500, 2200, 4500, 2300, 1399, 1256, 4500, 2459, 1100, 80, 127, 1200,
    ],
    store: [
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
      "D163",
    ],
    image: "RD2G.jpg",
  },
];

createCard([], 0);


const cleanInput = ()=> {
  let input, filter;

  input = document.getElementById("buscador");
  filter = input.value.toLowerCase();

  if (filter.length !== 0) {
    console.log('Aqui');
    createCard([], 3);
  }
}

function createCard(filter, state) {
  let card = "";
  let detailCard = "";

  // 0 - Filtro por defecto
  // 1 - Filtro con resultados
  // 2 - Filtro sin resultados
  // 3 - Filtro por defecto 2

  if (state === 0) {
    for (let i = 0; i < structure.length; i++) {
      detailCard = `<div class="card" id="${structure[i].structure}" >
                              <h2>${structure[i].structure}</h2>
                              <img src="assets/${structure[i].image}" alt="${structure[i].structure}" onerror="this.src='assets/empty.png'" >
                              <h3>${structure[i].meaning}</h3>
                              <p>${structure[i].description}</p>
                              <button class="read-more" data-target="${structure[i].id}">Leer más</button>
                          </div>
                           `;

      card += detailCard;
    }
    cardHtml.innerHTML = card;
  } else if (state === 1) {
    document.getElementById("result").style.display = "none";
    document.getElementById("container").style.display = "flex";

    for (let i = 0; i < structure.length; i++) {
      document.getElementById(`${structure[i].structure}`).style.display =
        "none";
    }

    for (let i = 0; i < filter.length; i++) {
      document.getElementById(`${filter[i].structure}`).style.display = "block";
    }
  } else if (state == 2) {
    // HTLM SIN RESULTADIS
    document.getElementById("result").style.display = "block";
    document.getElementById("container").style.display = "none";
  } else {
    document.getElementById("result").style.display = "none";
    document.getElementById("container").style.display = "flex";

    for (let i = 0; i < structure.length; i++) {
      document.getElementById(`${structure[i].structure}`).style.display =
        "block";
    }
  }

  if (state === 0) createModal();
}

function createRow(index) {
  const { code, unit, price, store, material, amount } = structure[index];

  let rows = `<tr style=" font-weight: bold; ">
                        <td style="width: 16%;"> CÓDIGO  </td>
                        <td style="width: 18%;"> UNIDADES  </td>
                        <td style="width: 23%;"> MATERIAL </td>
                        <td style="width: 17%;"> CANTIDAD </td>
                        <td style="width: 13%;"> PRECIO </td>
                        <td style="width: 13%;"> ALMACEN </td>
                </tr>
                `;

  for (let i = 0; i < code.length; i++) {
    rows += `<tr>
                        <td> ${code[i]} </td>
                        <td> ${unit[i]} </td>
                        <td> ${material[i]} </td>
                        <td> ${amount[i]} </td>
                        <td> ${price[i]} </td>
                        <td> ${store[i]} </td>
                </tr>
                `;
  }

  return rows;
}

function search() {
  let input, filter;

  input = document.getElementById("buscador");
  filter = input.value.toLowerCase();

  let result = structure.filter(
    (str) =>
      str.structure.toLowerCase().includes(filter) ||
      str.meaning.toLowerCase().includes(filter)
  );

  // console.log(result)

  if (result.length !== 0) createCard(result, 1);
  else createCard([], 2);

  if (filter.length === 0) {
    createCard([], 3);
  }
}

function createModal() {
  let modal = "";
  for (let i = 0; i < structure.length; i++) {
    let result = createRow(i);

    let detailModal = `<div id="${structure[i].id}" class="modal">
                    <div class="modal-content">
                        <span class="close-button">&times;</span>
                        <h2>${structure[i].structure}</h2>
                        <img src="assets/${structure[i].image}" alt="${structure[i].structure}" onerror="this.src='assets/empty.png'" >
                        <h3>${structure[i].meaning}</h3>
                        <p>${structure[i].description}</p>
        
                        <br>
        
                        <div class="hscroll">
        <table  border="1px" height ="400px" style="border-collapse:collapse;  ">
                        <thead bgcolor="#2E4156" height ="40px">
                            <tr>
                                <td colspan="6" style="color:white; font-weight: bold;" >${structure[i].structure} </td>
                            </tr>
                        </thead>
                    
                        <tbody bgcolor="#D1DDED">
                           ${result}
                        </tbody>
                    </table>
                        </div>
                </div>
                </div>
                     `;

    modal += detailModal;
  }

  modelHtml.innerHTML = modal;

  const buttons = document.querySelectorAll(".read-more");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      document.getElementById(target).style.display = "block";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modale) => {
      if (event.target === modale) {
        modale.style.display = "none";
      }
    });
  });
}
