//Data
var zerg = [{title: "Zergling", description:"(Requires spawning pool)Basic zerg offence unit twins spawn from one egg", image: "Images/UnitImages/Zerg/Ling.jpg"},
		   {title: "Roach", description:"(Requires Roach warren) Heavy armoured zerg ground unit can borrow and move under ground", image: "Images/UnitImages/Zerg/Roach.jpg"},
		   {title: "Queen", description:"Zerg Queen as the abilitiy to attack air aswell as ground injects hachary to increase larva production as well as place creep tumors to spread creep", image: "Images/UnitImages/Zerg/Queen.jpg"}];

var currentWindow = Ti.UI.currentWindow;

//Views

//Tables
var unitTable = Ti.UI.createTableView({
	//top: myBorder.top + myBorder.height
});

var zergSec = Ti.UI.createTableViewSection({
	headerTitle: "Hachery Units"
	
});

//FUNCTIONS
//zerg function//
var zergDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white",
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			//Reserved Properties
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		
		var zergImage = Ti.UI.createImageView({
			image: this.image,
			top: "36%",
			width: detailWindow.width,
			height: detailWindow.height
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top
			
		});
		//Function Labels
			var detailunitLabel = Ti.UI.createLabel({	
			text: this.title + " Unit",
			color: "black",
			textAlign: "center"
		});
		
		var zergText = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize: 15, fontFamilly: "Arial"},
				top: detailBorder.height + detailBorder.top + 40,
				left: 15,
				right: 15
			});		
		
		var closeWindow = function(){
			detailWindow.close();
		};		
		
	// Function Element loaders		
	detailTextView.add(detailunitLabel);	
	detailWindow.add(detailTextView, detailBorder, zergText, zergImage);
	
	currentWindow.nav.openWindow(detailWindow);
};
	
//Load Data
var unitSections = [zergSec];
unitTable.setData(unitSections);

//Rows
for(var i=0, j=zerg.length; i<j; i++){
	var zergRow = Ti.UI.createTableViewRow({
		title: zerg[i].title,
		desc: zerg[i].description,
		image: zerg[i].image,
		hasChild: true
	});
	zergRow.addEventListener("click", zergDetail);
	zergSec.add(zergRow);
}

unitTable.addEventListener("click", function(event){
	console.log(event);
});

//Element loaders
currentWindow.add(unitTable);





