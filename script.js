document.addEventListener("DOMContentLoaded", function(){
  var output = document.getElementById("output");
  var userInput = document.getElementById("userInput");

  // learned from https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
  userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      generate();
    }
  });

function generate(){
  var cuisines = ["Italian", "Mexican", "Chinese", "Japanese", "Indian", "Thai", "Greek", "French", "Spanish", "Korean", "Vietnamese"];
  var input = userInput.value;
  var cuisineIndex = Math.floor(Math.random()*cuisines.length);
  output.innerText = input + ", the cuisine you will eat today is " + cuisines[cuisineIndex] + ".";
  restyle();
}

function restyle() {
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  output.style.color = randomColor;
  
  var randomFontSize = Math.floor(Math.random() * 30) + 10;
  output.style.fontSize = randomFontSize + "px";

  var fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact"];
  var randomFontIndex = Math.floor(Math.random() * fonts.length);
  output.style.fontFamily = fonts[randomFontIndex];
}
});