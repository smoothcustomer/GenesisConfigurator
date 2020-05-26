/*
 * windowState module
 */
var windowState = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let scrollPosition = 0;


    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        // console.log('windowState.initModule()');

		subscribeToEvents();
		initWindowListeners();
	};

	/*
	 * startModule
	 */
	var startModule = function() {
		// console.log('windowState.startModule()');
	}

	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('windowState.subscribeToEvents()');

		events.subscribe('windowState', 'progression-nav-models-transition');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('windowState.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'progression-nav-models-transition':
				scrollPageToTop();
			break;
		}
	};




	/*
	 * initWindowListeners
	 */
	var initWindowListeners = function() {
		// console.log('windowState.initWindowListeners()');

		// Scroll Event
		$(document).on('scroll', handleScroll);

		// Resize Event
		$(window).on('resize', handleResize);

		// Hashchange Event
		$(window).on('hashchange', handleHashchange);
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('windowState.startModule()');

		$(window).trigger('resize');
	};




	// Scrolling
	// ---------------------------------------------------------

	/*
	 * handleScroll
	 */
	var handleScroll = function(e) {
		scrollPosition = $(document).scrollTop();
		events.dispatch('window-scroll', { scrollPosition: scrollPosition });
	};

	/*
	 * scrollPageToTop
	 */
	var scrollPageToTop = function() {
		console.log('windowState.scrollPageToTop()');
		console.log('scrollPosition: ', scrollPosition);

		if (scrollPosition > 80) {
			//$(document).scrollTop(80);
			//gsap.to($(window), { duration: 1, scrollTo: { y: 80 }, ease: Power2.easeOut });
		}

	};



	// Resize
	// ---------------------------------------------------------

	/*
	 * handleResize
	 */
	var handleResize = function(e) {
		let windowWidth = $(window).width();
		let windowHeight = $(window).height();
		events.dispatch('window-resize', { windowWidth: windowWidth, windowHeight: windowHeight });
	};



	// Hashchange
	// ---------------------------------------------------------

	/*
	 * handleHashchange
	 */
	var handleHashchange = function(e) {
		events.dispatch('window-hashchange', {});
	};









	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'windowState',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            // console.log('windowState.init()');

	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            // console.log('windowState.start()');
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
