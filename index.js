$("button").click(function() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});

$(document).keypress(function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var hihat = new Audio("sounds/hihat.mp3");
      hihat.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-4.mp3");
      tom3.play();
      break;

    case "k":
      var kick = new Audio("sounds/bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {
  var activeButton = $("." + currentKey);
  $(activeButton).addClass("pressed");
  setTimeout(function() {
    $(activeButton).removeClass("pressed");
  }, 150);
}
