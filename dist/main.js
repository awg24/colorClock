
var dateBox = document.getElementById("date-box");
var actualDate = document.getElementById("date");
var counterBar = document.getElementById("counter-bar");
var color = ["red","OrangeRed","Tomato","orange","yellow","YellowGreen",
"green","SeaGreen","blue","BlueViolet","violet","MediumVioletRed"];
var isHex = false;
var barDateSync = new Date();
var barWidth = (barDateSync.getSeconds()/0.126);
counter = 0;
dateBox.style.height = "400px";
dateBox.style.width = "850px";
dateBox.style.background = "MediumVioletRed";
//dateBox.style.background = "background: radial-gradient(circle, MediumVioletRed, "+color[counter]+"";
dateBox.style.transition = "background 2s";
//dateBox.style.transition = "-webkit-transition: background 2s radial";


counterBar.style.height = "5px";
counterBar.style.width = (barDateSync.getSeconds()/0.126)+"px";
counterBar.style.background = "white";
counterBar.style.margin = "auto";
counterBar.style.transition = "width, 1s"



actualDate.innerHTML = theDate();


function getTheTime(){
	var barDate = new Date();
	if(barDate.getSeconds() === 0){
		barWidth = 0;
	} else {
		barWidth+=8;
	}
	
	if(isHex){
		actualDate.innerHTML = hexDate();
		counterBar.style.width = barWidth+"px";
	} else {
		actualDate.innerHTML = theDate();
		counterBar.style.width = barWidth+"px";
	}
}
function setColorBackground() {
	counter++;
	if(counter === color.length-1){
		counter = 0;
	}
	
	dateBox.style.background = color[counter];
	//dateBox.style.background = "background: radial-gradient(circle,"+color[counter]+", "+color[counter+1]+"";
	//dateBox.style.transition = "background 2s";
	//dateBox.style.transition = "-webkit-transition: background 2s radial";
}

var handler = setInterval(getTheTime,1000);
var colorHandler = setInterval(setColorBackground, 2000);
console.log(handler);

function theDate() {
	var date = new Date();
	
	var hours = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
	var minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();

	return hours+":"+minutes+":"+seconds;
}

function hexDate(){
	var date = new Date();
	
	var hours = date.getHours() < 16 ? "0"+date.getHours().toString(16) : date.getHours().toString(16);
	var minutes = date.getMinutes() < 16 ? "0"+date.getMinutes().toString(16) : date.getMinutes().toString(16);
	var seconds = date.getSeconds() < 16 ? "0"+date.getSeconds().toString(16) : date.getSeconds().toString(16);

	return hours+":"+minutes+":"+seconds;
}

function decimalDate(obj){
	isHex = false;
	obj.innerHTML = theDate();
}
function hexadecimDate(obj){
	isHex = true;
	obj.innerHTML = hexDate();
}
















