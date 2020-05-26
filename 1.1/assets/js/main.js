
/*
 * js app framework 1.0
 */


/*
 * Window ready event
 */
$(window).load(function() {
	// console.log('$(window).ready');

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
		// console.log('app.initApp()');

		// NOTE
		// Font loading is not working for some reason
		// deactivating for now

		// Google font loader
		//loadFonts();

		// Listen for fonts to be finished loading
		//$(window).on('fontsloaded', function(){
			//console.log('fonts loaded');

			initModules();
			startModules();
		//});
	};


	/*
	 * initModules
	 * Load data, set initial state, define event listeners
	 * No events should be called in these methods, only in startModules
	 */
	var initModules = function() {
		// console.log('app.initModules()');

		// Init core modules
		events.init();
		windowState.init();

		// Init component modules
		globalNav.init();
		progressionNav.init();
		progressionPanels.init();
		progressionPanelColors.init();
		visualizer.init();
		visualizerUI.init();
		visualizer360.init();
	};


	/*
	 * startModules
	 */
	var startModules = function() {
		// console.log('app.startModules()');

		// Start core modules
		windowState.start();

		// Start component modules
		globalNav.start();
		progressionNav.start();
		progressionPanels.start();
		progressionPanelColors.start();
		visualizer.start();
		visualizerUI.start();
		visualizer360.start();

		// Show body
		$('body').removeClass('hidden');
	};


	/*
	 * Google Web Font Loader
	 * Loads fonts before calling initialization so that
	 * elements do not change size after fonts load.
	 */
	loadFonts = function(){
		// console.log('app.loadFonts()');

		WebFont.load({
			custom: {
			    families: [
			    	'GenesisSansHead-Light',
			    	'GenesisSansHead-Regular',
			    	'GenesisSansText-Bold',
			    	'GenesisSansText-Medium'
					//,'GenesisSansText'
			    ],
				urls: ['assets/css/fonts.css']
			},
			loading: function() {
				// console.log('fonts loading');
			},
			fontloading: function(fontFamily, fontDescription) {
				// console.log(fontFamily+' loading');
			},
			fontactive: function(fontFamily, fontDescription) {
				// console.log(fontFamily+' active');
			},
			fontinactive: function(fontFamily, fontDescription) {
				// console.log(fontFamily+' inactive');
			},
			active: function() {
				// console.log('fonts load complete');
				$(window).trigger('fontsloaded');
			},
			inactive: function() {
				// console.log('fonts load failed');
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
			// console.log('app.init()');

			initApp();
		}
	};
})();
