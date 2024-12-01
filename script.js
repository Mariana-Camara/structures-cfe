let cardHtml = document.getElementById("container");
let modelHtml = document.getElementById("modals");

let structure = [
  {
    id: "1T",
    structure: "TS20",
    meaning: "T Sencilla",
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
    image: "VS1.jpg",
  },
  {
    id: "2T",
    structure: "TS2N",
    meaning: "T Sencilla con Neutro",
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
    image: "VS2.jpg",
  },
  {
    id: "3T",
    structure: "TS2G",
    meaning: "T Sencilla con Guardia",
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
    image: "VS3.jpg",
  },
];

createCard([], 0);


function createCard(filter, state) {
  let card = "";
  let detailCard = "";

  // 0 - Filtro por defecto
  // 1 - Filtro con resultados
  // 2 - Filtro sin resultados

  if (state === 0) {
    for (let i = 0; i < structure.length; i++) {
      detailCard = `<div class="card">
                              <h2>${structure[i].structure}</h2>
                              <img src="structur.png" alt="${structure[i].structure}" >
                              <h3>${structure[i].meaning}</h3>
                              <p>${structure[i].description}</p>
                              <button class="read-more" data-target="${structure[i].id}">Leer más</button>
                          </div>
                           `;

      card += detailCard;
    }
  } else if (state === 1) {
    for (let i = 0; i < filter.length; i++) {
        detailCard = `<div class="card">
                                <h2>${filter[i].structure}</h2>
                                <img src="structur.png" alt="${filter[i].structure}" >
                                <h3>${filter[i].meaning}</h3>
                                <p>${filter[i].description}</p>
                                <button class="read-more" data-target="${filter[i].id}">Leer más</button>
                            </div>
                             `;
  
        card += detailCard;
      }
  } else {

    // HTLM SIN RESULTADIS
    card = '<h2 style=" margin-top: 8em;">Sin Resultados</h2>'
  }

  cardHtml.innerHTML = card;

  if(state === 0 || state === 1)
  createModal();
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

  if (filter.length >= 4) {

    let result = structure.filter(
      (str) =>
      (
                
        str.structure.toLowerCase().includes(filter)
        ||
                
        str.meaning.toLowerCase().includes(filter)
      )

    );

    if(result.length !== 0 ) createCard( result, 1)
    else createCard([], 2) 

  } else if( filter.length===0){
    createCard([],0);
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
                        <img src="structur.png" alt="${structure[i].structure}" >
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

