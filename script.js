//darkmode

let darkModeVar = false;
let darkModeBtn = document.getElementById("darkmode");
let navbar = document.getElementById("navbar");
let navlinks = document.querySelectorAll(".navlinks");
let footer = document.getElementById("footer");
let gitLink = document.getElementById("githubLink");
let navbuttons = document.querySelectorAll(".navbtn");

let botaoMostarLista = document.getElementById('mostrarBtn')

function darkMode() {
  darkModeBtn.style.transform = "rotate(360deg)";

  if (darkModeVar === true) {
    darkModeVar = false;
  } else if (darkModeVar === false) {
    darkModeVar = true;
  } else {
    console.log("error");
  }

  switch (darkModeVar) {
    case true: //dark ativado
      darkModeBtn.querySelector("img").src = "svg/sun-light.svg";
      navbar.style.outline = "2px solid white";
      navbar.style.backgroundColor = "rgb(0, 0, 24)";
      document.body.style.backgroundColor = "rgb(0, 0, 24)";
      document.body.style.color = "rgb(255, 255, 255)";
      footer.style.outline = "2px solid white";
      gitLink.querySelector("img").src = "svg/github-light.svg";
      for (let j = 0; j < navbuttons.length; j++) {
        navbuttons[j].style.color = "white";
      }
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }
      botaoMostarLista.style.color = "rgb(255, 255, 255)";
      botaoMostarLista.style.border = "2px solid white";
      button1.style.color = "rgb(255, 255, 255)";
      button1.style.border = "2px solid white";
      button2.style.color = "rgb(255, 255, 255)";
      button2.style.border = "2px solid white";
      button3.style.color = "rgb(255, 255, 255)";
      button3.style.border = "2px solid white";
      button4.style.color = "rgb(255, 255, 255)";
      button4.style.border = "2px solid white";
      break;
    case false: //dark desativado
      darkModeBtn.querySelector("img").src = "svg/sun-dark.svg";
      navbar.style.outline = "2px solid rgb(0, 0, 31)";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
      document.body.style.backgroundColor = "rgba(255, 255, 255, 1)";
      document.body.style.color = "rgb(0, 0, 24)";
      footer.style.outline = "2px solid rgb(0, 0, 24)";
      gitLink.querySelector("img").src = "svg/github-dark.svg";
      for (let j = 0; j < navbuttons.length; j++) {
        navbuttons[j].style.color = "rgb(0, 0, 24)";
      }
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "rgb(0, 0, 24)";
      }
      botaoMostarLista.style.color = "rgb(0, 0, 24)";
      botaoMostarLista.style.border = "2px solid rgb(0, 0, 24)";
      button1.style.color = "rgb(0, 0, 24)";
      button1.style.border = "2px solid rgb(0, 0, 24)";
      button2.style.color = "rgb(0, 0, 24)";
      button2.style.border = "2px solid rgb(0, 0, 24)";
      button3.style.color = "rgb(0, 0, 24)";
      button3.style.border = "2px solid rgb(0, 0, 24)";
      button4.style.color = "rgb(0, 0, 24)";
      button4.style.border = "2px solid rgb(0, 0, 24)";
      break;
    default:
      console.log("algo deu mt errado");
  }
}

//darkmode

//carrosel de imgs
let keyArrowL = document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    goForward();
  } else {
    return;
  }
});

let keyArrowR = document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    goBack();
  } else {
    return;
  }
});
const arrowLeft = document.getElementById("larrow");
const arrowRight = document.getElementById("rarrow");

const imgs = [
  "imgs/img1.JPG",
  "imgs/img2.jpg",
  "imgs/img3.jpg",
  "imgs/img4.JPG",
  "imgs/img5.JPG",
];

let currentIndex = 1;

const mainImg = document.getElementById("carrouselmain");
const imgLeft = document.getElementById("carrouselsub1");
const imgRight = document.getElementById("carrouselsub2");
const capaEscuraLeft = document.getElementById("darkopa1");
const capaEscuraRight = document.getElementById("darkopa2");

function updateCarousel() {
  mainImg.src = imgs[currentIndex];

  if (currentIndex - 1 >= 0) {
    imgLeft.src = imgs[currentIndex - 1];
    imgLeft.style.opacity = 1;
  } else {
    imgLeft.style.opacity = 0;
    capaEscuraLeft.style.opacity = 0;
  }

  if (currentIndex + 1 < imgs.length) {
    imgRight.src = imgs[currentIndex + 1];
    imgRight.style.opacity = 1;
  } else {
    imgRight.style.opacity = 0;
    capaEscuraRight.style.opacity = 0;
  }

  if (currentIndex === 0) {
    arrowLeft.disabled = true;
  } else {
    arrowLeft.disabled = false;
  }

  if (currentIndex === imgs.length - 1) {
    arrowRight.disabled = true;
  } else {
    arrowRight.disabled = false;
  }
}

function goBack() {
  if (currentIndex === 0) {
    return;
  }
  currentIndex -= 1;
  updateCarousel();
}

function goForward() {
  if (currentIndex === imgs.length - 1) {
    return;
  }
  currentIndex += 1;
  updateCarousel();
}

updateCarousel();

//carrosel de imgs

//pessoas

let pessoas = ["bruno", "lavinia", "jonas", "claucia"];
let pessoa_escolhida = null;

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");

let nomeP = document.getElementById("nomePessoa");
let idadeP = document.getElementById("idadePessoa");
let descP = document.getElementById("descPessoa");

//opcoes de nomes pq n sei usar querySelector
let nome1 = document.getElementById('btn1')
let nome2 = document.getElementById('btn2')
let nome3 = document.getElementById('btn3')
let nome4 = document.getElementById('btn4')

let textMostrar = document.getElementById('mostrarBtn')

// container das descrições
const descsContainer = document.querySelector(".descs");

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;
if (descsContainer) descsContainer.style.display = "none";
nomeP.textContent = "";
idadeP.textContent = "";
descP.textContent = "";
textMostrar.textContent = "Mostrar Integrantes";

function listaMostrar() {
    textMostrar.textContent = "X";
  const abrir = button1.disabled;
  if (abrir) {
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    if (descsContainer) descsContainer.style.display = "block";
  } else {

    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    pessoa_escolhida = null;
    nomeP.textContent = "";
    idadeP.textContent = "";
    descP.textContent = "";
    textMostrar.textContent = "Mostrar Integrantes";
    if (descsContainer) descsContainer.style.display = "none";
  }
}

function mostrarBruno() {
  pessoa_escolhida = "bruno";
  nomeP.textContent = "Bruno";
  idadeP.textContent = "Idade: 16 anos";
}

function mostrarLavinia() {
  pessoa_escolhida = "lavinia";
  nomeP.textContent = "Lavínia";
  idadeP.textContent = "Idade: 11 anos";
}

function mostrarClaucia() {
  pessoa_escolhida = "claucia";
  nomeP.textContent = "Cláucia";
  idadeP.textContent = "Idade: 41 anos";
}

function mostrarJonas() {
  pessoa_escolhida = "jonas";
  nomeP.textContent = "Jonas";
  idadeP.textContent = "Idade: 41 anos";
}

//pessoas
