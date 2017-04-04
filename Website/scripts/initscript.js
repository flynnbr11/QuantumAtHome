// initscript.js
// sets up the common elements for each page on the site



function DoLoad() {
	//CreateNavbar();
	LoadStyleSheets();
	//CreateFooter();
}

// bring up welcome canvas
function CreateWelcome() {

}

// create the footer
function CreateFooter() {	
}

// loads all the commonly required stylesheets for each page
function LoadStyleSheets () {
	CreateStyleSheetLink("styles/navbarStyles.css");
}

function CreateStyleSheetLink (filename) {
	var linkItem = document.createElement("LINK");
	
	linkItem.setAttribute("rel", "stylesheet");
	linkItem.setAttribute("type", "text/css");
	linkItem.setAttribute("href", filename);
	
	document.head.insertBefore(linkItem, document.head.childNodes[0]);
}

// create a navbar item using the page name
function CreateNavbarItem(name, navbar) {
	var navbarItem = document.createElement("A");
	
	navbarItem.setAttribute("id", name);
	navbarItem.setAttribute("class", "navbarItem");
	navbarItem.setAttribute("href", name + ".html");
	navbarItem.innerHTML = name;
	navbar.insertBefore(navbarItem, navbar.childNodes[0]);
}

// create the navbar for each page
function CreateNavbar() {
	var navbar = document.getElementById("navbar");
	
	CreateNavbarItem("contact", navbar);
	CreateNavbarItem("about", navbar);
	CreateNavbarItem("index", navbar);
}