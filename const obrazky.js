function finalnyVybuch() {
    uzZotrete = true;
    canvas.style.opacity = "0";
    canvas.style.pointerEvents = "none";

    // Zmeniť pozadie karty na úplne biele
    karta.style.backgroundColor = "#ffffff";  // Čistá biela

    karta.classList.add('expanded');
    for (let i = 0; i < 60; i++) vytvorSrdce(window.innerWidth / 2, window.innerHeight / 2, true);
}