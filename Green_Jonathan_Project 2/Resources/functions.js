//Data
var zerg = [{title: "Zergling", description:"(Requires spawning pool)Basic zerg offence unit twins spawn from one egg"},
		   {title: "Roach", description:"(Requires Roach warren) Heavy armoured zerg ground unit can borrow and move under ground"},
		   {title: "Queen", description:"Zerg Queen as the abilitiy to attack air aswell as ground injects hachary to increase larva production as well as place creep tumors to spread creep"}];

var protoss = [{title: "Zelot", description:"(Requires Warpgate technology) medium armour along with shields and two energy blades makes the zelot the strongest basic unit of all races" }, 
			  {title: "Staker", description:"(Requires Warpgate technology) medium armoured tosss ground unit can attack both air and ground and can learn the ability to teleport short distances(called blinking)" }, 
			  {title: "Guardian", description:"(Requires Warpgate technology) Defensivly and offensivly weak this unit relies on its bubble shield and and barrires to support other toss units" }];
			  
//FUNCTIONS

//zerg function//
var zergDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "Brown"
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			//Reserved Properties
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top
			
		});
		//Function Labels
			var detailunitLabel = Ti.UI.createLabel({	
			text: this.title,
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
			
		var returnButton = Ti.UI.createLabel({
				text: "Return",
				backgroundColor: "black",
				color: "silver",
				height: 50,
				font: {fontSize: 13, fontFamily: "Arial"},
				width: "100%",
				bottom: 0,
				textAlign: "center"
		});
		
		var closeWindow = function(){
			detailWindow.close();
		};
		
		//EventListener
		returnButton.addEventListener("click", closeWindow);
		
	// Function Element loaders		
	detailTextView.add(detailunitLabel);	
	detailWindow.add(detailTextView, detailBorder, zergText,returnButton);
	
	detailWindow.open();
};
//protoss function//
var tossDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "Blue"
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			//Reserved Properties
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top,	
		});
			//Function Labels
			var detailunitLabel = Ti.UI.createLabel({	
				text: this.title,
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
		
		var returnButton = Ti.UI.createLabel({
			text: "Return",
			backgroundColor: "black",
			color: "silver",
			height: 50,
			font: {fontSize: 13, fontFamily: "Arial"},
			width: "100%",
			bottom: 0,
			textAlign: "center"
		});
		
		var closeWindow = function(){
			detailWindow.close();
		};
		
		//EventListener
		returnButton.addEventListener("click", closeWindow);
		
		// Function Element loaders	
		detailTextView.add(detailunitLabel);
		detailWindow.add(detailTextView, detailBorder, tossText, returnButton);
		
		detailWindow.open();	
};

//Rows
for(var i=0, j=zerg.length; i<j; i++){
	var zergRow = Ti.UI.createTableViewRow({
		title: zerg[i].title,
		desc: zerg[i].description,
		hasChild: true
	});
	zergRow.addEventListener("click", zergDetail);
	zergSec.add(zergRow);
}

for(var i = 0, j=protoss.length; i<j; i++){
	var protossRow = Ti.UI.createTableViewRow({
		title: protoss[i].title,
		desc: protoss[i].description,
		hasChild: true
	});
	protossRow.addEventListener("click", tossDetail);
	protossSec.add(protossRow);
	
};