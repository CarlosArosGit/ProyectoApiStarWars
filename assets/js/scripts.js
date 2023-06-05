const getDataFromApi = (nPersonaje, clase) => {
  let promesaApi = new Promise((resuelve, rechaza) => {
    let endpoint = 'https://swapi.dev/api/people/' + nPersonaje;
    fetch(endpoint)
      .then(respuesta => respuesta.json())
      .then(json => {
        resuelve(json);
      })
      .catch(error => {
        rechaza(error);
      });
  });
  promesaApi.then(
    (data) => {
      let nombreP = data.name;
      let alturaP = data.height;
      let pesoP = data.mass;
      let personajes = '';
      if(clase == 'colorGrupo1'){
        personajes = document.getElementById('cardPrincipal1');
      }else if(clase == 'colorGrupo2'){
        personajes = document.getElementById('cardPrincipal2');
      }else if(clase == 'colorGrupo3'){
        personajes = document.getElementById('cardPrincipal3');
      }
      personajes.innerHTML += 
      `
      <div class="card m-3">
        <div class="row g-0">
          <div class="col-md-2 d-flex justify-content-center align-items-center">
            <div class="circulo ${clase}"></div>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">${nombreP}</h5>
              <p class="card-text&quot;"><b>Altura</b>: ${alturaP} <br><b>Peso:</b> ${pesoP}</p>
            </div>
          </div>
        </div>
      </div>
      `;
    })
    .catch(
      (objetoError) => {
        let personajes = '';
        if(clase == 'colorGrupo1'){
          personajes = document.getElementById('cardPrincipal1');
        }else if(clase == 'colorGrupo2'){
          personajes = document.getElementById('cardPrincipal2');
        }else if(clase == 'colorGrupo3'){
          personajes = document.getElementById('cardPrincipal3');
        }
        personajes.innerHTML = '';
        personajes.innerHTML +=  `¡UPS! hubo un problema con la obtención de datos. ${objetoError}`;
      }
    );
};


var grupo1 = [1, 2, 3, 4, 5];
var grupo2 = [6, 7, 8, 9, 10];
var grupo3 = [12, 13, 14, 15, 16];

function* generadorGrupo1() {
  let i = 0
  yield grupo1[i]
  i++
  yield grupo1[i]
  i++
  yield grupo1[i]
  i++
  yield grupo1[i]
  i++
  yield grupo1[i]
  i++
}

function* generadorGrupo2() {
  let i = 0
  yield grupo2[i]
  i++
  yield grupo2[i]
  i++
  yield grupo2[i]
  i++
  yield grupo2[i]
  i++
  yield grupo2[i]
  i++
}

function* generadorGrupo3() {
  let i = 0
  yield grupo3[i]
  i++
  yield grupo3[i]
  i++
  yield grupo3[i]
  i++
  yield grupo3[i]
  i++
  yield grupo3[i]
  i++
}

let numeroPersonaje = generadorGrupo1();
let c = 1;

$('#grupo1').mouseenter(() => {
  if (grupo1.includes(c)) {
    let nPersonaje = numeroPersonaje.next().value;
    getDataFromApi(nPersonaje, 'colorGrupo1');
    c++
  }
});

let numeroPersonaje2 = generadorGrupo2();
let c2 = 6;

$('#grupo2').mouseenter(() => {
  if (grupo2.includes(c2)) {
    let nPersonaje = numeroPersonaje2.next().value;
    getDataFromApi(nPersonaje, 'colorGrupo2');
    c2++
  }
});

let numeroPersonaje3 = generadorGrupo3();
let c3 = 12;

$('#grupo3').mouseenter(() => {
  if (grupo3.includes(c3)) {
    let nPersonaje = numeroPersonaje3.next().value;
    getDataFromApi(nPersonaje, 'colorGrupo3');
    c3++
  }
})