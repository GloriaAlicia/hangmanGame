let color1 = "#fac17280";
let color2 = "#fac172"; // --light:#fac172;
let color3 = "#ee83758e"; //--second-light:#ee83758e;
let color4 = color1


function changeColor(element){
    element.style.backgroundImage = "radial-gradient(farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color1 +" 0%,rgba(0,0,0,0)35%), radial-gradient(farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color2 +" 0%,rgba(0,0,0,0)50%),    radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color3 +" 0%,rgba(0,0,0,0)100%),radial-gradient(circle farthest-side at "+ randomNumber() +" "+ randomNumber() +","+ color4 +" 0%,rgba(0,0,0,0)65%)"
}
function randomNumber(){
    let min = 0;
    let max = 100;
    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    randomNumber += "%"
    return randomNumber;
}