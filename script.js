//darkmode

let darkModeVar = false
let darkModeBtn = document.getElementById('darkmode');
let navbar = document.getElementById('navbar');
let navlinks = document.querySelectorAll('.navlinks');
let footer = document.getElementById('footer');
let gitLink = document.getElementById('githubLink');
let navbuttons = document.querySelectorAll('.navbtn');

function darkMode() {
    darkModeBtn.style.transform = "rotate(360deg)";

    if (darkModeVar === true) {
        darkModeVar = false;
    } else if (darkModeVar === false) {
        darkModeVar = true;
    } else {
        console.log('error');
    }

    switch (darkModeVar) {
        case true: //dark ativado
            darkModeBtn.querySelector('img').src = "svg/sun-light.svg";
            navbar.style.outline = "2px solid white";
            navbar.style.backgroundColor = "rgb(0, 0, 24)";
            document.body.style.backgroundColor = "rgb(0, 0, 24)";
            document.body.style.color = "rgb(255, 255, 255)";
            footer.style.outline = "2px solid white";
            gitLink.querySelector('img').src = "svg/github-light.svg";
            for (let j = 0; j < navbuttons.length; j++) {
                navbuttons[j].style.color = "white";
            }
            for (let i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "white";
            }
            break;
        case false: //dark desativado
            darkModeBtn.querySelector('img').src = "svg/sun-dark.svg";
            navbar.style.outline = "2px solid rgb(0, 0, 31)";
            navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
            document.body.style.backgroundColor = "rgba(255, 255, 255, 1)";
            document.body.style.color = "rgb(0, 0, 24)";
            footer.style.outline = "2px solid rgb(0, 0, 24)";
            gitLink.querySelector('img').src = "svg/github-dark.svg";
            for (let j = 0; j < navbuttons.length; j++) {
                navbuttons[j].style.color = "rgb(0, 0, 24)";
            }
            for (let i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "rgb(0, 0, 24)";
            }
            break;
        default:
            console.log('algo deu mt errado')
    }
}

//darkmode





//carrosel de imgs

const arrowLeft = document.getElementById('larrow')
const arrowRight = document.getElementById('rarrow')

const imgs = [
    "imgs/img1.JPG",
    "imgs/img2.jpg",
    "imgs/img3.jpg",
    "imgs/img4.JPG",
    "imgs/img5.JPG"
]

let currentIndex = 1

const mainImg = document.getElementById('carrouselmain')
const imgLeft = document.getElementById('carrouselsub1')
const imgRight = document.getElementById('carrouselsub2')
const capaEscuraLeft = document.getElementById('darkopa1')
const capaEscuraRight = document.getElementById('darkopa2')

function updateCarousel() {
    mainImg.src = imgs[currentIndex]

    if (currentIndex - 1 >= 0) {
        imgLeft.src = imgs[currentIndex - 1]
        imgLeft.style.opacity = 1
    } else {
        imgLeft.style.opacity = 0
        capaEscuraLeft.style.opacity = 0
    }

    if (currentIndex + 1 < imgs.length) {
        imgRight.src = imgs[currentIndex + 1]
        imgRight.style.opacity = 1
    } else {
        imgRight.style.opacity = 0
        capaEscuraRight.style.opacity = 0
    }

    if (currentIndex === 0) {
        arrowLeft.disabled = true
    } else {
        arrowLeft.disabled = false
    }

    if (currentIndex === imgs.length - 1) {
        arrowRight.disabled = true
    } else {
        arrowRight.disabled = false
    }
}

function goBack() {
    if (currentIndex === 0) {
        return
    };
    currentIndex -= 1
    updateCarousel()
}

function goForward() {
    if (currentIndex === imgs.length - 1) {
        return;
    }
    currentIndex += 1
    updateCarousel()
}

updateCarousel()

//carrosel de imgs

//pessoas

//pessoas



//o que precisa ter

// IF / ELSE 
// Use para verificar uma condição. 
//feito.

// SWITCH 
// Use para mostrar mensagens conforme uma escolha. 


// FOR 
// Use para percorrer uma lista. 


// WHILE 
// Pode ser simples. 


// VETOR (Array) 

// Deve conter: 

// Lista de nomes 
// Lista de momentos especiais 
 

// MATRIZ 

// Uma matriz simples. 


// OBJETO 

// Crie pelo menos 1 objeto que represente um membro da família.


// DOM 
// Use JavaScript para modificar elementos da página. 
//feito.

// EVENTOS 
// Pelo menos um dos seguintes: 
// onclick 
// onmouseover 
// addEventListener
//onclck foi usado