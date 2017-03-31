// example script for a canvas within a canvas that expands/contracts on being clicked
// could be used for rooms and furniture

function StartClickableCanvas() {
	myButton = new ClickableObject(10, 10);
	houseArea.Initialise(1600, 800);
}

var houseArea = {
	// object holding information about the primary canvas
    canvas : document.createElement("canvas"), 

	// initialise the house area
	Initialise : function(width, height) {
		this.canvas.innerHTML = "<p>Sorry, your browser does not support this application.</p>";
		this.canvas.id = "mainCanvas";
        this.canvas.width = width;
        this.canvas.height = height;
		this.color = "lightgrey";
		
		// function called when mouse is clicked while cursor is over canvas
		// objects within the canvas cannot respond directly to events like this,
		// so you have to forward the event using function like this
		this.canvas.addEventListener(
			'click',
			function(event) {
				var mx = event.offsetX;
				var my = event.offsetY;
				
				myButton.handleClick(mx, my);
			},
			false
		);
		
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(UpdateArea, 33);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = this.color;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    }
}

function ClickableObject(x, y)
{
	this.canvas = document.createElement("canvas");
	this.x = x;
	this.y = y;
    this.canvas.width = 100;
    this.canvas.height = 50;
    this.context = this.canvas.getContext("2d");
	this.color = "red";
	
	// function for responding to clicks handled by parent object
	this.handleClick = function(mx, my)
	{
		if (mx > this.x && mx < this.canvas.width + this.x && my > this.y && my < this.y + this.canvas.height)
		{
			// was clicked
			if (this.color == "red")
			{
				this.color = "blue";
				this.canvas.width =  700;
				this.canvas.height = 350;
			}
			else
			{
				this.color = "red";
				this.canvas.width = 100;
				this.canvas.height = 50;
			}
		}
	}
    this.update = function(){
		this.x = houseArea.canvas.width / 2 - this.canvas.width / 2;
		this.y = houseArea.canvas.height / 2 - this.canvas.height / 2;
		this.context.fillStyle = this.color;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
        ctx = houseArea.context;
		ctx.drawImage(this.canvas, this.x, this.y);
	}
}

function UpdateArea() {
	houseArea.clear();
	myButton.update();
}