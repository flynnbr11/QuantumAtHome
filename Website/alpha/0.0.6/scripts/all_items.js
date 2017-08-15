
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
	
	for (var i = 0; i < rooms.length; ++i)
	{
		roomList[i].name = rooms[i].attributes[0].nodeValue;
		
		var room_accordion = document.createElement("header");
		room_accordion.setAttribute("class", "room_name_accordion");
		room_accordion.innerHTML = roomList[i].name;
		
		for (var i = 0; i < room.childNodes.length;  ++i)
		{
			if (room.childNodes[i].nodeName == "item")
			{
				// add new item to the list
				var item_data = new ItemData();
				var item = roomList[i].childNodes[i];
				
				item_data.name = item.attributes[0].nodeValue;
				
				var item_accordion = document.createElement("header");
				item_accordion.setAttribute("class", "item_name_accordion");
				item_accordion.innerHTML = roomList[i].name;
				
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
				room_accordion.appendChild(item_accordion);
				roomList[i].itemList.push(item_data);
			}
			room_accordion_container.appendChild(room_accordion);
		}
	}
}