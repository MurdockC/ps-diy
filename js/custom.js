//openess functions - reduce down to case or if statement
function openess10() {
  document.getElementById('shade').style.opacity= '.7';
  document.getElementById('opac').innerHTML='10%';
}

function openess5() {
  document.getElementById('shade').style.opacity= '.78';
  document.getElementById('opac').innerHTML='5%';
}

function openess3() {
  document.getElementById('shade').style.opacity= '.85';
  document.getElementById('opac').innerHTML='3%';
}

function openess1() {
  document.getElementById('shade').style.opacity= '.9';
  document.getElementById('opac').innerHTML='1%';
}

function openess0() {
  document.getElementById('shade').style.opacity= '1';
  document.getElementById('opac').innerHTML='0%';
}


// Reference the color shape that was drawn over the image
const overlay = document.getElementById("shade-color-shape");
const shaderolloverlay = document.getElementById("roll-color-shape");
const cassetteoverlay = document.getElementById("cassette-color-shape");
const specfColor = document.getElementById("fcolor");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  let fcolor = e.target.getAttribute("value");
  // set the hex color
  overlay.style.fill = hex;
  shaderolloverlay.style.fill = hex;
  cassetteoverlay.style.fill = hex;
  specfColor.innerHTML = fcolor ;
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
const rollhardwareone = document.getElementById("roll-hardware-shape-one");
const rollhardwaretwo = document.getElementById("roll-hardware-shape-two");
const spechColor = document.getElementById("hcolor");

// Click on a color

var roll = document.getElementsByClassName("motor-color");
for (var i = 0; i < mot.length; i++) {
  mot[i].onclick = changeRollColor;
}

function changeRollColor(e) {
  // get the hex color
  let hexcolor = e.target.getAttribute("data-hex");
  let hcolor = e.target.getAttribute("value");
  // set the hex color
  rolloverlay.style.fill = hexcolor;
  rollhardwareone.style.fill = hexcolor;
  rollhardwaretwo.style.fill = hexcolor;
  spechColor.innerHTML = hcolor;
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

function styleSwap() {
  document.getElementsByClassName("cassette")[0].style.display = "block";
  document.getElementsByClassName("cassette")[1].style.display = "block";
  document.getElementById('hstyle').innerHTML='Cassette';
}
function styleSwapback() {
  document.getElementsByClassName("cassette")[0].style.display = "none";
  document.getElementsByClassName("cassette")[1].style.display = "none";
  document.getElementById('hstyle').innerHTML='Open Roll';
}
