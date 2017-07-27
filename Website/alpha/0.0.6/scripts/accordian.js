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
    if (sub_panel.style.maxHeight){
      sub_panel.style.maxHeight = null;
    } else {
      sub_panel.style.maxHeight = sub_panel.scrollHeight + "px";
    } 
  }
}

