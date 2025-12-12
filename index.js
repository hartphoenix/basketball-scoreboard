let homescore = 0
let guestscore = 0

function home1() {
    homescore += 1
    document.getElementById("homescore").textContent = homescore
}

function home2() {
    homescore += 2
    document.getElementById("homescore").textContent = homescore
}

function home3() {
    homescore += 3
    document.getElementById("homescore").textContent = homescore
}

function guest1() {
    guestscore += 1
    document.getElementById("guestscore").textContent = guestscore
}

function guest2() {
    guestscore += 2
    document.getElementById("guestscore").textContent = guestscore
}

function guest3() {
    guestscore += 3
    document.getElementById("guestscore").textContent = guestscore
}

function newgame() {
    homescore = 0
    guestscore = 0
    document.getElementById("homescore").textContent = homescore
    document.getElementById("guestscore").textContent = guestscore
}