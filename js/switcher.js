/* --------------- toggle switcher ------------ */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        (document.querySelector(".style-switcher").classList.remove("open"));
    }
});

/* --------------- toggle switcher color ------------ */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title"))
            style.removeAttribute("disabled");
        else
            style.setAttribute("disabled", "true");
    })
}

// checkig if 'color' key exists
if (localStorage.getItem("color") !== null)
    changeColor();

/* ---------------theme light - dark mode ------------ */
const dayNight = document.querySelector(".day-night"),
    dayNightLogo = document.querySelector(".day-night-logo");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark"))
        localStorage.setItem("theme", "dark");
    else
        localStorage.setItem("theme", "light");
    updateIconAndLogo();
});

function themeMode() {
    // checking if 'theme' key exists
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light")
            document.body.classList.remove("dark");
        else
            document.body.classList.add("dark");
    }
    updateIconAndLogo();
}
themeMode();

function updateIconAndLogo() {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
        // update logo
        dayNightLogo.querySelector("img:first-child").classList.add("deactivate");
        dayNightLogo.querySelector("img:first-child").classList.remove("active");
        dayNightLogo.querySelector("img:last-child").classList.add("active");
        dayNightLogo.querySelector("img:last-child").classList.remove("deactivate");
    } else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
        // update logo
        dayNightLogo.querySelector("img:first-child").classList.remove("deactivate");
        dayNightLogo.querySelector("img:first-child").classList.add("active");
        dayNightLogo.querySelector("img:last-child").classList.remove("active");
        dayNightLogo.querySelector("img:last-child").classList.add("deactivate");
    }
}

/* ------------------ toggle music --------------- */
const music = document.querySelector(".music");
const audio = document.getElementById("myAudio");

music.addEventListener("click", function () {
    if (this.classList.contains("pause")) {
        document.getElementById("myAudio").play();
    } else {
        document.getElementById("myAudio").pause();
    }
    this.classList.toggle("pause");
});