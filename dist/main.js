
var dateBox = document.getElementById("date-box");
var actualDate = document.getElementById("date");
var color = ["red","OrangeRed","Tomato","orange","yellow","YellowGreen","green","SeaGreen","blue","BlueViolet","violet","MediumVioletRed"];
var isHex = false;
counter = 0;
dateBox.style.height = "400px";
dateBox.style.width = "850px";
dateBox.style.background = "MediumVioletRed";
dateBox.style.transition = "background, 2s"


actualDate.innerHTML = theDate();


function getTheTime(){
	if(isHex){
		actualDate.innerHTML = hexDate();
	} else {
		actualDate.innerHTML = theDate();
	}
}
function setColorBackground() {
	counter++;
	if(counter === color.length){
		counter = 0;
	}
	
	dateBox.style.background = color[counter];
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
















