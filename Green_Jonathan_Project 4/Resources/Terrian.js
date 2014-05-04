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

//Labels
var galleryLabel = Ti.UI.createLabel({
	backgroundImage: "Images/Terriangrunge.jpg",
	text: "Gallery",
	textAlign: "center",
	color: "white",
	height: "33.333%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	font: {fontSize: 64, fontWeight: "bold"}
});
var unitsLabel = Ti.UI.createLabel({
	backgroundImage: "Images/Terriangrunge.jpg",
	text: "Units",
	textAlign: "center",
	color: "white",
	height: "33.333%",
	//top: "30%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	font: {fontSize: 64, fontweight: "bold"}
});
var customeLabel = Ti.UI.createLabel({
	backgroundImage: "Images/Terriangrunge.jpg",
	text: "Custome",
	color: "#white",
	textAlign: "center",
	height:"33.333%",
	//top: "60%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	font: {fontSize: 64, fontweight: "bold"},
});

//Function//
//Units
var terrianFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Tech 1",
		url:"tableWindow3.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};
var terrianFun2 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Terrian",
		url:"GalleryT.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};

var terrianFun3 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Evolve",
		url:"Tswitch.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};
//EventListeners
unitsLabel.addEventListener("click", terrianFun);
galleryLabel.addEventListener("click", terrianFun2);
customeLabel.addEventListener("click", terrianFun3);

scrollView.add(galleryLabel,unitsLabel,customeLabel);
currentWindow.add(scrollView);