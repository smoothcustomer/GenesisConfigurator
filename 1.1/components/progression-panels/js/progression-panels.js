/*
 * progressionPanels module
 */
var progressionPanels = (function () {


 	// Private Vars
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------




    // Private Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('progressionPanels.initModule()');

		subscribeToEvents();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('progressionPanels.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('progressionPanels.subscribeToEvents()');

		//events.subscribe('progressionNav', 'window-resize');
		events.subscribe('progressionPanels', 'progression-nav-tab-select');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionNav.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'progression-nav-tab-select':
				handleTabSelect(payload.index, payload.label);
			break;
		}
	};


	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleTabSelect
	 */
	var handleTabSelect = function(index, label) {
		console.log('progressionPanels.handleTabSelect()');
		console.log('index', index);
		console.log('label', label);

		//
		// // Change tab state
		// $('#progression-nav .panels .panel').removeClass('selected');
		// $('#progression-nav .panels .panel[index="' + index + '"]').addClass('selected');
		$('#progression-panels').html(label);
	};






	// Public Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'progressionPanels',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('progressionPanels.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
		start: function(){
			console.log('progressionPanels.start()');
			startModule();
		},

		/*
		 * event
		 */
		event: function(eventName, payload){
            console.log('progressionPanels.event()');
	    	handleEvent(eventName, payload);
	    }
	};
})();
