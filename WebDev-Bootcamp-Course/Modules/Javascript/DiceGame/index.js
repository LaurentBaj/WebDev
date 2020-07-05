const randomNumber1 = Math.floor(Math.random() * 6) + 1; 
const randomNumber2 = Math.floor(Math.random() * 6) + 1; 

const result = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild; 

const imageSource1 = "images/dice" + randomNumber1 + ".png"; 
const imageSource2 = "images/dice" + randomNumber2 + ".png"; 

document.querySelector(".img1").setAttribute("src", imageSource1); 
document.querySelector(".img2").setAttribute("src", imageSource2); 

if(randomNumber1 > randomNumber2) {
  result.innerHTML = "Player 1 Wins!"; 
} else if(randomNumber2 > randomNumber1) {
    result.innerHTML = "Player 2 Wins!";
} else {
    result.innerHTML = "It's A Draw!";
}

