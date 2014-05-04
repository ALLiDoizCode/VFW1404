//Window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#white", 
});
//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//VIEW
var logoImage = Ti.UI.createImageView({
	image: "Images/starcraft2.jpg",
	align: "center",
	top: "30%"
});

//FUNCTION//
var introWindow = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Races",
		layout: "vertical",
		url:"Window.js",
		nav: navWindow
	});
	navWindow.openWindow(loadFile);
	
};
//EventListeners
logoImage.addEventListener("click", introWindow);

mainWindow.add(logoImage);
navWindow.open();

