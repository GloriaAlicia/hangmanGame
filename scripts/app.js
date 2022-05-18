//----------------------escoger palabra al azar--------------------------
    let words = ["FELIZ","DIFICIL","FACIL","PERSISTENCIA","JAVASCRIPT","GUARDAR","AZAR","ARBOL","PROGRAMACION","INGENIO","ASOMBRO","DIBUJAR","ETIQUETA","CASCADA","CORRECTO","INCORRECTO","FUNCION","CLASES","OBJETO","APRENDER","ESFUERZO","PACIENCIA","SATISFACCION","ANALISIS","ALURA","REEMPLAZAR","NUMEROS","DATOS","PERFUME"];
    
let buttonNewWord = document.getElementById("newWord");
buttonNewWord.addEventListener("click",playAgain);
let gameBoard = document.getElementById("gameBoard");
let userText = document.getElementById("userText");
             
function newWord(){
    let currentWord = words[Math.floor(Math.random()*words.length)];
    console.log(currentWord);
    let split = Array.from(currentWord);
    return split
}
let split = newWord();
let wrongs = [];

function playAgain(){
    split = newWord();
    console.log(split);
    dynamicWord(split);
    let antiqueLabel = document.querySelector("label");
    if(antiqueLabel != null){
        antiqueLabel.remove();
    }
    gameBoard.appendChild(dynamicWord(split));
    let antiqueErrors = document.querySelectorAll(".sectionError p");
    antiqueErrors.forEach(element => {
        element.remove();
    })
    let wrongs = [];
    userText.oninput = (event)=>{
        event.preventDefault();
        showLetters(split,wrongs);
    }
}
//-----------------------subir palabra----------------------------------
    
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
gameBoard.appendChild(dynamicWord(split));
      
//-------------------------mostrar letras correctas--------------------------------
userText.oninput = (event)=>{
    event.preventDefault();
    showLetters(split,wrongs);
}
    
function showLetters(split,wrongs){
    let writing = userText.value.toUpperCase();
    let actualId = 0;

    let letterNoIncluded = 0;
    let sectionError = document.querySelector(".sectionError");

    for (let i = 0; i < split.length; i++) {
        let actualLetter = split[i];

        if(writing == actualLetter){
            let sumLetter = document.getElementById(actualId);
            sumLetter.textContent = actualLetter;
        } else {
            letterNoIncluded++
            if(letterNoIncluded == split.length && (/[A-Z]/).test(writing) && !wrongs.includes(writing)){
                let errorLetter = document.createElement("p");
                errorLetter.textContent = writing;
                sectionError.appendChild(errorLetter);
                wrongs.push(writing);
            }
        }
        userText.value = "";
        actualId++
    }
}