/*
 * windowListeners module
 */
var windowListeners = (function () {


 	// Private Vars
 	// ---------------------------------------------------------



    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('windowListeners.initModule()');

		initWindowListeners();
	};

	/*
	 * initWindowListeners
	 */
	var initWindowListeners = function() {
		console.log('configurator.initWindowListeners()');

		// Scroll Event
		$(document).on('scroll', handleScroll);

		// Resize Event
		$(window).on('resize', handleResize);
	};

	/*
	 * handleScroll
	 */
	var handleScroll = function(e) {
		let scrollPosition = $(document).scrollTop();
		events.dispatch('window-scroll', { scrollPosition: scrollPosition });
	};

	/*
	 * handleResize
	 */
	var handleResize = function(e) {
		let windowWidth = $(window).width();
		let windowHeight = $(window).height();
		events.dispatch('window-resize', { windowWidth: windowWidth, windowHeight: windowHeight });
	};



	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'windowListeners',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('windowListeners.init()');

	    	initModule();
	    }
	};
})();
