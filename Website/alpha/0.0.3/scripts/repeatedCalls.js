function LoadNavbar() {
	document.getElementById("navbar").innerHTML+="<a href=\"house.html\" class=\"navbarItem\">Home</a>";
	document.getElementById("navbar").innerHTML+="<a href=\"otherPages/surveys.html\" class=\"navbarItem\">Surveys</a>";
}

function LoadFooter() {
}


function DoLoad() {
	LoadNavbar();
	LoadFooter();
}

