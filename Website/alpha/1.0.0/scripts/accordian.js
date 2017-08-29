var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}


var sub_acc = document.getElementsByClassName("sub_accordion");

for (i = 0; i < sub_acc.length; i++) {
  sub_acc[i].onclick = function() {
    this.classList.toggle("active");
    var sub_panel = this.nextElementSibling;
    var panel = this.parentElement;
    if (sub_panel.style.maxHeight){
      sub_panel.style.maxHeight = null;
      panel.style.maxHeight = (parseInt(panel.style.maxHeight) - sub_panel.scrollHeight) + "px";
    } else {
    	var new_height = parseInt(panel.style.maxHeight) + sub_panel.scrollHeight;
      sub_panel.style.maxHeight = sub_panel.scrollHeight + "px";
      panel.style.maxHeight = new_height + "px";
    } 
  }
}

