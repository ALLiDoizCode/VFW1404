
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
	backgroundImage: "Images/zergGrunge.jpg",
	text: "Gallery",
	textAlign: "center",
	height: "33.333%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	
	font: {fontSize: 64, fontWeight: "bold"}
});
var unitsLabel = Ti.UI.createLabel({
	backgroundImage: "Images/zergGrunge.jpg",
	text: "Units",
	textAlign: "center",
	height: "33.333%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	font: {fontSize: 64, fontweight: "bold"}
});
var customeLabel = Ti.UI.createLabel({
	backgroundImage: "Images/zergGrunge.jpg",
	text: "Custome",
	color: "#black",
	textAlign: "center",
	height:"33.333%",
	left: "-3%" ,
	right: "-3%",
	borderColor: "black",
	borderWidth: 10,
	borderRadius: "9%",
	font: {fontSize: 64, fontweight: "bold"},
});

//Function//
//Units
var zergFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Tech 1",
		url:"tableWindow.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};
var zergFun2 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Zerg",
		url:"GalleryZ.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};
var zergFun3 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Evolve",
		url:"Zswitch.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};

//EventListeners
unitsLabel.addEventListener("click", zergFun);
galleryLabel.addEventListener("click", zergFun2);
customeLabel.addEventListener("click", zergFun3);

scrollView.add(galleryLabel,unitsLabel,customeLabel);
currentWindow.add(scrollView);

