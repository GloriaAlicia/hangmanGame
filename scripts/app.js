//----------------------escoger palabra al azar--------------------------
let buttonNewWord = document.getElementById("newWord");
buttonNewWord.addEventListener("click",playAgain);
let userText = document.getElementById("userText");
         
function newWord(words){
    let currentWord = words[Math.floor(Math.random()*words.length)];
    let split = Array.from(currentWord);
    if(words.length == 0){
        showAlerts("Agrega más palabras para continuar");
        setTimeout(()=>{
            window.location.href = "../index.html";
        },2000)
    }
    return split;
}

function playAgain(){
    let prewords = ["PALABRA","MADERA","PYTHON","ESTANDAR","DIFICIL","MENOS","SABOR"];
    let words = JSON.parse(localStorage.getItem("allWords")) || prewords;

    let split = newWord(words);
    let antiqueLabel = document.querySelector("label");
    if(antiqueLabel != null){
        antiqueLabel.remove();
    }
    document.getElementById("gameBoard").appendChild(dynamicWord(split));
    let antiqueErrors = document.querySelectorAll(".sectionError p");
    antiqueErrors.forEach(element => {
        element.remove();
    })
    document.getElementById("userText").disabled = false;
    let wrongs = [];
    userText.oninput = (event)=>{
        event.preventDefault();
        showLetters(split,wrongs);
        winOrLose(wrongs,words,split);
    }
    see.textContent = "¿Empezamos?";
    see.classList.remove("win");
    particles.classList.add("hidden");
    emoji.classList.add("hidden");
    see.classList.remove("losing");

    let numberClue = JSON.parse(localStorage.getItem("numberOfClues")) || 1;
    clue(split,numberClue);
    //----------muñeco-------------
    document.getElementById("first").style.display = "none";
    document.querySelector(".second").style.display = "none";
    document.querySelector(".third").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
    document.querySelector(".seven").style.display = "none";
    document.querySelector(".eight").style.display = "none";
    document.querySelector(".nine").style.display = "none";
    document.querySelector(".ten").style.display = "none";
}
playAgain()
//----------------------mostrar palabra en pantalla----------------------------------
    
function dynamicWord(split){
    let letters = document.createElement("label");
    letters.classList.add("currentWord");
    letters.setAttribute("for","userText");
    
    let counter = 0;
    for (let i = 0; i < split.length; i++) {
            let letter = document.createElement("span");
            letter.classList.add("underscore");
            letter.setAttribute("id",counter);
            letters.appendChild(letter);
            counter++
    }
        return letters;
}
      
//------------------mostrar letras correctas e incorrectas---------------------------
function showLetters(split,wrongs){
    let writing = userText.value.toUpperCase();
    let actualId = 0;
    let letterNoIncluded = 0;

    for (let i = 0; i < split.length; i++) {
        let actualLetter = split[i];

        if(writing == actualLetter){
            let sumLetter = document.getElementById(actualId);
            sumLetter.textContent = actualLetter;
        } else {
            letterNoIncluded++
            if(letterNoIncluded == split.length && (/[A-Z]/).test(writing) && !wrongs.includes(writing)){
                wrongs.push(writing);
                let errorLetter = document.createElement("p");
                errorLetter.textContent = writing;
                document.querySelector(".sectionError").appendChild(errorLetter);
            }
        }
        userText.value = "";
        actualId++
    }
}
//------------------pista---------------------
function clue(split,number){
    let actualId = 0;
    let clues = [];
    while (clues.length < number) {
        let randomLetter = split[Math.floor(Math.random()*split.length)];
        if(!clues.includes(randomLetter)){
            clues.push(randomLetter);
        }
    }
    for (let i = 0; i < split.length; i++) {
        let actualLetter = split[i];
        for (let i = 0; i < clues.length; i++) {
            const everyClue = clues[i];
            if(everyClue == actualLetter){
                let sumLetter = document.getElementById(actualId);
                sumLetter.textContent = actualLetter;
            }
        }
        actualId++
    }
}