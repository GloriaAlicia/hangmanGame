let see = document.querySelector(".lifes");

function winOrLose(wrongs){
    let lifes = 10-wrongs.length;
    let correctLetter = document.querySelectorAll(".underscore");
    let correct = 0;

    for (let i = 0; i < correctLetter.length; i++) {
        see.textContent = lifes;
        let element = correctLetter[i];
        if(element.textContent != ""){
            correct++
        }
        if(correct == correctLetter.length && lifes >= 1){
            see.textContent = "Ganaste";
            setTimeout(()=>{
                playAgain()
            },1000)
        }
    }
//-------------perder------------------------
    if(lifes === 0){
        see.textContent = "Perdiste";
        setTimeout(()=>{
            playAgain()
        },1000)
    }
}
//cada que escoges una letra erronea pierdes una vida, si lifes es = 0, perdiste, ventana perdiste, la palabra era: ______. ejecutar playAgain.