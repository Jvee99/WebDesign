window.onscroll = function() {myFunction()};

var menubar = document.getElementById("topnav");

var sticky = menubar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
menubar.classList.add("sticky")
} else {
menubar.classList.remove("sticky");
}
}
