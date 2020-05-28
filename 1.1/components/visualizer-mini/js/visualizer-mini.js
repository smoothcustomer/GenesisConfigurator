/*
 * visualizerMini module
 */
var visualizerMini = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let active = false;






    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('visualizerMini.initModule()');

		subscribeToEvents();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('visualizerMini.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('visualizerMini.subscribeToEvents()');

		events.subscribe('visualizerMini', 'show-visualizer-mini');
		events.subscribe('visualizerMini', 'hide-visualizer-mini');
	};


	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('visualizerMini.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'show-visualizer-mini':
				showVisualizerMini();
			break;
			case 'hide-visualizer-mini':
				hideVisualizerMini();
			break;
		}
	};




	/*
	 * showVisualizerMini
	 */
	var showVisualizerMini = function(animation = true) {


		const currentLabel = progressionNav.getCurrentLabel();
		

		if (!active && currentLabel != 'models') {
			console.log('-------------------------------');
			console.log('visualizerMini.showVisualizerMini()');

			active = true;

			$('#visualizer-mini').css('display', 'block');

			TweenMax.killTweensOf($('#visualizer-mini'));
			TweenMax.to( $('#visualizer-mini'), 0, { opacity: 0, y: 40, scale: 0.9 });
			TweenMax.to( $('#visualizer-mini'), 0.6, { opacity: 1, y: 0, scale: 1, ease: Power2.easeOut });
		}
	}



	/*
	 * hideVisualizerMini
	 */
	var hideVisualizerMini = function(animation = true) {


		if (active) {
			console.log('-------------------------------');
			console.log('visualizerMini.hideVisualizerMini()');

			active = false;

			TweenMax.killTweensOf($('#visualizer-mini'));
			TweenMax.to( $('#visualizer-mini'), 0.6, { opacity: 0, y: 40, scale: 0.9, ease: Power2.easeOut, onComplete: function(){
				$('#visualizer-mini').css('display', 'none');
			}});

		}
	}






	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'visualizerMini',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('visualizerMini.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            console.log('visualizerMini.start()');
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
