// Adding event-listener to all buttons
const buttons =  document.querySelectorAll("button"); 
const allBtn = buttons.length; 

for(let i = 0; i < allBtn; i++) {
    buttons[i].addEventListener("click", function() {
    const btnInnerHTML = this.innerHTML; 
    makeSound(btnInnerHTML);
    btnAnimation(btnInnerHTML); 
    }); 
}


addEventListener("keypress", function(event) {
    makeSound(event.key); 
    btnAnimation(event.key);
}); 


function makeSound(key) {
        
    switch (key) {
        case "w":
            const s1 = new Audio("sounds/tom-1.mp3"); 
            s1.play();  
        break; 
        case "a":
            const s2 = new Audio("sounds/tom-2.mp3"); 
            s2.play(); 
        break; 
        case "s":
            const s3 = new Audio("sounds/tom-3.mp3"); 
            s3.play();  
        break; 
        case "d": 
            const s4 = new Audio("sounds/tom-4.mp3"); 
            s4.play(); 
        break; 
        case "j":
            const s5 = new Audio("sounds/snare.mp3"); 
            s5.play();  
        break; 
        case "k": 
            const s6 = new Audio("sounds/crash.mp3"); 
            s6.play(); 
        break; 
        case "l": 
            const s7 = new Audio("sounds/kick-bass.mp3"); 
            s7.play(); 
        break; 
        
        default: alert("The key you pressed is not a part of the drum kit"); 
    }

}


function btnAnimation(currentKey) {
   const activeBtn = document.querySelector("." + currentKey); 
   activeBtn.classList.add("pressed"); 
   setTimeout(function() {
    activeBtn.classList.remove("pressed");
   }, 100);
}

/*
buttons[i].addEventListener("click",function()) {
    alert("I got clicked"); 
}
*/ 
