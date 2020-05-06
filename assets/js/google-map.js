/*
 * googleMap module
 */
var googleMap = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let ready = false;



    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        window.console && console.log('googleMap.initModule()');

		if (googleMapsReady) {
			ready = true;
		}
	};

	/*
	 * loadGoogleMap
	 */
	var loadGoogleMap = function() {
		window.console && console.log('googleMap.loadGoogleMap()');

		if (ready) {
			window.console && console.log('Load a new map!');
		}
	};



	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'googleMap',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            window.console && console.log('googleMap.init()');
	    	initModule();
	    },

		/*
		 * loadMap
		 */
		loadMap: function(){
			window.console && console.log('googleMap.loadMap()');
			loadGoogleMap();
		}
	};
})();
