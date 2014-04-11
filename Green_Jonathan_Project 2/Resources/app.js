// background color & Window
Ti.UI.setBackgroundColor("#000");


var mainWindow = Ti.UI.createWindow({
	// Reserved Properties	
	backgroundColor: "#61C8EB"	
});

//Views
var myTextView = Ti.UI.createView({
	//Reserved Properties
	backgroundColor: "#white",
	height: 65,
	top: 0			
});

var myBorder = Ti.UI.createView({
	backgroundColor: "black",
	height: 2,
	top: myTextView.height + myTextView.top
	
});

//Labels
var unitLabel = Ti.UI.createLabel({	
	text: "Race Tech 1",
	color: "black",
	textAlign: "center"
	
});

//Tables
var unitTable = Ti.UI.createTableView({
	top: myBorder.top + myBorder.height
});

var protossSec = Ti.UI.createTableViewSection({
	headerTitle: "WarpGate Units"
});

var zergSec = Ti.UI.createTableViewSection({
	headerTitle: "Hachery Units"
	
});


	
//Load Data
var unitSections = [zergSec,protossSec];
unitTable.setData(unitSections);

				
var loadFunkyTown = require("functions");

//Element loaders
myTextView.add(unitLabel);
mainWindow.add(myTextView, myBorder, unitTable);
mainWindow.open();

