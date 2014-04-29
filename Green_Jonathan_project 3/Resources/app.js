
//Layout
var pWidth = Titanium.Platform.displayCaps.platformWidth;
var pHeight = Titanium.Platform.displayCaps.platformHeight;
var rowCount = 2;
var margin = 4;
var canvas = pWidth / rowCount;
var size =  canvas - ((rowCount + 1) * margin) / rowCount;


//Windows
var mainWindow = Titanium.UI.createWindow({
	title:"Canon",
	backgroundColor: "red"
});

var window1 = Titanium.UI.iOS.createNavigationWindow({
  window: mainWindow
});	

//Views
var button = Titanium.UI.createView({
	height: 75,
	backgroundColor: "#black",
	center: "50%",
	width: "72%",
	borderRadius: 12
});

var introImage = Titanium.UI.createImageView({
	image: "Intro/Canon_Logo.jpg",
	width: "90%"
});

	
var loadFunkyTown = require("functions");

//Element loaders
button.add(introImage);
mainWindow.add(button);
window1.open();

