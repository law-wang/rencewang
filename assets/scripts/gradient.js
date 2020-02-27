var newHue1;
var newHue2;

var currentHue1;
var currentHue2;

var hueDiff1;
var hueDiff2;

var incrementer1 = 0;
var incrementer2 = 0;

var counter = 0;
var iterations = 200;

function setNewColor() {
  
  var bodyStyle = getComputedStyle(document.body);

  currentHue1 = Number(bodyStyle.getPropertyValue("--hue1"));
  currentHue2 = Number(bodyStyle.getPropertyValue("--hue2"));

  newHue1 = getRandomNumber(0, 360);
  newHue2 = getRandomNumber(0, 360);

  hueDiff1 = newHue1 - currentHue1;
  hueDiff2 = newHue2 - currentHue2;

  incrementer1 = hueDiff1 / iterations;
  incrementer2 = hueDiff2 / iterations;
}

function animate() {

  if (counter == 0) {
    setNewColor();
  }

  counter++;

  currentHue1 += incrementer1;
  currentHue2 += incrementer2;

  if (counter == iterations) {
    counter = 0;
  }

  document.body.style.setProperty("--hue1", currentHue1);
  document.body.style.setProperty("--hue2", currentHue2);

  requestAnimationFrame(animate);
}

animate();

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
