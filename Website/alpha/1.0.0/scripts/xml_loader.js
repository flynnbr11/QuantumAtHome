
var parser = new DOMParser();
var xmlDoc;

function loadXMLDoc(id) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      enableItemOverlay(id, this);
    }
  };
  xmlhttp.open("GET", "all.xml" , true);
  xmlhttp.send();
}


var text;

function openOverlay(id, xml) {
	var itemId;
	
	switch(id)
	{
	case 0:
		itemId = "tv";
		break;
	case 1:
		itemId = "phone";
		break;
	}
	enableItemOverlay(itemId, xml);
}

var image;
var hasLoaded = false;

function enableItemOverlay(id, xml) {
	if(hasLoaded) {	off(); }
	hasLoaded = true;
	var parent;
	var name;
	var tagline;
	var summary;
	var description;
	
	xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
	
	var itemList = xmlDoc.getElementsByTagName("id");
	var itemIndex;
	
	for (var i = 0; i < itemList.length; ++i)
	{
		if (itemList[i].innerHTML == id)
		{
			itemIndex = i;
			break;
		}
	}
	
	image = new Image();
	
	parent = itemList[itemIndex].parentNode;
	var i;
	for (i = 0; i < parent.childNodes.length; ++i)
	{
		if (parent.childNodes[i].localName == "imgsrc")
		{
			image.src = parent.childNodes[i].innerHTML;
		}
		if (parent.childNodes[i].localName == "name")
		{
			name = parent.childNodes[i].innerHTML;
		}
		else if (parent.childNodes[i].localName == "tagline")
		{
			tagline = parent.childNodes[i].innerHTML;
		}
		else if (parent.childNodes[i].localName == "summary")
		{
			summary = parent.childNodes[i].innerHTML;
		}
		else if (parent.childNodes[i].localName == "description")
		{
			description = parent.childNodes[i].innerHTML;
		}
	}
	
	document.getElementById("itemImage").insertBefore(image, document.getElementById("itemImage").childNodes[0]);
	document.getElementById("itemHeader").innerHTML = "<h1>" + name + "</h1>";
	document.getElementById("itemTagline").innerHTML = "<p><i>" + tagline + "</i></p>";
	document.getElementById("itemSummary").innerHTML = "<p>" + summary + " </p>";
	document.getElementById("itemDescription").innerHTML = "<h2>Detailed Description</h2><p>" + description + "</p>";
	
	document.getElementById("itemOverlay").style.display = "flex";
}

function off() {
	document.getElementById("itemOverlay").style.display = "none";
	image.src = null;
	document.getElementById("itemImage").innerHTML = "";
}

