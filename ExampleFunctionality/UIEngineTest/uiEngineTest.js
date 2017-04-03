// UI engine test

var STATE_UI_LOADING				= 0;
var STATE_UI_TRANS_LOAD_TO_HOUSE 	= 1;
var STATE_UI_HOUSE					= 2;
var STATE_UI_TRANS_HOUSE_TO_ROOM	= 3;
var STATE_UI_ROOM_ACTIVE			= 4;
var STATE_UI_TRANS_ROOM_TO_HOUSE	= 5;
var STATE_UI_TRANS_ROOM_TO_FURN		= 6;
var STATE_UI_FURNITURE				= 7;

var enableDebug = true;

function StartUITest() {
	UIEngine.Initialise();
}

function HasLoadedAll() {
	return true;
}

function SetState (state) {
	UIEngine.SetNextState(state);
}

function Update() {
	UIEngine.Update();
}

function EnableButton(buttonID) {
	var buttonRef = document.getElementById(buttonID);
	
	buttonRef.removeAttribute("disabled");
}
function DisableButton(buttonID) {
	var buttonRef = document.getElementById(buttonID);
	
	buttonRef.setAttribute("disabled", true);
}

var UIEngine = {
	Initialise : function() {
		this.state = STATE_UI_LOADING;
		this.nextState = this.state;
		window.setInterval(Update, 50);
		
		DisableButton("BUTTON_STATE_UI_LOADING");
		EnableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
		DisableButton("BUTTON_STATE_UI_HOUSE");
		DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
		DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
		DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
		DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
		DisableButton("BUTTON_STATE_UI_FURNITURE");
		
		if (enableDebug) {
			var debugArea = document.getElementById("debugArea");
			debugArea.innerHTML = "Current State: " + this.state.toString();
		}
	},
	Update : function() {
		if (enableDebug) {
			var debugArea = document.getElementById("debugArea");
			debugArea.innerHTML = "Current State: " + this.state.toString();
		}
		
		if (this.nextState != this.state) {
			switch(this.nextState) {
			case STATE_UI_LOADING:
				DisableButton("BUTTON_STATE_UI_LOADING");
				EnableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_TRANS_LOAD_TO_HOUSE:
				EnableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				EnableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_HOUSE:
				DisableButton("BUTTON_STATE_UI_LOADING");
				EnableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_HOUSE");
				EnableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_TRANS_HOUSE_TO_ROOM:
				DisableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				EnableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				EnableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_ROOM_ACTIVE:
				DisableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_HOUSE");
				EnableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				EnableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				EnableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_TRANS_ROOM_TO_HOUSE:
				DisableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				EnableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				EnableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_TRANS_ROOM_TO_FURN:
				DisableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				EnableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				EnableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			case STATE_UI_FURNITURE:
				DisableButton("BUTTON_STATE_UI_LOADING");
				DisableButton("BUTTON_STATE_UI_TRANS_LOAD_TO_HOUSE");
				DisableButton("BUTTON_STATE_UI_HOUSE");
				DisableButton("BUTTON_STATE_UI_TRANS_HOUSE_TO_ROOM");
				DisableButton("BUTTON_STATE_UI_ROOM_ACTIVE");
				DisableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_HOUSE");
				EnableButton("BUTTON_STATE_UI_TRANS_ROOM_TO_FURN");
				DisableButton("BUTTON_STATE_UI_FURNITURE");
				break;
			default:
				break;
			}
			this.state = this.nextState;
		}
	},
	SetNextState : function(state) {
		this.nextState = state;
	},
	GetState : function() {
		return this.state;
	}
}