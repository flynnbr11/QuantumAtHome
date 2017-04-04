// script combining functionality from other examples to demonstrate interplay

function StartCombinedFunctionalityTest() {
	MainArea.Load(800, 450, "");
	
	MainArea.AddChildRoom("living_room", 50, 50, "images/bg_living_room.png");
	MainArea.AddChildRoom("kitchen", 300, 50, "images/bg_kitchen.png");
	
//	MainArea.GetRoomByName("living_room").AddChildFurniture(new Furniture(""));
}

// UI Engine

// loading icon

// main area
// -- background
// -- room children
var MainArea = {
	canvas : document.createElement("CANVAS"),
	Load : function (width, height, bgurl) {
		this.width = width;
		this.height = height;
		this.backgroundURL = bgurl;
		this.childRooms = [];
		this.clearColor = "lightgrey";
		this.canvas.width = width;
		this.canvas.height = height;
		
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		
		this.context = this.canvas.getContext("2d");
		
		this.interval = setInterval(UpdateAndDrawAll, 33);
	},
	AddChildRoom : function(name, x, y, bgimg) {
		this.childRooms.push(new Room(name, x, y, bgimg));
	},
	UpdateAndDraw : function() {
		var i, len;
		
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = this.clearColor;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
		
		for (i = 0, len = this.childRooms.length; i < len; i++) {
			this.childRooms[i].UpdateAndDraw(this.context);
		}
	},
	GetRoomByName : function(roomName) {
		for (i = 0, len = this.childRooms.length; i < len; i++) {
			if (this.childRooms[i].name === roomName) {
				return this.childRooms[i];
			}
		}
		return null;
	}
};

// room object
// -- background
// -- furniture children
function Room(name, x, y, bgurl) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.bgurl = bgurl;
	this.childFurniture = [];
	
	this.bgimg = new Image();
	this.bgimg.src = this.bgurl;
	
//	this.canvas = document.createElement("CANVAS");
//	this.context = this.canvas.getContext("2d");

	this.AddChildFurniture = function(furniture) {
		this.childFurniture.push(furniture);
	}
	
	this.UpdateAndDraw = function (ctx) {
		var i, len;
	//	this.context.fillStyle = this.color;
	//	this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
		
		ctx.drawImage(this.bgimg, this.x, this.y);
		
		for (i = 0, len = this.childFurniture.length; i < len; i++) {
			this.childFurniture[i].UpdateAndDraw(ctx, this.x, this.y);
		}
	}
}

// furniture object
// -- image (possibly animated)
//	- controlled animation
function Furniture(name, x, y, imgurl) {
	this.name	= name;
	this.x		= x;
	this.y		= y;
	
	this.UpdateAndDraw = function (ctx, xOffset, yOffset) {
		
	}
}

function UpdateAndDrawAll() {
	MainArea.UpdateAndDraw();
}