// 2. Set the ggoal color
// 3  Update span with new color code
// 4  Make click event

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 50, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[0];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor


for (let i = 0; i < squares.length; i++) {
  // add initials colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      alert('Correct!');
    } else {
      this.style.backgroundColor = "#232323"
    }
  })
}
