function deleteUsed(array,valueUsed){
    //recorrer un valor a la vez por todo el array
    if(array.length > 0){
        for (let i = 0; i < valueUsed.length; i++) {

            for (let index = 0; index < array.length; index++) {
                if(array[index] == valueUsed[i]){
                    //eliminar el valor usado del array
                    array.splice(index,1)
                }
            }
        }
    }
    return array
}
// let alphaNoWord = deleteUsed(alphabet,split);
// console.log(alphaNoWord);

// let arregloConRepetidos = [1, 2, 3,3,1, 4, 1, 2, 2, 2, 10];
//Visita: parzibyte.me
// let sinRepetidos = arregloConRepetidos.filter(function(valor, indiceActual, arreglo) {
//     let indiceAlBuscar = arreglo.indexOf(valor);
//     if (indiceActual === indiceAlBuscar) {
//         return true;
//     } else {
//         return false;
//     }
// });



/**
if(letterNoIncluded == split.length){
                let sectionError = document.querySelector(".sectionError")
                let errorLetter = document.createElement("p");
                errorLetter.textContent = writing;
                sectionError.appendChild(errorLetter);
            }
 */
    // let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


            /**
userText.addEventListener("input",()=>{
    let alphaNoWord = deleteUsed(alphabet,split);
    noRepeatErrors(alphaNoWord)
})    
function noRepeatErrors(alphaNoWord){
    console.log(alphaNoWord);
    let sectionError = document.querySelector(".sectionError");
    for (let i = 0; i < alphaNoWord.length; i++) {
        const element = alphaNoWord[i];
        let letter = userText.value.toUpperCase();
            
        if(element == letter){
            let errorLetter = document.createElement("p");
            errorLetter.textContent = element;
            sectionError.appendChild(errorLetter);
            alphaNoWord.splice(i,1);//deberia reinicar el alphabet cada palabra
        }
    }
}
 */