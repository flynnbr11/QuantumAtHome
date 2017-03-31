// example script for a canvas within a canvas that expands/contracts on being clicked
// could be used for rooms and furniture - Joe

var STATEVAR_CLICKABLE_NOT_CLICKED = 0;
var STATEVAR_CLICKABLE_CLICKED = 1;

function StartClickableCanvas() {
	MainCanvas.Initialise(800, 600);
	MainCanvas.AddChild(new ClickableCanvasObject(300, 400, 100, 50));
}

var MainCanvas = {
	// object holding information about the primary canvas
    canvas : document.createElement("canvas"), 

	// initialise the house area
	Initialise : function(width, height) {
		this.canvas.innerHTML = "<p>Sorry, your browser does not support this application.</p>";
		this.canvas.id = "mainCanvas";
        this.canvas.width = width;
        this.canvas.height = height;
		this.color = "lightgrey";
		this.childList = [];
		
		// function called when mouse is clicked while cursor is over canvas
		// objects within the canvas cannot respond directly to events like this,
		// so you have to forward the event using function like this
		this.canvas.addEventListener(
			'click',
			function(event) {
				var mx = event.offsetX;
				var my = event.offsetY;
				
				for (i = 0, len = MainCanvas.childList.length; i < len; i++) {
					MainCanvas.childList[i].HandleClick(mx, my);
				}
			},
			false
		);
		
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(UpdateArea, 33);
    },
	AddChild : function(childObj) {
		childObj.SetParent(this);
		this.childList.push(childObj);
	},
    Update : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = this.color;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
		
		for (i = 0, len = this.childList.length; i < len; i++) {
			this.childList[i].Update();
		}
    }
}

function ClickableCanvasObject(x, y, width, height)
{	
	this.canvas = document.createElement("canvas");
	this.x = x;
	this.y = y;
	this.baseWidth = width;
	this.baseHeight = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
	this.color = "red";
	this.state = STATEVAR_CLICKABLE_NOT_CLICKED;
	this.bParentSet = false;
	
	// sets the parent object of this object
	this.SetParent = function(parentObj) {
		this.parentObj = parentObj;
		this.bParentSet = true;
	}
	// function for responding to clicks handled by parent object
	this.HandleClick = function(mx, my)
	{
		if (this.bParentSet)
		{
			if (mx > this.x && mx < this.canvas.width + this.x && my > this.y && my < this.y + this.canvas.height)
			{
				// simple demonstration about how state tracking works
				switch(this.state)
				{
					case STATEVAR_CLICKABLE_NOT_CLICKED:
						this.state = STATEVAR_CLICKABLE_CLICKED;
						this.color = "blue";
						this.canvas.width = this.baseWidth * 3;
						this.canvas.height = this.baseHeight * 3;
						break;
					case STATEVAR_CLICKABLE_CLICKED:
						this.state = STATEVAR_CLICKABLE_NOT_CLICKED;
						this.color = "red";
						this.canvas.width = this.baseWidth;
						this.canvas.height = this.baseHeight;
						break;
					default:
						break;
				}
			}
		}
	}
    this.Update = function()
	{
		// don't want to try and draw if the parent hasn't been set
		if (this.bParentSet)
		{
			this.context.fillStyle = this.color;
			this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
			ctx = this.parentObj.context;
			ctx.drawImage(this.canvas, this.x, this.y);
		}
	}
}

function UpdateArea() {
	MainCanvas.Update();
}