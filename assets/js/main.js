
/*
 * js app framework 1.0
 */


/*
 * Window ready event
 */
$(window).load(function() {
	window.console && console.log('$(window).ready');

	// Initialize app
	app.init();
});



/*
 * app module
 */
var app = (function(){

	/*
	 * initModule
	 */
	var initApp = function() {
		window.console && console.log('app.initApp()');

		// Google font loader
		loadFonts();

		// Listen for fonts to be finished loading
		$(window).on('fontsloaded', function(){
			window.console && console.log('fonts loaded');

			initModules();
		});
	};

	/*
	 * initModules
	 */
	var initModules = function() {
		window.console && console.log('app.initModules()');

		globalNav.init();
		configurator.init();
		//googleMap.init();
	};

	/*
	 * Google Web Font Loader
	 * Loads fonts before calling initialization so that
	 * elements do not change size after fonts load.
	 */
	loadFonts = function(){
		window.console && console.log('app.loadFonts()');

		WebFont.load({
			custom: {
			    families: [
			    	'GenesisSansHead-Light',
			    	'GenesisSansHead-Regular',
			    	'GenesisSansText-Bold',
			    	'GenesisSansText-Medium',
			    	'GenesisSansText'
			    ],
				urls: ['assets/css/fonts.css']
			},
			loading: function() {
				console.log('fonts loading');
			},
			fontloading: function(fontFamily, fontDescription) {
				console.log(fontFamily+' loading');
			},
			fontactive: function(fontFamily, fontDescription) {
				console.log(fontFamily+' active');
			},
			fontinactive: function(fontFamily, fontDescription) {
				console.log(fontFamily+' inactive');
			},
			active: function() {
				console.log('fonts load complete');
				$(window).trigger('fontsloaded');
			},
			inactive: function() {
				console.log('fonts load failed');
				$(window).trigger('fontsloaded');
			}
		});
	};




	// Public Methods
	// ---------------------------------------------------------

	return {
        name: 'app',

		/*
		 * init
		 */
		init: function(page){
			window.console && console.log('app.init()');

			initApp();
		}
	};
})();
