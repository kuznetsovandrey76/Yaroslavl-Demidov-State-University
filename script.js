var openItem = document.querySelectorAll(".list-item");

// Разобраться с массивами
var matan = document.querySelector(".matan");
var alg = document.querySelector(".alg");
var diskr = document.querySelector(".diskr");
var base = document.querySelector(".base");
var inf = document.querySelector(".inf");
var terver = document.querySelector(".terver");
var comp = document.querySelector(".comp");

// Разобраться с массивами
matan.addEventListener("click", function(){
	if (openItem[0].style.display == "") {
		openItem[0].style.display = "block";
	} else {
		openItem[0].style.display = "";
	}
});
alg.addEventListener("click", function(){
	if (openItem[1].style.display == "") {
		openItem[1].style.display = "block";
	} else {
		openItem[1].style.display = "";
	}
});
diskr.addEventListener("click", function(){
	if (openItem[2].style.display == "") {
		openItem[2].style.display = "block";
	} else {
		openItem[2].style.display = "";
	}
});
base.addEventListener("click", function(){
	if (openItem[3].style.display == "") {
		openItem[3].style.display = "block";
	} else {
		openItem[3].style.display = "";
	}
});
inf.addEventListener("click", function(){
	if (openItem[4].style.display == "") {
		openItem[4].style.display = "block";
	} else {
		openItem[4].style.display = "";
	}
});
terver.addEventListener("click", function(){
	if (openItem[5].style.display == "") {
		openItem[5].style.display = "block";
	} else {
		openItem[5].style.display = "";
	}
});
comp.addEventListener("click", function(){
	if (openItem[6].style.display == "") {
		openItem[6].style.display = "block";
	} else {
		openItem[6].style.display = "";
	}
});