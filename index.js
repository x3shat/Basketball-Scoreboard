let homeBoard=document.getElementById('home-board')
let homescore=0
let guestBoard=document.getElementById('guest-board')
let guestscore=0


function homeAddPoint(){
    homescore+=1
    homeBoard.innerText=homescore
}
function homeAddTwoPoints(){
    homescore+=2
    homeBoard.innerText=homescore
}
function homeAddThreePoints(){
    homescore+=3
    homeBoard.innerText=homescore
}
// next part for guest score

function guestAddPoint(){
    guestscore+=1
    guestBoard.innerText=guestscore
}
function guestAddTwoPoints(){
    guestscore+=2
    guestBoard.innerText=guestscore
}
function guestAddThreePoints(){
    guestscore+=3
    guestBoard.innerText=guestscore
}
// reset button//////////////////////////////


function resetScore(){
    homescore=0
    guestscore=0
    guestBoard.innerText=0
    homeBoard.innerText=0
}