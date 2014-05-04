//Images
//Layout
var pWidth = Titanium.Platform.displayCaps.platformWidth;
var pHeight = Titanium.Platform.displayCaps.platformHeight;
var rowCount = 2;
var margin = 4;
var canvas = pWidth / rowCount;
var size =  canvas - ((rowCount + 1) * margin) / rowCount;

//Windows
var currentWindow = Ti.UI.currentWindow;

//Views
var scrollView = Ti.UI.createScrollView({
	layout: "vertical",	
	showVerticalScrollIndicator: true,
	width: pWidth,
	contentWidth: pWidth,
	height:pHeight
});
var imageTerrian = Ti.UI.createImageView({
	image: "Images/wall000-1680x1050.jpg",
	//bottom: "35%",
	zIndex: 1
});
var imageToss = Ti.UI.createImageView({
	image: "Images/wall005-1920x1200.jpg",
	
});
var imageZerg = Ti.UI.createImageView({
	image: "Images/wall008-1920x1200.jpg",
	//top: "64.8%"
});

//FUNCTION//

//TossFunction
var tossFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Table",
		url:"Toss.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
	
};

//ZergFunction
var zergFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Table",
		url:"Zerg.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
	
};
//TerrianFunction
var TerrianFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Table",
		url:"Terrian.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};

//EventListeners
imageToss.addEventListener("click", tossFun);
imageZerg.addEventListener("click", zergFun);
imageTerrian.addEventListener("click", TerrianFun);

//mainWindow.add(currentWindow);
scrollView.add(imageTerrian,imageToss,imageZerg);
currentWindow.add(scrollView);



