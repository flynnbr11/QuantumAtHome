var animatedImage;

function StartAnimationTest() {
	AnimationTest.start();
	
	animatedImage = new AnimatedImage(50, 100, 5, "animtest.png");
}

var AnimationTest = {
	start : function() {
		this.interval = setInterval(UpdateAnimation, 50);
	}
}

function AnimatedImage(frameWidth, frameHeight, frameCount, imgurl) {
	this.frameCount 	= frameCount;
	this.frame			= 0;
	this.x				= 0;
	this.frameHeight 	= frameHeight;
	this.frameWidth 	= frameWidth;
	this.img			= new Image();
	this.img.src		= imgurl;
	this.canvas			= document.createElement("canvas"); 
	this.canvas.width	= frameWidth;
	this.canvas.height	= frameHeight;
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	
	this.Update = function() {
		var ctx = this.canvas.getContext("2d");
		this.frame = (this.frame + 1) % this.frameCount;
		this.x = this.frame * this.frameWidth;
		ctx.drawImage(this.img, this.x, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
	}
}

function UpdateAnimation() {
	animatedImage.Update();
}