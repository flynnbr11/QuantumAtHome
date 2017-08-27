// example script for a canvas within a canvas that expands/contracts on being clicked
// could be used for rooms and furniture - Joe

var STATEVAR_CLICKABLE_INACTIVE = 0;
var STATEVAR_CLICKABLE_ACTIVE = 1;

function Initialise(bgSrc, roomName) {
	var width = 1258;
	var height = 710;

	MainCanvas.Initialise(width, height, bgSrc, roomName);
}

function AddItemToCanvas(x, y, width, height, imgSrc, clickURL, isXML)
{
	MainCanvas.AddChild(new ClickableCanvasObject(x, y, width, height, imgSrc, clickURL, isXML));
}

var MainCanvas = {
	// object holding information about the primary canvas
    canvas : document.createElement("canvas"), 
    
	// prepare to load data from XML
	SetupRoom: function(roomName) {
		loadXMLData(roomName, this.FillData);
	},
	// read data from XML
	FillData: function(roomName, xml) {
		var parser = new DOMParser();
		var xmlDoc;
	
		xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
		
		this.roomData = new Room();
		this.roomData.name = roomName;
		
		roomList = xmlDoc.getElementsByTagName("room");
		
		var roomIndex = 0;
		var foundRoom = false;
		for (var i = 0; i < roomList.length; ++i)
		{
			for(var j = 0; j < roomList[i].childNodes.length; ++j)
			{
				var node = roomList[i].childNodes[j];
				if (node.nodeType == 2) // if attribute
				{
					if (node.nodeValue == roomName)
					{
						// found the room
						foundRoom = true;
						break;
					}
				}
			}
			if (foundRoom)
			{
				break;
			}
		}
	},
	
	// initialise the house area
	Initialise : function(width, height, bgSrc, roomName) {
		this.canvas.innerHTML = "<p>Sorry, your browser does not support this application.</p>";
		this.canvas.id = "mainCanvas";
        this.canvas.width = width;
        this.canvas.height = height;
		this.color = "lightgrey";
		this.childList = [];
		this.bObjectActive = false;
		this.img = new Image();
		this.img.src = bgSrc;
		this.roomName = roomName;
		
		InitXML(this.roomName);
		
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
        
        var container = document.getElementById("pageCanvas");        
        container.insertBefore(this.canvas, container.childNodes[0]);
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
		
		this.context.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
		
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

function ClickableCanvasObject(x, y, width, height, imgSrc, url, isXML)
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
	this.color = "grey";
	this.state = STATEVAR_CLICKABLE_INACTIVE;
	this.bParentSet = false;
	this.img = new Image();
	this.img.src = imgSrc;
	this.url = url;
	this.isXML = isXML;
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
        		if(this.isXML){
        			OpenOverlay(this.url);
        		}
        		else{
					window.location.href=this.url;
				}
        }
	
    }
    this.Update = function()
	{
		// don't want to try and draw if the parent hasn't been set
		if (this.bParentSet)
		{
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		//	this.context.fillStyle = this.color;
		//	this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
			this.context.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
			ctx = this.parentObj.context;
			ctx.drawImage(this.canvas, this.x, this.y);
		}
	}
}

function UpdateArea() {
	MainCanvas.Update();
}
function RoomData(name) {
	this.name = name;
	this.itemList = [];
}
function ItemData() {
	this.name = "";
	this.heading = "";
	this.tagline = "";
	this.summary = "";
	this.img = null;
	this.techList = [];
}
function TechData() {
	this.name = "";
	this.imgSrc = "";
	this.summary = "";
	this.description = "";
	this.moreInfoURL = "";
}

function InitXML(roomName)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadXMLData(roomName, this);
    }
  };
  xmlhttp.open("GET", "all.xml" , true);
  xmlhttp.send();
}

var room_data;

function LoadXMLData(roomName, xml)
{
	// prepare xml data
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
	
	// find the correct room
	var roomList = xmlDoc.getElementsByTagName("room");
	
	var roomIndex = 0;
	for (var i = 0; i < roomList.length; ++i)
	{
		if(roomList[i].attributes[0].nodeValue == roomName)
		{
			roomIndex = i;
			break;
		}
	}
	
	var room = roomList[roomIndex];
	room_data = new RoomData(roomList[roomIndex].attributes[0].nodeValue);
	
	for (var i = 0; i < room.childNodes.length;  ++i)
	{
		if (room.childNodes[i].nodeName == "item")
		{
			// add new item to the list
			var item_data = new ItemData();
			var item = room.childNodes[i];
			
			item_data.name = item.attributes[0].nodeValue;
			
			for (var j = 0; j < item.childNodes.length; ++j)
			{
				if (item.childNodes[j].nodeName == "heading")
				{
					item_data.heading = item.childNodes[j].innerHTML;
				}
				else if (item.childNodes[j].nodeName == "tagline")
				{
					item_data.tagline = item.childNodes[j].innerHTML;
				}
				else if (item.childNodes[j].nodeName == "summary")
				{
					item_data.summary = item.childNodes[j].innerHTML;
				}
				else if (item.childNodes[j].nodeName == "imgsrc")
				{
					item_data.img = new Image();
					item_data.img.src = item.childNodes[j].innerHTML;
				}
				else if (item.childNodes[j].nodeName == "tech")
				{
					var tech_data = new TechData();
					var tech = item.childNodes[j];
					
					for (var k = 0; k < tech.childNodes.length; ++k)
					{
						var tech_tag_name = tech.childNodes[k].nodeName;
						
						if (tech_tag_name == "name")
						{
							tech_data.name = tech.childNodes[k].innerHTML;
						}
						else if (tech_tag_name == "image_name")
						{
							tech_data.imgSrc = tech.childNodes[k].innerHTML;
						}
						else if (tech_tag_name == "summary")
						{
							tech_data.summary = tech.childNodes[k].innerHTML;
						}
						else if (tech_tag_name == "description")
						{
							tech_data.description = tech.childNodes[k].innerHTML;
						}
						else if (tech_tag_name == "more_info_url")
						{
							tech_data.moreInfoURL = tech.childNodes[k].innerHTML;
						}
					}
					
					item_data.techList.push(tech_data);
				}
			}
			
			room_data.itemList.push(item_data);
		}
	}
}

function OpenOverlay(itemName)
{
	var item_data;
	for (var i = 0; i < room_data.itemList.length; ++i)
	{
		if (room_data.itemList[i].name == itemName)
		{
			item_data = room_data.itemList[i];
			break;
		}
	}
	
	// fill in item data
	document.getElementById("item_header").innerHTML = item_data.heading;
	
	var imgCanvas = document.getElementById("item_image");
	var imgCtx = imgCanvas.getContext("2d");
//	imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
	imgCtx.drawImage(item_data.img, 0, 0, imgCanvas.width, imgCanvas.height);
//	img.insertBefore(item_data.img, img.childNodes[0]);
	
	
	document.getElementById("item_tagline").innerHTML = item_data.tagline;
	document.getElementById("item_summary").innerHTML = item_data.summary;
	
	// fill in tech data
	var tech_container = document.getElementById("item_techs");
	for (var i = 0; i < item_data.techList.length; ++i)
	{
		// for each tech...
		var tech_data = item_data.techList[i];
		
		// ... create a new accordion
		var tech_accordion = document.createElement("header");
		tech_accordion.setAttribute("class", "tech_name_accordion");
		tech_accordion.innerHTML = tech_data.name;
		
		var tech_panel = document.createElement("div");
		tech_panel.setAttribute("class", "tech_panel");
		
		var container_techImg = document.createElement("div");
		container_techImg.setAttribute("class", "tech_img");
		
		var container_techSummary = document.createElement("section");
		container_techSummary.setAttribute("class", "tech_summary");
		container_techSummary.innerHTML = tech_data.summary;
		
		var container_techDescription = document.createElement("section");
		container_techDescription.setAttribute("class", "tech_description");
		container_techDescription.innerHTML = "Description";
		container_techDescription.innerHTML += "<p>" + tech_data.description + "</p>";
		
		var container_techMoreInfo = document.createElement("section");
		container_techMoreInfo.setAttribute("class", "tech_more_info");
		container_techMoreInfo.setAttribute("onclick", "OpenPage(\'" + tech_data.moreInfoURL + "\')");
		container_techMoreInfo.innerHTML = "Click here for the full article and references.";
		
		tech_container.insertBefore(tech_accordion, tech_container.childNodes[0]);
		
		tech_accordion.appendChild(tech_panel);
		
		tech_panel.insertBefore(container_techMoreInfo, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techDescription, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techSummary, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techImg, tech_panel.childNodes[0]);
		
		tech_accordion.onclick = accordionOnClick;
	}
	
	document.getElementById("item_overlay").style.display = "flex";
}

function OpenPage(url)
{
	window.location = url;
}

function off() {
	document.getElementById("item_overlay").style.display = "none";
	document.getElementById("item_overlay").innerHTML = "<div id=\"inner_overlay\">" +
															"<div id=\"overlay_close\" onclick=\"off()\">X</div>" +
															"<canvas id=\"item_image\"></canvas>" +
															"<header id=\"item_header\"></header>" +
															"<section id=\"item_tagline\"></section>" +
															"<section id=\"item_summary\"></section>" +
															"<section id=\"item_techs\"></section>" +
														"</div>";
}

function accordionOnClick()
{
    this.classList.toggle("active");
    var panel = this.childNodes[1];
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}
