let words = ["FELIZ","DIFICIL","FACIL","PERSISTENCIA","JAVASCRIPT","GUARDAR","AZAR","ARBOL","RETO","INGENIO","ASOMBRO","JUEGO","ETIQUETA","CASCADA","CORRECTO","INCORRECTO","FUNCION","CLASES","OBJETO","HERENCIA","ESFUERZO","PACIENCIA","SATISFACCION","ANALISIS","ALURA"];

let gameBoard = document.getElementById("gameBoard");
let currentWord = words[Math.floor(Math.random()*words.length)];
let split = Array.from(currentWord);

function dynamicWord(){
    let letters = document.createElement("label");
    letters.classList.add("currentWord")
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
console.log(currentWord)//////////////////////////1
gameBoard.appendChild(dynamicWord());


let userText = document.getElementById("userText");
userText.addEventListener("input",()=>{
    let writing = userText.value;
    let rangeAZ = new RegExp(/[A-Z]/g)
    
    if(rangeAZ.test(writing)){
        console.log("es una letra mayuscula");
    } else {
        alert("texto incorrecto");
    }


    if(writing.length > 0){
        let actualId = 0;
        for (let i = 0; i < split.length; i++) {
            let actualLetter = split[i];
            let exp = new RegExp(writing);//MAYUSCULAS
            
            console.log(exp.test(actualLetter))
            if(exp.test(actualLetter)){
                let sumLetter = document.getElementById(actualId);
                sumLetter.textContent = actualLetter;
            } else {
            }
            userText.value = "";
            actualId++
        }
    }
})