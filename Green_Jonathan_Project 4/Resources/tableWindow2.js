//Data
var protoss = [{title: "Zelot", description:"(Requires Warpgate technology) medium armour along with shields and two energy blades makes the zelot the strongest basic unit of all races", image: "Images/UnitImages/Toss/Zelot.jpg" }, 
			  {title: "Stalker", description:"(Requires Warpgate technology) medium armoured tosss ground unit can attack both air and ground and can learn the ability to teleport short distances(called blinking)", image: "Images/UnitImages/Toss/stalker.png" }, 
			  {title: "Sentry", description:"(Requires Warpgate technology) Defensivly and offensivly weak this unit relies on its bubble shield and and barrires to support other toss units", image: "Images/UnitImages/Toss/sentry.png" }];

var currentWindow = Ti.UI.currentWindow;

//Tables
var unitTable = Ti.UI.createTableView({
	
});

var protossSec = Ti.UI.createTableViewSection({
	headerTitle: "WarpGate Units"
});

//FUNCTIONS
//protoss function//
var tossDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white"
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			//Reserved Properties
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		
		var TossImage = Ti.UI.createImageView({
			image: this.image,
			top: "36%",
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
		
		var tossText = Ti.UI.createLabel({
			text: this.desc,
			font: {fontSize: 15, fontFamily: "Arial"},
			top: detailBorder.height + detailBorder.top + 40,
			left: 15,
			right: 15
		});
			
		var closeWindow = function(){
			detailWindow.close();
		};
			
		// Function Element loaders	
		detailTextView.add(detailunitLabel);
		detailWindow.add(detailTextView, detailBorder, tossText, TossImage);
		
		currentWindow.nav.openWindow(detailWindow);	
};
	
//Load Data
var unitSections = [protossSec];
unitTable.setData(unitSections);

//Rows
for(var i = 0, j=protoss.length; i<j; i++){
	var protossRow = Ti.UI.createTableViewRow({
		title: protoss[i].title,
		desc: protoss[i].description,
		image: protoss[i].image,
		hasChild: true
	});
	protossRow.addEventListener("click", tossDetail);
	protossSec.add(protossRow);
	
};

unitTable.addEventListener("click", function(event){
	console.log(event);
});

//Element loaders

currentWindow.add(unitTable);





