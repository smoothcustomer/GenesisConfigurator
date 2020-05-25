/*
 * visualizerUI module
 */
var visualizerUI = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let active = null;



    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('visualizerUI.initModule()');

		subscribeToEvents();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('visualizerUI.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('visualizerUI.subscribeToEvents()');

		events.subscribe('visualizerUI', 'hide-visualizer');
		events.subscribe('visualizerUI', 'show-visualizer');
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
				hideVisualizerUI();
			break;
			case 'show-visualizer':
				showVisualizerUI();
			break;
		}
	};


	/*
	 * hideVisualizer
	 */
	var hideVisualizerUI = function() {
		if (active || active == null) {
			console.log('visualizerUI.hidevisualizerUI()');
			active = false;

			TweenMax.killTweensOf($('#visualizer .ui'));
			TweenMax.to( $('#visualizer .ui'), 0.3, { opacity: 0, ease: Power2.easeOut });
		}
	}

	/*
	 * showVisualizer
	 */
	var showVisualizerUI = function() {
		if (!active) {
			console.log('visualizerUI.showvisualizerUI()');
			active = true;

			TweenMax.killTweensOf($('#visualizer .ui'));
			TweenMax.to( $('#visualizer .ui'), 0.6, { opacity: 1, ease: Power2.easeOut, delay: 1.2 });
		}
	}







	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'visualizerUI',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('visualizerUI.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            console.log('visualizerUI.start()');
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
