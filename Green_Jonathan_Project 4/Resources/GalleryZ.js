var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "GalleryZ");
var images = imageFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow = Ti.UI.currentWindow;


/*GalleryView = createView({
	
});*/

nextButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	title: "Next",
	bacgroundColor: "silver"
});
var firstImage = 0;

startImage = Ti.UI.createImageView({
	image: "GalleryZ/" + images[firstImage],
	fileName: images[firstImage],
});

var randomImage = function(){
	firstImage = Math.floor(Math.random() * 8) + 1;
	startImage.image = "GalleryZ/" + images[firstImage];
	if(firstImage = firstImage){
		firstImage = 0;
	}
};

currentWindow.add(startImage);
nextButton.addEventListener("click", randomImage);

currentWindow.add(nextButton);

