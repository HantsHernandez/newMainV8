// Numero de rieles
const rieles = ["riel1", "riel2", "riel3", "riel4", "riel5"];
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
// la probaabiliad de los items
const probabilidades = [0.25, 0.25, 0.1, 0.1, 0.1, 0.1, 0.05, 0.05];
// frutas caidas en e
let frutasObtenidas = [];
// La cantidad de items para cada riel
let itemsRiel = [12, 17, 22, 27, 32];

//Genera una cantidad n de items aletorios
function generarItems(cantidadItems) {
  let frutasSeleccionada = [];
  for (let j = 0; j < cantidadItems; j++) {
    let valorRandom = Math.random();
    let acumuladorProbabilidades = 0;
    let frutaSeleccionada = "";

    for (let i = 0; i < frutas.length; i++) {
      acumuladorProbabilidades += probabilidades[i];
      if (acumuladorProbabilidades >= valorRandom - 0.0001) {
        frutaSeleccionada = frutas[i];
        break;
      }
    }
    frutasSeleccionada[j] = frutaSeleccionada;
  }
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

/// funcion de la melissa es para disque menu que debe de agregar
function toggleMenu() {
  var menu = document.getElementById("menuOpciones");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//******** *** Pruebas para las funcionalidades de lo botones y paneles  ****

let monedas = parseFloat(document.getElementById("monedas").innerText);
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

botonMax.addEventListener('click', function(){
  panelApuesta = monedas
  document.getElementById("panelApuesta").innerText = panelApuesta.toFixed(2);
})


function iniciarAnimacion() {
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
    document.getElementById("spin").onclick = iniciarAnimacion;
  }, 5600);

  console.log("sirve");
}
