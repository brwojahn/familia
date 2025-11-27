//darkmode

let darkModeVar = false
let darkModeBtn = document.getElementById('darkmode');
let navbar = document.getElementById('navbar');
let navlinks = document.querySelectorAll('.navlinks');
let footer = document.getElementById('footer');
let gitLink = document.getElementById('githubLink')

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
            for (var i = 0; i < navlinks.length; i++) {
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
            for (var i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "rgb(0, 0, 24)";
            }
            break;
        default:
            console.log('algo deu mt errado')
    }
}

//darkmode

//carrosel de imgs

const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let mainImg = document.getElementById('carrouselmain');
let imgLeft = document.getElementById('carrouselsub1');
let imgRight = document.getElementById('carrouselsub2');

imgLeft.querySelector(img).src = imgs[0];
mainImg.querySelector(img).src = imgs[1];
imgRight.querySelector(img).src = imgs[2];

function goBack() {

}

function goForward() {

}

//carrosel de imgs