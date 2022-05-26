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
        }
    }
//-------------perder------------------------
    if(lifes == 0){
        // let palabra = "con "+ newWord().join("");
        see.textContent = "Perdiste"
        setTimeout(()=>{
            playAgain()
        },1000)
    }
//-------------muñeco----------------------
    switch (lifes) {
        case 9:
            document.getElementById("first").style.display = "block";
        break;
        case 8:
            document.querySelector(".second").style.display = "block";
        break;
        case 7:
            document.querySelector(".third").style.display = "block";
        break;
        case 6:
            document.querySelector(".four").style.display = "block";
        break;
        case 5:
            document.querySelector(".five").style.display = "block";
        break;
        case 4:
            document.querySelector(".six").style.display = "block";
        break;
        case 3:
            document.querySelector(".seven").style.display = "block";
        break;
        case 2:
            document.querySelector(".eight").style.display = "block";
        break;
        case 1:
            document.querySelector(".nine").style.display = "block";
        break;
        case 0:
            document.querySelector(".ten").style.display = "block";
        break;
    }
}
//-------------animacion ganar----------------------
function animationWinner(where,positionX,positionY,name,duration){
    const keyFrames = document.createElement("style");

    keyFrames.textContent = "@keyframes "+ name +" { from { left: 70px; top: 0;} to { left: "+ positionX +"; top: "+ positionY +"; transform: scale(0);} }      "+ where +" {animation: "+ name +" "+ duration +" ease infinite;}"

    return keyFrames;
}