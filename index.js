let homeScore = 0
let guestScore = 0
let homeScoreUpdate = document.getElementById("homescore-update")
let guestScoreUpdate = document.getElementById("guestscore-update")
function addOnePointH() {
    homeScore += 1
    homeScoreUpdate.innerText = homeScore
}
function addTwoPointH() {
    homeScore += 2
    homeScoreUpdate.innerText = homeScore
}
function addThreePointH() {
    homeScore += 3
    homeScoreUpdate.innerText = homeScore
}

function addOnePointG() {
    guestScore += 1
    guestScoreUpdate.innerText = guestScore
}
function addTwoPointG() {
    guestScore += 2
    guestScoreUpdate.innerText = guestScore
}
function addThreePointG() {
    guestScore += 3
    guestScoreUpdate.innerText = guestScore
}