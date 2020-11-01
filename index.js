
var rangeOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < rangeOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttn = this.innerHTML;
    makeSound(buttn);
    buttonAnimation(buttn);
  });
}


document.addEventListener("keypress", function(event) {
  var key=event.key
  makeSound(key);
  buttonAnimation(key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio('sounds/tom-3.mp3');
      sound.play();
      break;

    case "d":
      var sound = new Audio('sounds/tom-4.mp3');
      sound.play();
      break;

    case "j":
      var sound = new Audio('sounds/snare.mp3');
      sound.play();
      break;

    case "k":
      var sound = new Audio('sounds/crash.mp3');
      sound.play();
      break;

    case "l":
      var sound = new Audio('sounds/kick-bass.mp3');
      sound.play();
      break;
    default: console.log(key);
  }
}


function buttonAnimation(key) {
  var activeBtn = document.querySelector("." +key);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 140);

}
