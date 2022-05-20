var randonNumber1;

randonNumber1 = Math.floor(Math.random(randonNumber1)*6) + 1;

var randomDice = "dice"+randonNumber1+".png";
var randomImageSource = "images/"+randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randonNumber2;

randonNumber2 = Math.floor(Math.random(randonNumber2)*6) + 1;

var randomDice2 = "dice"+randonNumber2+".png";
var randomImageSource2 = "images/"+randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randonNumber1 > randonNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randonNumber1 < randonNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
