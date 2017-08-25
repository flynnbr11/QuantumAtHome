function LoadNavbar() {
	document.getElementById("navbar").innerHTML+="<a href=\"house.html\" class=\"navbarItem\">Home</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"surveys.html\" class=\"navbarItem\">Surveys</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"quantum.html\" class=\"navbarItem\">Quantum Physics</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"all_items.html\" class=\"navbarItem\">Technologies</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"about.html\" class=\"navbarItem\">About Us</a>";

}

function LoadFooter() {
//	document.getElementById("footer").innerHTML+="<a href=\"about.html\" class=\"navbarItem\">About Us</a>";
}


function DoLoad() {
	LoadNavbar();
	LoadFooter();
}

