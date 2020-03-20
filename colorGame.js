// 2. Set the goal color
// 3  Update span with new color code
// 4  Make click event
// 5  Pick a random color
// 6  Generate 6 random colors
// 7  Add easy and hard buttons
// 8  Make 3 and 6 colors selectiob

var numberOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function () {
  //generate new colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //change colorDisplay to match new picked colros
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index];
  }
  h1.style.backgroundColor = "#232323";

})

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
      resetButton.textContent = "Play again!"


    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;

  }
}

function pickColor() {
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
