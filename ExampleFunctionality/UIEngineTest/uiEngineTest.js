// UI engine test

var STATE_UI_HOUSE			= 0;
var STATE_UI_TRANSITION 	= 1;
var STATE_UI_ROOM_ACTIVE	= 2;

function StartUITest() {
	UIEngine.Initialise();
}

var UIEngine = {
	Initialise : function() {
		this.state = STATE_UI_INIT;
	},
	GetState : function() {
		return this.state;
	}
}