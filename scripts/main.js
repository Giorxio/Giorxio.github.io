let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/GIO_3241.JPG') {
		myImage.setAttribute('src','images/GIO_2383.jpg');
	} else {
		myImage.setAttribute('src','images/GIO_3241.JPG');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Photography by Giorgio Magliano. Enjoy, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Photography by Giorgio Magliano. Enjoy, ' + storedName
}

myButton.onclick = function() {
	setUserName();
}