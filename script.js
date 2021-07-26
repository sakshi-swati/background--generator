var css=document.getElementsByTagName('h3')[0];
var color1=document.querySelector(".clr1");
var color2=document.querySelector(".clr2");
var body=document.getElementById("gradient");

function set(){
	body.style.background="linear-gradient(to right," + color1.value +"," + color2.value +")";
	css.textContent=body.style.background +";";
};

color1.addEventListener("input",set);

color2.addEventListener("input",set);
