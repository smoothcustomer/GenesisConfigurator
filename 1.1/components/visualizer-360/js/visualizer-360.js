/*
 * visualizer360 module
 */
var visualizer360 = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let active = null;



    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('visualizer360.initModule()');

		subscribeToEvents();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('visualizer360.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('visualizer360.subscribeToEvents()');

		events.subscribe('visualizer360', 'hide-visualizer');
		events.subscribe('visualizer360', 'show-visualizer');
	};


	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionNav.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'hide-visualizer':
				hideVisualizer360();
			break;
			case 'show-visualizer':
				showVisualizer360();
			break;
		}
	};


	/*
	 * hideVisualizer
	 */
	var hideVisualizer360 = function() {
		if (active || active == null) {
			console.log('visualizer360.hideVisualizer360()');
			active = false;
		}
	}

	/*
	 * showVisualizer
	 */
	var showVisualizer360 = function() {
		if (!active) {
			console.log('visualizer360.showVisualizer360()');
			active = true;
		}
	}







	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'visualizer360',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('visualizer360.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            console.log('visualizer360.start()');
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
