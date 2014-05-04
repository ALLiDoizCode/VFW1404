//Windows
var currentWindow = Ti.UI.currentWindow;

var imageView = Ti.UI.createImageView({
	image: "Images/UnitImages/Terrian/Command.jpg"
});

var imageSwitch = Ti.UI.createSwitch({
	value: true,
	top: "90%"
});
currentWindow.add(imageSwitch,imageView);

imageSwitch.addEventListener("change", function(e){
	if (imageSwitch.value === true) {
		//win.backgroundColor = "#000";
		//win.backgroundImage = "Images/UnitImages/Zerg/Ling.jpg";
		imageView.image = "Images/UnitImages/Terrian/Command.jpg";
	}else{
		//win.backgroundColor = "#fff";
		//win.backgroundImage = "Images/UnitImages/Zerg/bane.jpg";
		imageView.image = "Images/UnitImages/Terrian/orbitalcommand.jpg";
	}
});


Ti.API.info("Switch value: " + imageSwitch.value);