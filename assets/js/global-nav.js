/*
 * globalNav module
 */
var globalNav = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let state = 'desktop';




    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        window.console && console.log('globalNav.initModule()');

		// Build elements from data
		// Deactivate for now until main functionality and design finalized
		// buildGlobalNav();

		initPanels();
		initTabs();
	};


	/*
	 * buildGlobalNav
	 */
	// var buildGlobalNav = function() {
	// 	window.console && console.log('globalNav.buildGlobalNav()');
	// };



	/* Panels */

	/*
	 * initPanels
	 */
	var initPanels = function() {
		window.console && console.log('globalNav.initMainButtons()');

		// Set default tab selection state
		switchPanel('closed'); //* Default should be null so no panels are open
		//switchPanel(0); // For debugging

		// Global Nav Button Event Listeners

		$('.global-nav-button').on('mouseenter', function(e){
			handleNavButtonMouseEnter(e, $(this));
		});

		$('.global-nav-button').on('mouseleave', function(e){
			handleNavButtonMouseLeave(e, $(this));
		});

		$('.global-nav-button').on('click', function(e){
			handleNavButtonClick(e, $(this));
		});

	};

	/*
	 * handleNavButtonMouseEnter
	 */
	var handleNavButtonMouseEnter = function(e, element) {
		window.console && console.log('globalNav.handleNavButtonMouseEnter()');
	};

	/*
	 * handleNavButtonMouseLeave
	 */
	var handleNavButtonMouseLeave = function(e, element) {
		window.console && console.log('globalNav.handleNavButtonMouseLeave()');
	};

	/*
	 * handleNavButtonClick
	 */
	var handleNavButtonClick = function(e, element) {
		window.console && console.log('globalNav.handleNavButtonClick()');
		window.console && console.log('index: ', element.attr('index'));

		if (!element.hasClass('selected')) {
			switchPanel(element.attr('index'));
		} else {
			switchPanel('closed');
		}
	};


	/*
	 * switchPanel
	 */
	var switchPanel = function(index) {
		window.console && console.log('globalNav.switchPanel()');
		window.console && console.log('index: ', index);

		// Reset selected
		$('.global-nav-button').removeClass('selected');
		$('.global-nav-panel').removeClass('selected');

		if (index != 'closed') {
			$('.global-nav-button[index="' + index + '"]').addClass('selected');
			$('.global-nav-panel[index="' + index + '"]').addClass('selected');
			$('.global-nav-panels').addClass('open');
		} else {
			$('.global-nav-panels').removeClass('open');
		}
	};





	/* Tabs */

	/*
	 * initTabs
	 */
	var initTabs = function() {
		window.console && console.log('globalNav.initTabs()');


		// Set default tab selection state
		switchTab(0);


		// Global Nav Button Event Listeners

		$('.global-nav-panel .tab-nav .tab-nav-button').on('mouseenter', function(e){
			handleTabButtonMouseEnter(e, $(this));
		});

		$('.global-nav-panel .tab-nav .tab-nav-button').on('mouseleave', function(e){
			handleTabButtonMouseLeave(e, $(this));
		});

		$('.global-nav-panel .tab-nav .tab-nav-button').on('click', function(e){
			handleTabButtonClick(e, $(this));
		});
	};

	/*
	 * handleTabButtonMouseEnter
	 */
	var handleTabButtonMouseEnter = function(e, element) {
		window.console && console.log('globalNav.handleTabButtonMouseEnter()');
	};

	/*
	 * handleTabButtonMouseLeave
	 */
	var handleTabButtonMouseLeave = function(e, element) {
		window.console && console.log('globalNav.handleTabButtonMouseLeave()');
	};

	/*
	 * handleTabButtonClick
	 */
	var handleTabButtonClick = function(e, element) {
		window.console && console.log('globalNav.handleTabButtonClick()');
		window.console && console.log('index: ', element.attr('index'));

		if (!element.hasClass('selected')) {
			switchTab(element.attr('index'));
		}
	};


	/*
	 * switchTab
	 */
	var switchTab = function(index) {
		window.console && console.log('globalNav.switchTab()');
		window.console && console.log('index: ', index);

		// Change tab button state
		$('.global-nav-panel .tab-nav .tab-nav-button').removeClass('selected');
		$('.global-nav-panel .tab-nav .tab-nav-button[index="' + index + '"]').addClass('selected');

		// Change tab state
		$('.global-nav-panel .tabs .tab').removeClass('selected');
		$('.global-nav-panel .tabs .tab[index="' + index + '"]').addClass('selected');
	};




	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'globalNav',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            window.console && console.log('globalNav.init()');
	    	initModule();
	    }
	};
})();
