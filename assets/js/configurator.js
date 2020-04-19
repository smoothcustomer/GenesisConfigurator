/*
 * configurator module
 */
var configurator = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	//let state = 'desktop';




    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        window.console && console.log('configurator.initModule()');

		initScrollManager();
	};



	/*
	 * initScrollManager
	 */
	var initScrollManager = function() {
		window.console && console.log('configurator.initScrollManager()');

	};



	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'configurator',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            window.console && console.log('configurator.init()');
	    	initModule();
	    }
	};
})();
