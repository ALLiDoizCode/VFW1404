var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "GalleryT");
var images = imageFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow = Ti.UI.currentWindow;


nextButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	title: "Next",
	bacgroundColor: "silver"
});
var firstImage = 0;

startImage = Ti.UI.createImageView({
	image: "GalleryT/" + images[firstImage],
	fileName: images[firstImage]
});

var randomImage = function(){
	firstImage = Math.floor(Math.random() * 7) + 1;
	startImage.image = "GalleryT/" + images[firstImage];
	if(firstImage = firstImage){
		firstImage = 0;
	}
};

currentWindow.add(startImage);
nextButton.addEventListener("click", randomImage);

currentWindow.add(nextButton);