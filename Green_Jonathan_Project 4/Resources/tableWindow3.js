//Data
var terrian = [{title: "Marine", description:"(Requires Barracks) The marine is the basic infantry unit of terran forces.", image: "Images/UnitImages/Terrian/Marine.png"}, 
			  {title: "Maurader", description:"(Requires Warpgate technology) The marauder is an early-game support unit, useful for supporting marines by slowing fast melee units. It is effective against armored units, like the roach. They are also powerful against stalkers, and, to a lesser extent, siege tanks, immortals and thors", image: "Images/UnitImages/Terrian/Marauder.jpg"}, 
			  {title: "Reaper", description:"(Requires Barracks) Reapers specialize in hit-and-run, close-quarters combat. They are more mobile than marines as their jet packs allow them to surmount obstacles independently. Reapers are clad in self-contained body suits,[2] and are armed with dual P-38 Scythe gauss pistols[1] and deuterium-eight demolition charges.[2]", image: "Images/UnitImages/Terrian/Reaper.png"}];

var currentWindow = Ti.UI.currentWindow;

//Views

//Tables
var unitTable = Ti.UI.createTableView({
	
});

var terrianSec = Ti.UI.createTableViewSection({
	headerTitle: "Barracks"
});

//FUNCTIONS
//Terrian function//
var terrianDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white"
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		var terrianImage = Ti.UI.createImageView({
			image: this.image,
			top: "38%",
			width: detailWindow.width,
			height: detailWindow.height
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top,	
		});
			//Function Labels
			var detailunitLabel = Ti.UI.createLabel({	
				text: this.title + " Unit",
				color: "black",
				textAlign: "center"
			});
		
		var terrianText = Ti.UI.createLabel({
			text: this.desc,
			font: {fontSize: 15, fontFamily: "Arial"},
			top: detailBorder.height + detailBorder.top + 40,
			left: 15,
			right: 15,
			top: "13%"
		});
		
		var closeWindow = function(){
			detailWindow.close();
		};
		
		// Function Element loaders	
		detailTextView.add(detailunitLabel);
		detailWindow.add(detailTextView, detailBorder, terrianText, terrianImage);
		
		currentWindow.nav.openWindow(detailWindow);	
};
	
//Load Data
var unitSections = [terrianSec];
unitTable.setData(unitSections);

//Rows
for(var i = 0, j=terrian.length; i<j; i++){
	var terrianRow = Ti.UI.createTableViewRow({
		title: terrian[i].title,
		desc: terrian[i].description,
		image: terrian[i].image,
		hasChild: true
	});
	terrianRow.addEventListener("click", terrianDetail);
	terrianSec.add(terrianRow);
	
};

unitTable.addEventListener("click", function(event){
	console.log(event);
});

//Element loaders
currentWindow.add(unitTable);

