/*
 * visualizer module
 */
var visualizer = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let windowWidth, windowHeight, scrollPosition = 0;
	let active = null;
	let visualizerHeight = 0;
	let maxAspectRatio = 2.5;
	let visualizerMinHeight = 0;
	let visualizerWindowPadding = 400;
	let initialPageLoad = true;






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

		events.subscribe('visualizer', 'window-scroll');
		events.subscribe('visualizer', 'window-resize');
		events.subscribe('visualizer', 'progression-nav-tab-select');
		events.subscribe('visualizer', 'hide-visualizer');
		events.subscribe('visualizer', 'show-visualizer');
	};


	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		console.log('visualizer.handleEvent()');
		console.log('eventName: ', eventName);
		console.log('payload: ', payload);

		switch(eventName) {
			case 'window-scroll':
				handleScroll(payload.scrollPosition);
			break;
			case 'window-resize':
				handleResize(payload.windowWidth, payload.windowHeight);
			break;
			case 'progression-nav-tab-select':
				handleNavTabSelect(payload.label);
			break;
			case 'hide-visualizer':
				hideVisualizer(payload.animation);
			break;
			case 'show-visualizer':
				showVisualizer(payload.animation);
			break;
		}
	};


	/*
	 * handleNavTabSelect
	 */
	var handleNavTabSelect = function(label) {
		console.log('visualizer.handleNavTabSelect()');

		// Hide visualizer on model selection step
		if (label == 'models') {
			if (initialPageLoad) {
				initialPageLoad = false;
				events.dispatch('hide-visualizer', {animation: false});
			} else {
				events.dispatch('hide-visualizer', {animation: true});
			}


		// Show visualizer for all other steps
		} else {
			if (initialPageLoad) {
				initialPageLoad = false;
				events.dispatch('show-visualizer', {animation: false});
			} else {
				events.dispatch('show-visualizer', {animation: true});
			}
		}
	}


	/*
	 * hideVisualizer
	 */
	var hideVisualizer = function(animation = true) {

		let speed1 = 0.3;
		let speed2 = 0.6;
		if (!animation) {
			speed1 = 0;
			speed2 = 0;
		}

		if (active || active == null) {
			console.log('visualizer.hideVisualizer()');

			active = false;
			TweenMax.killTweensOf($('#visualizer'));
			TweenMax.killTweensOf($('#visualizer .stage'));
			//TweenMax.to( $('#visualizer .stage'), speed1, { opacity: 0, ease: Power2.easeOut });
			//TweenMax.to( $('#visualizer'), speed2, { height: 0, ease: Power2.easeOut, delay: speed1 });

			TweenMax.to( $('#visualizer .stage'), 0, { opacity: 0, ease: Power2.easeOut });
			TweenMax.to( $('#visualizer'), 0, { height: 0, ease: Power2.easeOut });
		}
	}

	/*
	 * showVisualizer
	 */
	var showVisualizer = function(animation = true) {

		let speed1 = 1.2;
		let speed2 = 0.9;
		if (!animation) {
			speed1 = 0;
			speed2 = 0;
		}

		if (!active) {
			console.log('visualizer.showVisualizer()');

			active = true;
			TweenMax.killTweensOf($('#visualizer'));
			TweenMax.killTweensOf($('#visualizer .stage'));
			//TweenMax.to( $('#visualizer'), speed1, { height: visualizerHeight, ease: Power2.easeOut });
			//TweenMax.to( $('#visualizer .stage'), speed2, { opacity: 1, ease: Power2.easeOut, delay: speed1 });

			TweenMax.to( $('#visualizer'), 0, { height: visualizerHeight, ease: Power2.easeOut });
			TweenMax.to( $('#visualizer .stage'), 0.6, { opacity: 1, ease: Power2.easeOut });
		}
	}


	/*
	 * handleScroll
	 */
	var handleScroll = function(_scrollPosition) {
		// console.log('visualizer.handleScroll()');

		scrollPosition = _scrollPosition;


		setVisualizerHeight(true);
	}

	/*
	 * handleResize
	 */
	var handleResize = function(_windowWidth, _windowHeight) {
		// console.log('visualizer.handleResize()');
		// console.log('_windowWidth: ', _windowWidth);
		// console.log('_windowHeight: ', _windowHeight);


		windowWidth = _windowWidth;
		windowHeight = _windowHeight;


		setVisualizerHeight(false);
	}


	/*
	 * setVisualizerHeight
	 */
	var setVisualizerHeight = function(animate = false) {
		console.log('visualizer.setVisualizerHeight()');

		// Aspect ratio stuff

		// Set mobile visualizer height
		if (windowWidth < 1024) {
			visualizerHeight = (parseInt(windowHeight) * 0.6) - 50;

		// Set desktop visualizer height
		} else {
			visualizerHeight = parseInt(windowHeight) - parseInt(visualizerWindowPadding) - parseInt(scrollPosition);

			// Adjust for max aspect ratio
			let newAspectRatio = windowWidth / visualizerHeight;
			if ( newAspectRatio > maxAspectRatio ) {
				visualizerHeight = windowWidth / maxAspectRatio;
			}
		}

		console.log('scrollPosition: ', scrollPosition);
		console.log('visualizerWindowPadding: ', visualizerWindowPadding);
		console.log('visualizerHeight: ', visualizerHeight);

		// Set visualizer height if active
		if (active || active == null) {

			if (animate) {
				TweenMax.to( $('#visualizer'), 0.6, { height: visualizerHeight, ease: Power2.easeOut });
			} else {
				$('#visualizer').css('height', visualizerHeight);
			}
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
