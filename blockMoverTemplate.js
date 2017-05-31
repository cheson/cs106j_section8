// code modeled from: https://www.w3schools.com/js/js_htmldom_animate.asp

/*
 * Called after the go button is pressed.
 * Starts moving the blocks by having them
 * move forward random steps at set intervals.
 * Stops when the first block reaches the end 
 * end of the screen and gives the winner a crown.
 */
function moveBlocks() {
  /* FILL IN HERE
   * 
   * Something you may need but have not seen yet in this class:
   * var elem = document.getElementById("blue");
   * ^ similar to how we used gw.getElementAt(x, y) in SJS
   * elem.style.left = '10px';
   * ^ This property specifies the left position of the element 
   * including padding, scrollbar, border and margin.
   */
}

/*
 * Calculates the full width of an element, including all
 * the margins, borders, and paddings on the element.
 * https://stackoverflow.com/questions/23268784/how-to-get-element-width-height-with-margin-padding-border-in-native-javascrip
 */
function calculateBlockWidth(element) {
	var style = element.currentStyle || window.getComputedStyle(element);
	var width = element.offsetWidth;
    var margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    var padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    var border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    return width + margin - padding + border;
}

/*
 * Adds a crown to the winning block.
 * Blocks can accumulate crowns.
 */
function addCrown(winner) {
	var elem = document.createElement("img");
    elem.setAttribute("src", "crown.png");
    elem.setAttribute("height", "30");
    elem.setAttribute("width", "30");
    winner.appendChild(elem);
}

/*
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}