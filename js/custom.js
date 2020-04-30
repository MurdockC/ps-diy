//openess functions - reduce down to case or if statement
function openess10() {
  document.getElementById('shade').style.opacity= '.7';
}

function openess5() {
  document.getElementById('shade').style.opacity= '.78';
}

function openess3() {
  document.getElementById('shade').style.opacity= '.85';
}

function openess1() {
  document.getElementById('shade').style.opacity= '.9';
}

function openess0() {
  document.getElementById('shade').style.opacity= '1';
}


// Reference the color shape that was drawn over the image
const overlay = document.getElementById("shade-color-shape");
const shaderolloverlay = document.getElementById("roll-color-shape");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
  shaderolloverlay.style.fill = hex;
}


// Reference the color shape that was drawn over the image
const motoroverlay = document.getElementById("motor-color-shape");
const motoroverlaytwo = document.getElementById("motor-color-shapetwo");

// Click on a color

var mot = document.getElementsByClassName("motor-color");
for (var i = 0; i < mot.length; i++) {
  mot[i].onclick = changeMotorColor;
}

function changeMotorColor(e) {
  // get the hex color
  let hexcolor = e.target.getAttribute("data-hex");
  // set the hex color
  motoroverlay.style.fill = hexcolor;
  motoroverlaytwo.style.fill = hexcolor;
}





// Reference the color shape that was drawn over the image
const rolloverlay = document.getElementById("hardware-color-shape");
const hardwareone = document.getElementById("motor-color-shape");
const hardwaretwo = document.getElementById("motor-color-shapetwo");

// Click on a color

var roll = document.getElementsByClassName("motor-color");
for (var i = 0; i < mot.length; i++) {
  mot[i].onclick = changeRollColor;
}

function changeRollColor(e) {
  // get the hex color
  let hexcolor = e.target.getAttribute("data-hex");
  // set the hex color
  rolloverlay.style.fill = hexcolor;
  hardwareone.style.fill = hexcolor;
  hardwaretwo.style.fill = hexcolor;
}



// show/hide side view for hardware

function toggleImages() {
  document.getElementsByClassName("hover")[0].style.display = "block";
  document.getElementsByClassName("hover-hide")[0].style.display = "none";
}

function toggleImagesoff() {
  document.getElementsByClassName("hover")[0].style.display = "none";
  document.getElementsByClassName("hover-hide")[0].style.display = "block";
}
