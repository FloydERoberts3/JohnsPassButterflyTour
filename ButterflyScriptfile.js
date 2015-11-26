/**
 * @author DPR
 * 
 */

var bsl = prompt("Type away o irrelevant one","butt");
alert("you are here putz");


// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 712;
canvas.height = 480;
document.body.appendChild(canvas);

 
      // Background image
          var bgReady = false;
          var bgImage = new Image();
          bgImage.onload = function () {
          bgReady = true;
           };
          bgImage.src = "BGDoubleFlower.png";

      // Butterfly image
          var butterflyReady = false;
          var butterflyImage = new Image();
          butterflyImage.onload = function () {
          butterflyReady = true;
           };
          butterflyImage.src = "butterfly.png";
          
      // flower image
          var flowerReady = false;
          var flowerImage = new Image();
          flowerImage.onload = function () {
          flowerReady = true;
           };
          flowerImage.src = "flower.png";
  
          // Game objects
		var butterfly = {
			speed: 156, // movement in pixels per second
			x: 0,
			y: 0
		};
		var flower = {
			speed: 5,
			x: 0,
			y: 0
		};

		// Reset the game and postition butterfly randomly when the butterfly lands on the flower
		var reset = function () {
			butterfly.x = 32 + (Math.random() * (canvas.width - 64));
			butterfly.y = 32 + (Math.random() * (canvas.width - 64));
		};

		var update = function (modifier) {
			if (38 in keysDown) { // P for polinate pressed -now up arrow
				butterfly.y = flower.y;
				butterfly.x -= flower.x;
			}
		if (40 in keysDown) { // F for flutter - now down arrow
			butterfly.y += butterfly.speed * Math.random();
			butterfly.x += butterfly.speed * Math.random();
		}

	// Are they touching?
	if (
		butterfly.x <= (flower.x + 32)
		&& flower.x <= (butterfly.x + 32)
		&& butterfly.y <= (flower.y + 32)
		&& flower.y <= (butterfly.y + 32)
	) {
		//wait 5 seconds then reset
		reset();
	}
	
	// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (butterflyReady) {
		ctx.drawImage(butterflyImage, butterfly.x, butterfly.y);
	}

	if (flowerReady) {
		ctx.drawImage(flowerImage, flower.x, flower.y);
	}
};
		var main = function () {
			var now = Date.now();
			var delta = now - then;
	
			update(delta / 1000);
			render();

			then = now;
		};
	
		// Let's play this game!
		reset();
		var then = Date.now();
		setInterval(main, 1); // Execute as fast as possible
*/
