
function InitXML()
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadXMLData(this);
    }
  };
  xmlhttp.open("GET", "all.xml" , true);
  xmlhttp.send();
}

var roomList = [];

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

function LoadXMLData(xml)
{
	// prepare xml data
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
	
	// find the correct room
	var rooms = xmlDoc.getElementsByTagName("room");
	
	
	var room_accordion_container = document.getElementById("room_list");
	
	for (var l = 0; l < rooms.length; ++l)
	{
		var room = rooms[l];
		
		var room_name = room.attributes[0].nodeValue;
		var room_accordion = document.createElement("header");
		var str = room_name.replace("_", " ");
		room_accordion.setAttribute("class", "room_name_accordion");
		room_accordion.innerHTML = str;
		room_accordion.onclick = accordionOnClick;
		room_accordion_container.appendChild(room_accordion);
		
		var room_panel = document.createElement("section");
		room_panel.setAttribute("class", "room_panel");
		room_accordion.appendChild(room_panel);
		
		var roomData = new RoomData(room_name);
		
		for (var i = 0; i < room.childNodes.length;  ++i)
		{
			if (room.childNodes[i].nodeName == "item")
			{
				// add new item to the list
				var item_data = new ItemData();
				var item = room.childNodes[i];
				
				item_data.name = item.attributes[0].nodeValue;
				
				var item_accordion = document.createElement("section");
				item_accordion.setAttribute("class", "item_name_accordion");
				item_accordion.innerHTML = item_data.name;
				item_accordion.onclick = OpenOverlay;
				
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
				room_panel.appendChild(item_accordion);
				roomData.itemList.push(item_data);
			}
			
			roomList.push(roomData);
		}
	}
}

var itemWasClicked = false;

function OpenOverlay()
{
	itemWasClicked = true;
	var itemName = this.innerHTML;
	var item_data;
	for (var j = 0; j < roomList.length; ++j)
	{
		var room_data = roomList[j];
		
		for (var i = 0; i < room_data.itemList.length; ++i)
		{
			if (room_data.itemList[i].name == itemName)
			{
				item_data = room_data.itemList[i];
				break;
			}
		}
	}
	document.getElementById("content_container").innerHTML = "<div id=\"inner_overlay\">" +
															"<header id=\"item_header\"></header>" +
															"<section id=\"item_tagline\"></section>" +
															"<div id=\"item_image_container\"><canvas id=\"item_image\"></canvas></div>" +
								 							"<section id=\"item_summary\"></section>" +
															"<section id=\"item_techs\"></section>" +
														"</div>";
	
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
		
		var container_techImg = document.createElement("div");
		container_techImg.setAttribute("class", "tech_img");
		
		// ... create a new accordion
		var tech_accordion = document.createElement("header");
		tech_accordion.setAttribute("class", "tech_name_accordion");
//		tech_accordion.innerHTML = tech_data.name;
		
		var tech_panel = document.createElement("div");
		tech_panel.setAttribute("class", "tech_panel");
		
/*		var container_techSummary = document.createElement("section");
		container_techSummary.setAttribute("class", "tech_summary");
		container_techSummary.innerHTML = tech_data.summary;*/
		
		var container_techDescription = document.createElement("section");
		container_techDescription.setAttribute("class", "tech_description");
//		container_techDescription.innerHTML = "Description";
		container_techDescription.innerHTML += "<p>" + tech_data.description + "</p>";
		
		var container_techMoreInfo = document.createElement("a");
		container_techMoreInfo.setAttribute("class", "tech_more_info");
		container_techMoreInfo.setAttribute("href", tech_data.moreInfoURL);
		container_techMoreInfo.setAttribute("target", "_blank");
		container_techMoreInfo.innerHTML = "Click here for a full scientific discussion.";
		
		tech_container.insertBefore(tech_accordion, tech_container.childNodes[0]);
		
		tech_accordion.appendChild(tech_panel);
		
		var hr = document.createElement("hr");
		
		tech_panel.insertBefore(hr, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techMoreInfo, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techDescription, tech_panel.childNodes[0]);
		tech_panel.insertBefore(container_techImg, tech_panel.childNodes[0]);
		//tech_panel.insertBefore(container_techSummary, tech_panel.childNodes[0]);
		
		tech_accordion.onclick = accordionOnClick;
	}
	
	document.getElementById("content_container").style.display = "flex";
}


function off() {
	document.getElementById("content_container").style.display = "none";
	document.getElementById("content_container").innerHTML = "";
}

function accordionOnClick()
{
	if (itemWasClicked)
	{
		itemWasClicked = false;
	}
	else
	{
		this.classList.toggle("active");
		var panel = this.childNodes[1];
		if (panel.style.maxHeight){
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
}
