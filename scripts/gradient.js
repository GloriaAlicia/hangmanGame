let color1 = "#fac17280";
let color2 = "#fac172"; // --light:#fac172;
let color3 = "#ee83758e"; //--second-light:#ee83758e;
let color4 = color1


function changeColor(element){
    element.style.backgroundImage = "radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color1 +" 0%,rgba(0,0,0,0)35%), radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color2 +" 0%,rgba(0,0,0,0)50%),    radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color3 +" 0%,rgba(0,0,0,0)100%),radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color4 +" 0%,rgba(0,0,0,0)65%)"
    element.style.backgroundRepeat = "no-repeat";
}
function randomNumber(min,max,unit){
    let minNumber = min;
    let maxNumber = max;
    let randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
    randomNumber += unit
    return randomNumber;
}