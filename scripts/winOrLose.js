let see = document.querySelector(".lifes");
let particles = document.querySelector(".particles");
let emoji = document.querySelector(".party");

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
            see.classList.add("win");
            particles.classList.remove("hidden");
            emoji.classList.remove("hidden");
            see.style.fontSize = "2rem"

            setTimeout(()=>{
                playAgain()
            },3000)
        }
    }
//-------------perder------------------------
    if(lifes === 0){
        let palabra = "la palabra era "+ newWord().join("")+ " :("
        console.log(palabra)
        see.textContent = "Perdiste" + palabra;
        see.style.fontSize = "20px"
        see.classList.add("losing");
        // document.querySelector(".losing").appendChild(changePseudoElement(".losing","palabra"))

        setTimeout(()=>{
            playAgain()
        },1000)
    }
}
//cada que escoges una letra erronea pierdes una vida, si lifes es = 0, perdiste, ventana perdiste, la palabra era: ______. ejecutar playAgain.

//-------------animacion ganar----------------------

function animationWinner(where,positionX,positionY,name,duration){
    const keyFrames = document.createElement("style");

    keyFrames.textContent = "@keyframes "+ name +" { from { left: 70px; top: 0;} to { left: "+ positionX +"; top: "+ positionY +"; transform: scale(0);} }      "+ where +" {animation: "+ name +" "+ duration +" ease infinite;}"

    return keyFrames;
}

document.querySelector(".particle1").appendChild(animationWinner(".particle1","30px","-100px","moveOn1","1s"));
document.querySelector(".particle2").appendChild(animationWinner(".particle2","-100px","-200px","moveOn2","1.5s"));
document.querySelector(".particle3").appendChild(animationWinner(".particle3","10px","-70px","moveOn3","2.7s"));
document.querySelector(".particle4").appendChild(animationWinner(".particle4","-90px","-176px","moveOn4","2.5s"));
document.querySelector(".particle5").appendChild(animationWinner(".particle5","-260px","-11px","moveOn5","2.6s"));
document.querySelector(".particle6").appendChild(animationWinner(".particle6","-2px","-30px","moveOn6","1.3s"));
document.querySelector(".particle7").appendChild(animationWinner(".particle7","20px","-125px","moveOn7","1.9s"));
document.querySelector(".particle8").appendChild(animationWinner(".particle8","100px","-35px","moveOn8","2.5s"));
document.querySelector(".particle9").appendChild(animationWinner(".particle9","-200px","-71px","moveOn9","2.3s"));
document.querySelector(".particle10").appendChild(animationWinner(".particle10","40px","-90px","moveOn10","2s"));