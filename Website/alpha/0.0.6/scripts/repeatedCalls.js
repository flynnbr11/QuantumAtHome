function LoadNavbar() {
<!--	document.getElementById("navbar").innerHTML+="<div class=\"logo_class\"> <a  href=\"index.html\"> <img width=\"10%\"  src=\"../images/qah_logo.png\"> </img> </a> </div>"; -->

	document.getElementById("navbar").innerHTML+="<a href=\"index.html\" class=\"navbarItem\">Homepage</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"house.html\" class=\"navbarItem\">Quantum@Home</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"quantum.html\" class=\"navbarItem\">Quantum Physics</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"all_items.html\" class=\"navbarItem\">Technologies</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"surveys.html\" class=\"navbarItem\">Surveys</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"about.html\" class=\"navbarItem\">About Us</a>";

}

function LoadFooter() {
//	document.getElementById("footer").innerHTML+="<a href=\"about.html\" class=\"navbarItem\">About Us</a>";
}


function DoLoad() {
	LoadNavbar();
	LoadFooter();
}

