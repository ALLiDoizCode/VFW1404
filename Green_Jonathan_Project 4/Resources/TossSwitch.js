//Windows
var currentWindow = Ti.UI.currentWindow;

var imageView = Ti.UI.createImageView({
	image: "Images/UnitImages/Toss/Templar.jpg"
});

var imageSwitch = Ti.UI.createSwitch({
	value: true,
	top: "93%"
});
currentWindow.add(imageSwitch,imageView);

imageSwitch.addEventListener("change", function(e){
	if (imageSwitch.value === true) {
		//win.backgroundColor = "#000";
		//win.backgroundImage = "Images/UnitImages/Zerg/Ling.jpg";
		imageView.image = "Images/UnitImages/Toss/Templar.jpg";
	}else{
		//win.backgroundColor = "#fff";
		//win.backgroundImage = "Images/UnitImages/Zerg/bane.jpg";
		imageView.image = "Images/UnitImages/Toss/archon.jpg";
	}
});


Ti.API.info("Switch value: " + imageSwitch.value);