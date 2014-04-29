
//Data
var imageFolder = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "Images");
var imageList = imageFolder.getDirectoryListing();

//FUNCTIONS//
var openPicture = function(){
var windowTag = Titanium.UI.createWindow({
	title:"Tag",
	backgroundColor: "#black",
});
var viewContainer = Titanium.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	showVerticalScrollIndicator: true,
	width: pWidth,
	contentWidth: pWidth,
	height:pHeight
	
});
var imageRow = function(){
	for (var i = 0, j = imageList.length;  i < j;  i++){
	var rowImage = Titanium.UI.createImageView({
		image: "Images/" + imageList[i],
		top: 5,
		left: 5,
		width: size,
		height: size,
		borderRadius: 5,
		borderWidth: 4,
		borderColor: "#black"
});
var fullImage = function(imageFile){
	var windowFull = Titanium.UI.createWindow({
		title: "Full Image",
		backgroundColor: "#black",
		layout: "vertical"
});
var loadImage = Titanium.UI.createImageView({
	image: imageFile.image,
	width: pWidth,
	borderWidth: 2,
	borderColor: "#silver"
});
var imageText = Titanium.UI.createLabel({
	top: 5,
	text: imageFile.image,
	fontSize: 20,
	color: "#white"
});
	windowFull.add(loadImage, imageText);
	window1.openWindow(windowFull);
};
	viewContainer.add (rowImage);
	windowTag.add(viewContainer);
};
	viewContainer.addEventListener("click" , function(event){
	fullImage(event.source);
});
};
	imageRow();
	window1.openWindow(windowTag);
};
	button.addEventListener("click", openPicture);
