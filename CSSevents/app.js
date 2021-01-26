// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}