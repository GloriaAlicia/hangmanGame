let color1 = "#d9bafe";
let color2 = "#feb8b8";
let color3 = "#f2bdf3";
let color4 = "#a4e2fb";

function changeColor(element){
    element.style.backgroundImage = "radial-gradient(farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color1 +",rgba(0,0,0,0)), radial-gradient(farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color2 +",rgba(0,0,0,0)),    radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color3 +" 0%,rgba(0,0,0,0)60%),radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color4 +" 0%,rgba(0,0,0,0)60%)"
}
function randomNumber(){
    let min = 0;
    let max = 100;
    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    randomNumber += "%"
    return randomNumber;
}