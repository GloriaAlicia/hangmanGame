let addWord = document.getElementById("addWord");
addWord.addEventListener("click",()=>{
    document.querySelector(".windowModal").classList.remove("hidden");
})

let cancel = document.getElementById("cancel");
cancel.addEventListener("click",()=>{
    document.querySelector(".windowModal").classList.add("hidden");
    document.querySelector("form").reset();
})
let word = document.getElementById("word");
/******************listeners */
let save = document.getElementById("add");
save.addEventListener("click",(event)=>{
    let text = document.getElementById("word").value;
    event.preventDefault()
    saveWords(text);
    document.getElementById("visualWarning").textContent = "";
})
word.addEventListener("input",(event)=>{
    let text = document.getElementById("word").value;
    special(event,text)
    
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
    if((/[A-Z]/g).test(text) || (text.length == 0) || (text.value === " ")){
        document.getElementById("visualWarning").textContent = "";
    }
    
}
/******************guardando**************** */
function saveWords(text){
    if((text.length == 0) || (word.value === " ")){
        let contentText = "Agregue un texto";
        showAlerts(contentText);
    }
    if((/[A-Z]/g).test(text) && !(/[^A-Z]/g).test(text)){
        let saving = "Guardado";
        showAlerts(saving);

        words.push(text.toUpperCase());
        document.querySelector(".windowModal").classList.add("hidden");
        document.querySelector("form").reset();
    } 
    if((/[^A-Z]/g).test(text)) {
        let only = "solo letras mayusculas, sin acentos o carácteres especiales";
        showAlerts(only);
        document.querySelector("form").reset();
    }
}
/******************alerts****************************/
function showAlerts(textToEdit){
    let saveAlerts = document.querySelector(".alerts");
    saveAlerts.classList.remove("hidden");
    changeColor(saveAlerts);
    let color = document.getElementById("visualAlerts");
    color.textContent = textToEdit;
    saveAlerts.classList.add("show");

    setTimeout(()=>{
        saveAlerts.classList.add("hidden");
    },1000)
}