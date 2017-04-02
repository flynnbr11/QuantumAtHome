// example of how to implement animation using a canvas object, with love from Joe

var animatedImage;

function StartAnimationTest() {
	AnimationTest.start();
	
	animatedImage = new AnimatedImage(50, 100, 5, "animtest.png", 5);
}

var AnimationTest = {
	start : function() {
		// this controls the rate at which the animated imaged cycles through frames
		// the second parameter is the time in milliseconds
		this.interval = setInterval(UpdateAnimation, 50);
	}
}

// object for handling animated images
// 	-	frameWidth:		width of each frame in the animation
// 	-	frameHeight:	height of each frame in the animation
// 	-	frameCount:		number of frames total in the animation
// 	-	imgurl:			image file source
// 	-	frameDelay:		number of actual frames to wait before advancing animation; used to control rate of animation
function AnimatedImage(frameWidth, frameHeight, frameCount, imgurl, frameDelay) {
	this.frameCount 		= frameCount;
	this.bUseFrameDelay		= false;
	if (frameDelay > 0) {
		this.bUseFrameDelay = true;
		this.frameDelay 		= frameDelay;
		this.frameDelayCount 	= 0;
	}
	this.frame				= 0;
	this.x					= 0;
	this.frameHeight 		= frameHeight;
	this.frameWidth 		= frameWidth;
	this.img				= new Image();
	this.img.src			= imgurl;
	this.canvas				= document.createElement("canvas"); 
	this.canvas.width		= frameWidth;
	this.canvas.height		= frameHeight;
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	
	this.Update = function() {
		var ctx 	= this.canvas.getContext("2d");
		if (this.bUseFrameDelay == true) {
			if (((this.frameDelayCount++) % this.frameDelay) == 0) {
				this.frame 	= (this.frame + 1) % this.frameCount;
				this.x 		= this.frame * this.frameWidth;
			}
		}
		else {
			this.frame 	= (this.frame + 1) % this.frameCount;
			this.x 		= this.frame * this.frameWidth;
		}
		// draw a selected potion of the image on the canvas - the arguments are not in a logical order
		// first argument is the image object itself
		// second and third argument are the x,y start position in the IMAGE
		// fourth and fifth are the width and height of the CANVAS to use
		// sixth and seventh is the position relative to the CANVAS to place the image
		// eigth and ninth are the size of the box in the IMAGE to draw
		ctx.drawImage(this.img, this.x, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
	}
}

function UpdateAnimation() {
	animatedImage.Update();
}