/*
 * globalNav module
 */
var globalNav = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let state = 'desktop';
	let navBarHeight = 80;
	let scrollPosition;




    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('globalNav.initModule()');

		subscribeToEvents();

		// Build elements from data

		initPanels();
		initTabs();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('globalNav.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('globalNav.subscribeToEvents()');

		events.subscribe('globalNav', 'window-scroll');
		events.subscribe('globalNav', 'global-nav-button-mouseenter');
		events.subscribe('globalNav', 'global-nav-button-mouseleave');
		events.subscribe('globalNav', 'global-nav-button-click');
		events.subscribe('globalNav', 'global-nav-tab-mouseenter');
		events.subscribe('globalNav', 'global-nav-tab-mouseleave');
		events.subscribe('globalNav', 'global-nav-tab-click');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('globalNav.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'window-scroll':
				handleScroll();
			break;
			case 'global-nav-button-mouseenter':
				handleButtonMouseEnter(payload.event, payload.element);
			break;
			case 'global-nav-button-mouseleave':
				handleButtonMouseLeave(payload.event, payload.element);
			break;
			case 'global-nav-button-click':
				handleButtonClick(payload.event, payload.element);
			break;

			case 'global-nav-tab-mouseenter':
				handleTabMouseEnter(payload.event, payload.element);
			break;
			case 'global-nav-tab-mouseleave':
				handleTabMouseLeave(payload.event, payload.element);
			break;
			case 'global-nav-tab-click':
				handleTabClick(payload.event, payload.element);
			break;
		}
	};




	/*
	 * handleScroll
	 */
	var handleScroll = function() {
		console.log('globalNav.handleScroll()');

		// Close nav if open
		switchPanel('closed');
	};



	/* Panels */

	/*
	 * initPanels
	 */
	var initPanels = function() {
		console.log('globalNav.initMainButtons()');

		// Set default tab selection state
		switchPanel('closed'); //* Default should be null so no panels are open


		// Global Nav Button Event Listeners
		$('.global-nav-button').on('mouseenter', function(e){
			events.dispatch('global-nav-button-mouseenter', {event: e, element: $(this)});
		});

		$('.global-nav-button').on('mouseleave', function(e){
			events.dispatch('global-nav-button-mouseleave', {event: e, element: $(this)});
		});

		$('.global-nav-button').on('click', function(e){
			events.dispatch('global-nav-button-click', {event: e, element: $(this)});
		});

	};

	/*
	 * handleButtonMouseEnter
	 */
	var handleButtonMouseEnter = function(e, element) {
		//console.log('globalNav.handleButtonMouseEnter()');
	};

	/*
	 * handleButtonMouseLeave
	 */
	var handleButtonMouseLeave = function(e, element) {
		//console.log('globalNav.handleButtonMouseLeave()');
	};

	/*
	 * handleButtonClick
	 */
	var handleButtonClick = function(e, element) {
		console.log('globalNav.handleButtonClick()');
		console.log('index: ', element.attr('index'));

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
		console.log('globalNav.switchPanel()');
		console.log('index: ', index);

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
		console.log('globalNav.initTabs()');


		// Set default tab selection state
		switchTab(0);


		// Global Nav Button Event Listeners
		$('.global-nav-panel .tab-nav .tab-nav-button').on('mouseenter', function(e){
			events.dispatch('global-nav-tab-mouseenter', {event: e, element: $(this)});
		});

		$('.global-nav-panel .tab-nav .tab-nav-button').on('mouseleave', function(e){
			events.dispatch('global-nav-tab-mouseleave', {event: e, element: $(this)});
		});

		$('.global-nav-panel .tab-nav .tab-nav-button').on('click', function(e){
			events.dispatch('global-nav-tab-click', {event: e, element: $(this)});
		});
	};


	/*
	 * handleTabMouseEnter
	 */
	var handleTabMouseEnter = function(e, element) {
		//console.log('globalNav.handleTabMouseEnter()');
	};

	/*
	 * handleTabMouseLeave
	 */
	var handleTabMouseLeave = function(e, element) {
		//console.log('globalNav.handleTabMouseLeave()');
	};

	/*
	 * handleTabClick
	 */
	var handleTabClick = function(e, element) {
		console.log('globalNav.handleTabClick()');
		console.log('index: ', element.attr('index'));

		if (!element.hasClass('selected')) {
			switchTab(element.attr('index'));
		}
	};


	/*
	 * switchTab
	 */
	var switchTab = function(index) {
		console.log('globalNav.switchTab()');
		console.log('index: ', index);

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
            console.log('globalNav.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
		start: function(){
			console.log('globalNav.start()');
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
