                /* ----------- HOME SCORE COUNTER ----------- */

let homeScore = document.getElementById("home-score-counter")
let numHomeScore = 0

function homeScorePlusOne() {
    numHomeScore += 1
    homeScore.textContent = numHomeScore
}

function homeScorePlusTwo() {
    numHomeScore += 2
    homeScore.textContent = numHomeScore
}

function homeScorePlusThree() {
    numHomeScore += 3
    homeScore.textContent = numHomeScore
}

                /* ----------- GUEST SCORE COUNTER ----------- */

let guestScore = document.getElementById("guest-score-counter")
let numGuestScore = 0

function guestScorePlusOne() {
    numGuestScore += 1
    guestScore.textContent = numGuestScore
}

function guestScorePlusTwo() {
    numGuestScore += 2
    guestScore.textContent = numGuestScore
}

function guestScorePlusThree() {
    numGuestScore += 3
    guestScore.textContent = numGuestScore
}

                /* ----------- NEW GAME BUTTON ----------- */

function newGame() {
    numHomeScore = 0
    homeScore.textContent = 0
    
    numGuestScore = 0
    guestScore.textContent = 0
}
