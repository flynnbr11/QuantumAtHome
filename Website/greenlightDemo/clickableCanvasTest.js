// example script for a canvas within a canvas that expands/contracts on being clicked
// could be used for rooms and furniture - Joe

var STATEVAR_CLICKABLE_INACTIVE = 0;
var STATEVAR_CLICKABLE_ACTIVE = 1;

function StartClickableCanvas() {
	MainCanvas.Initialise(1600, 900);
	MainCanvas.AddChild(new ClickableCanvasObject(200, 200, 600, 300, "red"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 200, 600, 300, "orange"));
	MainCanvas.AddChild(new ClickableCanvasObject(200, 500, 600, 300, "green"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 500, 600, 300, "blue"));
}

function HomepageCanvas() { 
	MainCanvas.Initialise(1600, 900);
	MainCanvas.AddChild(new ClickableCanvasObject(200, 200, 600, 600, "red", "house/house.html"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 200, 600, 600, "orange", "outdoor/outdoor.html"));
}

function HouseCanvas() {
	MainCanvas.Initialise(1600, 900);
	MainCanvas.AddChild(new ClickableCanvasObject(200, 200, 600, 300, "red", "livingRoom.html"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 200, 600, 300, "orange", "bedroom.html"));
	MainCanvas.AddChild(new ClickableCanvasObject(200, 500, 600, 300, "green", "kitchen.html"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 500, 600, 300, "blue", "garage.html"));
}

function OutdoorCanvas() {
	MainCanvas.Initialise(1600, 900);
	MainCanvas.AddChild(new ClickableCanvasObject(200, 200, 100, 100, "red", "satellite.html"));
	MainCanvas.AddChild(new ClickableCanvasObject(800, 200, 600, 300, "white", "cloud.html"));
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
		this.bObjectActive = false;
		
		// function called when mouse is clicked while cursor is over canvas
		// objects within the canvas cannot respond directly to events like this,
		// so you have to forward the event using function like this
		this.canvas.addEventListener(
			'click',
			function(event) {
				var mx = event.offsetX;
				var my = event.offsetY;
				
				if (MainCanvas.bObjectActive) {
					MainCanvas.activeObject.HandleClick(mx, my);
				}
				else {
					for (i = 0, len = MainCanvas.childList.length; i < len; i++) {
						MainCanvas.childList[i].HandleClick(mx, my);
					}
				}
			},
			false
		);
		
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(UpdateArea, 33);
    },
	SetActiveObject : function(obj) {
		this.activeObject = obj;
		this.bObjectActive = true;
	},
	UnsetActiveObject : function() {
		this.bObjectActive = false;
	},
	AddChild : function(childObj) {
		childObj.SetParent(this);
		this.childList.push(childObj);
	},
    Update : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = this.color;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
		
		if (this.bObjectActive) {
			this.activeObject.Update();
		}
		else {
			for (i = 0, len = this.childList.length; i < len; i++) {
				this.childList[i].Update();
			}
		}
    }
}

function ClickableCanvasObject(x, y, width, height, color, link)
{	
	this.canvas = document.createElement("canvas");
	this.baseX = x;
	this.x = x;
	this.baseY = y;
	this.y = y;
	this.baseWidth = width;
	this.baseHeight = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
	this.color = color;
	this.state = STATEVAR_CLICKABLE_INACTIVE;
	this.bParentSet = false;
	this.link = link;
    
	// sets the parent object of this object
	this.SetParent = function(parentObj) {
		this.parentObj	= parentObj;
		this.bParentSet = true;
	}
	// function for responding to clicks handled by parent object
	this.HandleClick = function(mx, my)
	{
        if (mx > this.x && mx < this.canvas.width + this.x && my > this.y && my < this.y + this.canvas.height)
        {
            window.location.href=this.link;
        }
		/*
        if (this.bParentSet)
		{
			if (mx > this.x && mx < this.canvas.width + this.x && my > this.y && my < this.y + this.canvas.height)
			{
				// simple demonstration about how state tracking works
				switch(this.state)
				{
					case STATEVAR_CLICKABLE_INACTIVE:
						this.parentObj.SetActiveObject(this);
						
						this.state			= STATEVAR_CLICKABLE_ACTIVE;
						this.canvas.width	= this.parentObj.canvas.width * 9/10;
						this.canvas.height	= this.parentObj.canvas.height * 9/10;
						this.x				= this.parentObj.canvas.width / 2 - this.canvas.width / 2;
						this.y				= this.parentObj.canvas.height / 2 - this.canvas.height / 2;
						break;
					case STATEVAR_CLICKABLE_ACTIVE:
						this.parentObj.UnsetActiveObject(this);
						
						this.state			= STATEVAR_CLICKABLE_INACTIVE;
						this.x				= this.baseX;
						this.y				= this.baseY;
						this.canvas.width	= this.baseWidth;
						this.canvas.height	= this.baseHeight;
						break;
					default:
						break;
				}
			}
		}
        //*/
	
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