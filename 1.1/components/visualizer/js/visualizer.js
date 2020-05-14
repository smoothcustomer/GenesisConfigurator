/*
 * visualizer module
 */
var visualizer = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	// let visualizerHeight;
	// let scrollPosition;




    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('visualizer.initModule()');

		subscribeToEvents();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('visualizer.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('visualizer.subscribeToEvents()');

		events.subscribe('visualizer', 'progression-nav-tab-select');
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
				handleNavTabSelect(payload.label);
			break;
		}
	};


	/*
	 * handleNavTabSelect
	 */
	var handleNavTabSelect = function(label) {
		console.log('visualizer.handleNavTabSelect()');

		if (label == 'models') {
			$('#configurator').addClass('hide-visualizer');
		} else {
			$('#configurator').removeClass('hide-visualizer');
		}

	}



	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'visualizer',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('visualizer.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            console.log('visualizer.start()');
	    	startModule();
	    },

		/*
		 * event
		 */
		event: function(eventName, payload){
	    	handleEvent(eventName, payload);
	    }
	};
})();
