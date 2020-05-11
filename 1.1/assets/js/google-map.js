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
        console.log('googleMap.initModule()');

		if (googleMapsReady) {
			ready = true;
		}
	};

	/*
	 * loadGoogleMap
	 */
	var loadGoogleMap = function() {
		console.log('googleMap.loadGoogleMap()');

		if (ready) {
			console.log('Load a new map!');
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
            console.log('googleMap.init()');
	    	initModule();
	    },

		/*
		 * loadMap
		 */
		loadMap: function(){
			console.log('googleMap.loadMap()');
			loadGoogleMap();
		}
	};
})();
