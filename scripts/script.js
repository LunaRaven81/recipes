let buttonHome = document.getElementById("home");
let buttonMain = document.getElementById("main");
let buttonGalery = document.getElementById("galery");
let buttonAbout = document.getElementById("about");
let buttonFeedback = document.getElementById("feedback");
let buttonLogin = document.getElementById("login");

buttonHome.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'index.html';
    }
    else {
        window.location.href = '../index.html';
    }
});

buttonMain.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/hauptmahlzeit.html';
    }
    else {
        window.location.href = 'hauptmahlzeit.html';
    }
});

buttonGalery.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/galery.html';
    }
    else {
        window.location.href = 'galery.html';
    }
});


buttonAbout.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/about.html';
    }
    else {
        window.location.href = 'about.html';
    }
});

buttonFeedback.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/feedback.html';
    }
    else {
        window.location.href = 'feedback.html';
    }
});

buttonLogin.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/login.html';
    }
    else {
        window.location.href = 'login.html';
    }
});

//Ab hier sind die Knöpfe für die Version, welche ein Burgermenu nutzt.
let buttonMobileMain = document.getElementById("mobileMain");
let buttonMobileGalery = document.getElementById("mobileGalery");
let buttonMobileLogin = document.getElementById("mobileLogin");

buttonMobileMain.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/hauptmahlzeit.html';
    }
    else {
        window.location.href = 'hauptmahlzeit.html';
    }
});

buttonMobileGalery.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/galery.html';
    }
    else {
        window.location.href = 'galery.html';
    }
});

buttonMobileLogin.addEventListener("click", () => {
    if (window.location.pathname.endsWith("index.html")) {
        window.location.href = 'sites/login.html';
    }
    else {
        window.location.href = 'login.html';
    }
});