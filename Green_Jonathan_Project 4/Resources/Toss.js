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
	backgroundImage: "Images/tossgrunge_00390661.jpg",
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
	backgroundImage: "Images/tossGrunge2.png",
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
	backgroundImage: "Images/tossGrunge3.jpg",
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
var tossFun = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Tech 1",
		url:"tableWindow2.js",
		nav: currentWindow.nav
	});
	
	currentWindow.nav.openWindow(loadFile);
};

var tossFun2 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Race Protoss",
		url:"GalleryToss.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};

var tossFun3 = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Evolve",
		url:"Tossswitch.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadFile);
};

//EventListeners
unitsLabel.addEventListener("click", tossFun);
galleryLabel.addEventListener("click", tossFun2);
customeLabel.addEventListener("click", tossFun3);

scrollView.add(galleryLabel,unitsLabel,customeLabel);
currentWindow.add(scrollView);
