// Numero de rieles
const rieles = [
  "riel1",
  "riel2",
  "riel3",
  "riel4",
  "riel5"
];
// los nombres de los items
const frutas = [
  "bar",
  "siete",
  "bonus",
  "carta",
  "cereza",
  "corona",
  "manzana",
  "wild",
];
// Puntos por cada item 
const puntosPorPatron = [
  [100, 300, 500],
  [50, 200, 250],
  [25, 60, 120],
  [10, 25, 60],
  [5, 20, 50],
  [7, 15, 40],
  [5, 10, 25],
  [5, 10, 25],
];
// la probaabiliad de los items
const probabilidades = [
  0.3,   // bar
  0.3,   // siete
  0.08,  // bonus
  0.08,  // carta
  0.07,  // cereza
  0.07,  // corona
  0.06,  // manzana
  0.04   // wild
];
// frutas caidas en e
let frutasObtenidas = [];
// La cantidad de items para cada riel
let itemsRiel = [
  12,
  17,
  22,
  27,
  32
];

//Genera una cantidad n de items aletorios
function generarItems(cantidadItems) {
  let frutasSeleccionada = [];
  for (let j = 0; j < cantidadItems; j++) {
    let valorRandom = Math.random();
    console.log(" valorRandom: " + valorRandom);
    let acumuladorProbabilidades = 0;
    let frutaSeleccionada = "";

    for (let i = 0; i < frutas.length; i++) {
      acumuladorProbabilidades += probabilidades[i];
      console.log(" acumulador: " + acumuladorProbabilidades);
      if (acumuladorProbabilidades >= valorRandom) {
        //console.log(" acumulador: " + acumuladorProbabilidades);

        console.log("contador: " + i);
        console.log("fruta " + frutas[i]);
        frutaSeleccionada = frutas[i];
        console.log("frutaSeleccionada: " + frutaSeleccionada);
        break;
      }
    }
    frutasSeleccionada[j] = frutaSeleccionada;
  }
  console.log("frutas: " + frutasSeleccionada);
  return frutasSeleccionada;
}

//Genera los rieles con las imagenes
function generarRieles(rielId) {
  let contadorid = 0;
  let cantidadItemsGenerar = 0;

  for (let i = 0; i < rieles.length; i++) {
    if (rieles[i] == rielId) {
      cantidadItemsGenerar = itemsRiel[i];
    }
  }

  let itemSeleccionado = generarItems(cantidadItemsGenerar);
  let rielDiv = document.getElementById(rielId);

  for (let i = 0; i < itemSeleccionado.length; i++) {
    let img = document.createElement("img");
    img.src = "img/" + itemSeleccionado[i] + ".png";
    img.id = contadorid++;
    img.alt = itemSeleccionado[i];
    rielDiv.appendChild(img);
  }
}

function eliminarIdsImagenes(rielId) {
  const rielDiv = document.getElementById(rielId);
  const imagenes = rielDiv.querySelectorAll("img");
  imagenes.forEach((imagen) => {
    imagen.removeAttribute("id");
  });
}

function animacion(rielId) {
  generarRieles(rielId);
  const riel = document.getElementById(rielId);
  const imagenes = riel.getElementsByTagName("img");
  const intervalo = 1;
  let duracionTotal = 0;
  let desplazamiento = 0;
  let desplazamientoTotal = 0;
  let multiplicador = 0;

  // *** Inicio  Funciona pero no es optimo ya que se basa riel por riel no de general y estaria haceindo una carga innecesaria de variables extras (Arreglar)
  let tamañoImagen = document
    .getElementById("riel1")
    .getElementsByTagName("img")[0].clientWidth;
  // Serviran para el calculo de desplazamiento de cada riel
  let riel1 = -1 * (tamañoImagen * itemsRiel[0]);
  let riel2 = -1 * (tamañoImagen * itemsRiel[1]);
  let riel3 = -1 * (tamañoImagen * itemsRiel[2]);
  let riel4 = -1 * (tamañoImagen * itemsRiel[3]);
  let riel5 = -1 * (tamañoImagen * itemsRiel[4]);
  // Tiempo de giro para cada riel
  let duracionGiro = [2400, 3500, 3500, 4500, 5500];
  // Desplazamiento en  px que tendra cada riel
  let desplazamientoRiel = [riel1, riel2, riel3, riel4, riel5];
  // *** FIN

  for (let i = 0; i < rieles.length; i++) {
    if (rieles[i] == rielId) {
      duracionTotal = duracionGiro[i];
      desplazamientoTotal = desplazamientoRiel[i];
      desplazamiento = desplazamientoRiel[i] % 10;
      multiplicador = i;
    }
  }

  const animacion = setInterval(() => {
    for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].style.transform = `translateY(${desplazamiento}px)`;
    }
    if (desplazamiento > desplazamientoTotal) {
      desplazamiento -= 10;
    }
  }, intervalo);

  setTimeout(() => {
    clearInterval(animacion);
    console.log("desplazamiento total: " + desplazamiento);
    setTimeout(() => {
      const rielDiv = document.getElementById(rielId);
      const imagenes = rielDiv.querySelectorAll("img");
      imagenes.forEach((imagen) => {
        const id = parseInt(imagen.id);
        if (
          id !== 9 + multiplicador * 5 &&
          id !== 10 + multiplicador * 5 &&
          id !== 11 + multiplicador * 5
        ) {
          rielDiv.removeChild(imagen);
        } else {
          imagen.style.transform = "translateY(0px)";
        }
      });
      eliminarIdsImagenes(rielId);
    }, 1);
  }, duracionTotal);
}

// Reposionador del Height para cada Contenedor de Rieles
function reposicionadorHeight() {
  let contenedorPrincipal = document.querySelector(".contenedor-principal");
  let contenedores = document.querySelectorAll(".contenedor");
  let anchoImagen = document
    .getElementById(rieles[1])
    .getElementsByTagName("img")[0].clientWidth;

  // Cambiare el height del contenedorPrincipal
  contenedorPrincipal.style.height = anchoImagen * 3 + "px";
  // Cambiara el height de los 5 contenedores de rieles
  contenedores.forEach(function (contenedor) {
    contenedor.style.height = anchoImagen * 3 + "px";
  });
  //Cambiara el height de cada imagen de cada riel
  for (let i = 0; i < rieles.length; i++) {
    let prueba123 = document.getElementById(rieles[i]);
    let image = prueba123.getElementsByTagName("img");

    for (let j = 0; j < image.length; j++) {
      image[j].style.height = anchoImagen + "px";
    }
  }
}

setInterval(reposicionadorHeight, 1000);
reposicionadorHeight();

/// funcion de la melissa es para disque menu que seria el botn de exclamacion que debe de agregar
function toggleMenu() {
  var menu = document.getElementById("menuOpciones");
  var arrows = document.querySelectorAll(".arrow");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    // Devolver el menú a su posición original en el DOM
    document.body.appendChild(menu);
    // Ocultar las flechas cuando se oculta el menú
    arrows.forEach(function (arrow) {
      arrow.style.display = "none";
    });
  } else {
    menu.style.display = "block";
    // Mover el menú al final del cuerpo del documento para superponerlo al contenido
    document.body.appendChild(menu);
    // Mostrar las flechas cuando se muestra el menú
    arrows.forEach(function (arrow) {
      arrow.style.display = "block";
    });
  }
}
var currentIndex = 0;
const images = [
  "/img/Mesa de trabajo 1.png",
  "/img/Mesa de trabajo 2.png",
  "/img/Mesa de trabajo 3.png",
];
document.getElementById("menuImage").src = images[currentIndex];
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function updateImage() {
  var menuImage = document.getElementById("menuImage");
  menuImage.src = images[currentIndex];
}

let monedas = parseFloat(document.getElementById("monedas").innerText);

function iniciarAnimacion() {
  Sonido1();
  animacion("riel1");
  animacion("riel2");
  animacion("riel3");
  animacion("riel4");
  animacion("riel5");
  monedas = monedas - panelApuesta;
  document.getElementById("monedas").innerText = monedas.toFixed(2);

  // Desactiva el boton jugar
  document.getElementById("spin").onclick = null;

  // El couldown que tendra para que vuelva habilitar
  setTimeout(function () {
    detectarValores();
    monedas = parseFloat(document.getElementById("monedas").innerText);
    document.getElementById("spin").onclick = iniciarAnimacion;

    let nuevosPuntos = parseFloat(document.getElementById("monedas").innerText);

    fetch('/actualizar-puntos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ puntos: nuevosPuntos })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Mensaje de éxito desde Laravel
        // Aquí puedes realizar otras acciones después de actualizar los puntos
    })
    .catch(error => {
        console.error('Error:', error);
        // Manejar el error si ocurre algún problema con la solicitud
    });
    

  }, 5600);
}

let botonMenos = document.getElementById("botonMenos");
let botonMas = document.getElementById("botonMas");
let botonMax = document.getElementById("botonMaximaApuesta");
let panelApuesta = parseFloat(
  document.getElementById("panelApuesta").innerText
);

botonMenos.addEventListener("click", function () {
  if (panelApuesta > 50) {
    panelApuesta = panelApuesta - 50;
    document.getElementById("panelApuesta").innerText = panelApuesta.toFixed(2);
  }
});

botonMas.addEventListener("click", function () {
  if (panelApuesta < 500) {
    panelApuesta = panelApuesta + 50;
    document.getElementById("panelApuesta").innerText = panelApuesta.toFixed(2);
  }
});

botonMax.addEventListener("click", function () {
  panelApuesta = monedas;
  if (panelApuesta > 500) {
    panelApuesta = 500;
  }
  document.getElementById("panelApuesta").innerText = panelApuesta.toFixed(2);
});


function detectarValores() {
  let valores = [];

  for (let i = 0; i < 5; i++) {
    let divRieles = document.getElementById(rieles[i]).querySelectorAll("img");

    divRieles.forEach((altImagenes) => {
      valores.push(altImagenes.alt);
    });

    



  }
  //console.log(valores);
  let secuenciasGanar = [
    [0, 3, 6, 9, 12],
    [1, 4, 7, 10, 13],
    [2, 5, 8, 11, 14],
    [0, 4, 8, 10, 13],
    [2, 4, 6, 10, 14],
    [0, 3, 7, 11, 14],
    [2, 5, 7, 9, 12],
    [1, 3, 6, 9, 13],
    [1, 5, 8, 11, 13]
  ];

  let almacenadorAciertos = [];
  let puntos = 0;

  for (let i = 0; i < frutas.length; i++) {
    //console.log("----- -------- --------- fruta en el bucle1: " + frutas[i] + " ------------- ");
    for (let j = 0; j < secuenciasGanar.length; j++) {
      let puntosPatron = 0;
      if (valores[secuenciasGanar[j][0]] == frutas[i] && valores[secuenciasGanar[j][1]] == frutas[i] && valores[secuenciasGanar[j][2]] == frutas[i]) {
       // console.log("ingreso1")
        puntosPatron = puntosPorPatron[i][0];
        almacenadorAciertos.push(true);
        if (valores[secuenciasGanar[j][3]] == frutas[i]) {
          almacenadorAciertos.push(true);
          //console.log("ingres2")
          puntosPatron = puntosPorPatron[i][1];

          if (valores[secuenciasGanar[j][4]] == frutas[i]) {
            almacenadorAciertos.push(true);
           // console.log("ingreso3")
            puntosPatron = puntosPorPatron[i][2];
          } else {
            almacenadorAciertos.push(false);
          }

        } else {
          almacenadorAciertos.push(false);
        }

      } else {
        almacenadorAciertos.push(false);
      }
      puntos = puntosPatron + puntos;
    }
  }
  //console.log("puntos: " + puntos);
  let monedasElement = document.getElementById("monedas");
  let monedasActuales = parseFloat(monedasElement.innerText);
  //console.log("monedas actuales panel: " + monedasActuales);
  // Sumar los puntos a las monedas actuales
  let nuevasMonedas = monedasActuales + puntos;

  // Actualizar el valor en el elemento HTML
  monedasElement.innerText = nuevasMonedas.toFixed(2);
}


// Boton menu
document.getElementById("menuButton").addEventListener("click", function () {
  console.log("Botón de menú presionado");
});

function Sonido1() {
  var audio = document.getElementById("Sonido1");
  audio.play();
}

function SonidoP() {
  var audio = document.getElementById("SonidoP");
  audio.play();
}

setTimeout(() => {
  audio = new Audio("sonidos/ambiente.mp3");
  audio.play();
  audio.volume = 0.1;

  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
  });
}, 1500);
