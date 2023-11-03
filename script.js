document.addEventListener("DOMContentLoaded", function(){
  var output = document.getElementById("output");
  var userInput = document.getElementById("userInput");

  // learned from https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
  userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      generateCuisine();
    }
  });

function generateCuisine(){
  var cuisines = ["Italian", "Mexican", "Chinese", "Japanese", "Indian", "Thai", "Greek", "French", "Spanish", "Korean", "Vietnamese"];
  var currentInputText = userInput.value;
  var randomCuisineIndex = Math.floor(Math.random()*cuisines.length);
  output.innerText = currentInputText + ", the cuisine you will eat today is " + cuisines[randomCuisineIndex] + ".";
  restyle();
}

function restyle() {
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  output.style.color = outputColorString;
  
  var randomFontSize = Math.floor(Math.random() * 30) + 10;
  output.style.fontSize = randomFontSize + "px";

  var fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact"];
  var randomFontIndex = Math.floor(Math.random() * fonts.length);
  output.style.fontFamily = fonts[randomFontIndex];
}
});