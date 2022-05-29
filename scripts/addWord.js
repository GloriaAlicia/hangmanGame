let addWord = document.getElementById("addWord");
addWord.addEventListener("click",()=>{
    document.getElementById("newWord").classList.remove("hidden");
})

let cancel = document.getElementById("cancel");
cancel.addEventListener("click",()=>{
    document.getElementById("newWord").classList.add("hidden");
    document.querySelector("form").reset();
})
let word = document.getElementById("word");
/******************funcionamiento en eventos click e input */
let save = document.getElementById("add");
save.addEventListener("click",(event)=>{
    let text = document.getElementById("word").value;
    event.preventDefault()
    saveWords(text);
    document.getElementById("visualWarning").textContent = "";
})
/*********************************escribiendo*/
word.addEventListener("input",(event)=>{
    let text = document.getElementById("word").value;
    special(event,text)
    
})
/******************modos de juego**************** */
let newGame = document.querySelector(".newGame");
newGame.addEventListener("click",()=>{
    document.getElementById("gameModes").classList.remove("hidden");
})
let saveMode = document.getElementById("saveMode");
saveMode.addEventListener("click",()=>{
    if(document.getElementById("hard").checked == true){
        localStorage.setItem("numberOfClues",JSON.stringify(0));
    }
    if(document.getElementById("normal").checked == true){
        localStorage.setItem("numberOfClues",JSON.stringify(1));
    }
    if(document.getElementById("easy").checked == true){
        localStorage.setItem("numberOfClues",JSON.stringify(3));
    }
})

let cancelPlay = document.getElementById("cancelPlay");
cancelPlay.addEventListener("click",()=>{
    document.getElementById("gameModes").classList.add("hidden");
})
/******************escribiendo**************** */

function special(event,text){
    event.preventDefault()
    let writing = Array.from(text);

    let charcteres = "1234567890ÁÉÍÓÚáéíóú!@#$^&%*()+=-[]\//{}|:<>?,.";
    for (let i = 0; i < charcteres.length; i++) {
        let element = charcteres[i];
        if(element == writing[writing.length-1]){
            let wrongs = document.getElementById("visualWarning");
            wrongs.textContent = "elimina el carácter " + element;
        }
    }
    if((text.length == 0) || (text.value === " ")){
        document.getElementById("visualWarning").textContent = "";
    }
    
}
/******************guardando**************** */
let prewords = ["PALABRA","MADERA","PYTHON","ESTANDAR","DIFICIL","MENOS","SABOR"];
let words = JSON.parse(localStorage.getItem("allWords")) || prewords;

function saveWords(text){
    if((text.length <= 5)){
        showAlerts("Deben ser más de 5 letras");
    }
    if((/[A-Z]/g).test(text) && !(/[^A-Z]/g).test(text) && text.length >= 5){
        showAlerts("Palabra guardada exitosamente")
        saveLocalStorage(text.toUpperCase());
        document.querySelector("form").reset();
    }
    if((/[^A-Z]/g).test(text)) {
        showAlerts("solo mayusculas, sin carácteres especiales");
        document.querySelector("form").reset();
    }
}
function saveLocalStorage(text){
    let allWords = words;
    allWords.push(text);
    let saveOneMore = JSON.stringify(allWords);
    localStorage.setItem("allWords",saveOneMore);
}