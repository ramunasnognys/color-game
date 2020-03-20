// 2. Set the ggoal color
// 3  Update span with new color code
// 4  Make click event
// 5  Pick a random color
// 6  Generate 6 random colors

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor


for (let i = 0; i < squares.length; i++) {
  // add initials colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = pickedColor;

    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;

  } 
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// 6
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for (let index = 0; index < num; index++) {
    //get random color adn push into the array
    arr.push(randomColor());
    
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 -255
  var r = Math.floor(Math.random() * 256) 
  //pick a "green" from 0 -255
  var g = Math.floor(Math.random() * 256) 
  //pick a "blue" from 0 -255
  var b = Math.floor(Math.random() * 256) 
  "rgb(r,g,b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
