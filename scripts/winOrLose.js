let see = document.querySelector(".lifes")

function winOrLose(wrongs){
    let lifes = 10-wrongs.length;
    let correctLetter = document.querySelectorAll(".underscore");
    let correct = 0;

    for (let i = 0; i < correctLetter.length; i++) {
        let element = correctLetter[i];
        if(element.textContent != ""){
            correct++
        }
        if(correct == correctLetter.length && lifes >= 1){
            console.log("ganaste");
        }
    }
//-------------perder------------------------
    see.textContent = lifes;
    if(lifes === 0){
        console.log("perdiste");
    }
}
//cada que escoges una letra erronea pierdes una vida, si lifes es = 0, perdiste, ventana perdiste, la palabra era: ______. ejecutar playAgain.