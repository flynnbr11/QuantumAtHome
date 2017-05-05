var ROOM_WIDTH = 736;
var ROOM_HEIGHT = 484;

var DEFAULT_COLOR = "grey";

var roomList = [];

var interval;

function AddRoom(name, x, y, url, imgSrc)
{
	roomList.push(new Room(name, x, y, url, imgSrc));
}

function Init()
{
	for(var i = 0; i < roomList.length; i++)
	{
		roomList[i].Init();
	}
	
	interval = setInterval(DrawAll, 50);
}

// class for ROOMS
function Room(name, x, y, url, imgSrc)
{
	this.name = name;
	this.x = x;
	this.y = y;
	this.url = url;
	this.color = DEFAULT_COLOR;
	this.img = new Image();
	this.img.src = imgSrc;
	
	this.handleClick = function() {
		window.location.href = this.url;
	}
	
	this.Init = function()
	{
		this.canvas = document.createElement("CANVAS");
		this.context = this.canvas.getContext("2d");
		this.canvas.x = this.x;
		this.canvas.y = this.y;
		this.canvas.width = ROOM_WIDTH;
		this.canvas.height = ROOM_HEIGHT;
		this.onclick = this.handleClick;
		document.addEventListener("click", function(){ window.location.href = this.url; });
		document.getElementById("house").insertBefore(this.canvas, document.getElementById("house").childNodes[0]);
	}
	
	this.Draw = function()
	{
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = this.color;
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
		this.context.drawImage(this.img, 0, 0);
	}
}

function DrawAll()
{
	for (var i = 0; i < roomList.length; i++)
	{
		roomList[i].Draw();
	}
}