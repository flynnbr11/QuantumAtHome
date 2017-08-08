function RoomData(name) {
	this.name = name;
	this.itemList = [];
}
function ItemData() {
	this.name = "";
	this.heading = "";
	this.tagline = "";
	this.summary = "";
	this.imgSrc = "";
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
					item_data.imgSrc = item.childNodes[j].innerHTML;
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
	/*
	document.body.innerHTML += "Item: " + item_data.name + "<br />";
	document.body.innerHTML += "Tagline: " + item_data.tagline + "<br />";
	document.body.innerHTML += "Summary: " + item_data.summary + "<br />";
	for (var i = 0; i < item_data.techList.length; ++i)
	{
		var tech = item_data.techList[i];
		document.body.innerHTML += "-- Tech: " + tech.name + "<br />";
		document.body.innerHTML += "-- Summary: " + tech.summary + "<br />";
		document.body.innerHTML += "-- Description: " + tech.description + "<br />";
		document.body.innerHTML += "-- More Info: " + tech.moreInfoURL + "<br />";
		document.body.innerHTML += "-- Image Src: " + tech.imgSrc + "<br />";
	}
	*/
	
	// fill in item data
	document.getElementById("item_header").innerHTML = item_data.heading;
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
		container_techMoreInfo.innerHTML = tech_data.moreInfoURL;
		
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

function off() {
	document.getElementById("item_overlay").style.display = "none";
	document.getElementById("item_overlay").innerHTML = "<div id=\"inner_overlay\">" +
															"<div id=\"overlay_close_container\">" +
																"<div id=\"overlay_close\" onclick=\"off()\">X</div>" +
															"</div>" +
															"<div id=\"item_image\"></div>" +
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