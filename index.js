var numbersOfButtons=document.querySelectorAll(".drum");

for(var i=0;i<numbersOfButtons.length;i++)

{

numbersOfButtons[i].addEventListener("click",function (){

switch(this.innerHTML)

{

case "w":

{

var audio = new Audio('sounds/tom-1.mp3');

audio.play();

}break;

case "a":

{

var  audio= new Audio('sounds/tom-2.mp3');

audio.play();

}break;

case "s":

{

var audio = new Audio('sounds/tom-3.mp3');

audio.play();

}break;

case "d":

{

var audio = new Audio('sounds/tom-4.mp3');

audio.play();

}break;

case "j" :

{

var audio = new Audio('sounds/snare.mp3');

audio.play();

}break;

case "k":

{

var audio = new Audio('sounds/crash.mp3');

audio.play();

}break;

case "l":

{

var audio = new Audio('sounds/kick-bass.mp3');

audio.play();

}break;

default:console.log(this.innerHTML);

} })}

document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){

            case "w":
             var tom1=new Audio('sounds\tom-1.mp3');
              tom1.play();
             break;

            case "a":
             var tom2=new Audio('sounds\tom-2.mp3');
              tom2.play();
             break;

            case "s":
             var tom3=new Audio('sounds\tom-3.mp3');
              tom3.play();
             break;

            case "d":
             var tom4=new Audio('sounds\tom-4.mp3');
              tom4.play();
             break;

            case "j":
             var snare=new Audio('sounds\snare.mp3');
              snare.play();
             break;

            case "k":
             var crash=new Audio('sounds\crash.mp3');
              crash.play();
             break;

            case "l":
             var kick=new Audio('sounds\kick-bass.mp3');
              kick.play();
             break;

            default:console.log(buttonInnerHTML);
    }
}

function buttonAnimation(cuurentKey){
    var activeButton=document.querySelector("."+cuurentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
