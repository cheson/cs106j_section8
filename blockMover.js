// code modeled from: https://www.w3schools.com/js/js_htmldom_animate.asp

/*
 * Called after the go button is pressed.
 * Starts moving the blocks by having them
 * move forward random steps at set intervals.
 * Stops when the first block reaches the end 
 * end of the screen and gives the winner a crown.
 */
function moveBlocks() {
  var finishLine = screen.width;
  var blockOffsets = [0, 0, 0, 0, 0];
  var blocks = ["blue", "yellow", "red", "purple", "green"];
  var id = setInterval(frame, 5);
  function frame() {
    for (var i = 0; i < blocks.length; i++) {
      var currBlock = blocks[i];
      var elem = document.getElementById(currBlock); 
      //150 is width of block and margins (needs work to get this precise)
      if (blockOffsets[i] + 150 >= finishLine) {
      	addCrown(elem);
      	clearInterval(id);
      } else {
      	var randomStep = getRandomInt(0, 4);
      	blockOffsets[i] += randomStep
        elem.style.left = blockOffsets[i] + 'px'; 
      }
    } 	
  }
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