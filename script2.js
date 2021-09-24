var randomNo1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNo1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNo2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="🚩player 1 win";
}
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="player 2 win🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw !";
}