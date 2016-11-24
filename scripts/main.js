var myImage = document.querySelector("img");

/*myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "images/craximus-estate.jpg") {
		myImage.setAttribute ("src", "images/gawthorpehall-robcarder1.jpg");
	} else {
		myImage.setAttribute ("src", "images/craximus-estate.jpg");
	}
}
*/

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Welcome to the Craximus Crib, " + myName;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Welcome to the Craximus Crib, " + storedName;
}

myButton.onclick = function() {
	setUserName();
}

