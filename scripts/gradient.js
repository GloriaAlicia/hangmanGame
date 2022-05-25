let color2 = "#50bfc8";//correct
let color1 = "#90fceac0"; // --button-save-modal
let color3 = "#50bec86e"; //--light-correct:#ee83758e;
let color4 = color3

function changeColor(element){
    element.style.backgroundImage = "radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color1 +" 0%,rgba(0,0,0,0)35%), radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color2 +" 0%,rgba(0,0,0,0)50%),    radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color3 +" 0%,rgba(0,0,0,0)100%),radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color4 +" 0%,rgba(0,0,0,0)100%)"
    element.style.backgroundRepeat = "no-repeat";
}
function randomNumber(min,max,unit){
    let minNumber = min;
    let maxNumber = max;
    let randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
    randomNumber += unit
    return randomNumber;
}