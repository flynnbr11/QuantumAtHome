function LoadNavbar() {
	document.getElementById("navbar").innerHTML+="<a href=\"house.html\" class=\"navbarItem\">Home</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"surveys.html\" class=\"navbarItem\">Surveys</a>";
}

function LoadFooter() {
	document.getElementById("footer").innerHTML+="<a href=\"about.html\" class=\"navbarItem\">About Us</a>";
}


function DoLoad() {
	LoadNavbar();
	LoadFooter();
}

