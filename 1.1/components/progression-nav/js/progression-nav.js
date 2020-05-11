/*
 * progressionNav module
 */
var progressionNav = (function () {


 	// Private Vars
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------




    // Private Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------


	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('progressionNav.initModule()');

		subscribeToEvents();
		initTabs();
	};

	/*
	 * startModule
	 */
	var startModule = function() {
		console.log('progressionNav.startModule()');

		startTabs();
	};



	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		console.log('progressionNav.subscribeToEvents()');

		//events.subscribe('progressionNav', 'window-resize');
		events.subscribe('progressionNav', 'window-scroll');
		events.subscribe('progressionNav', 'progression-nav-tab-mouseenter');
		events.subscribe('progressionNav', 'progression-nav-tab-mouseleave');
		events.subscribe('progressionNav', 'progression-nav-tab-click');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionNav.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'window-scroll':
				handleScroll(payload.scrollPosition);
			break;
			case 'progression-nav-tab-mouseenter':
				handleTabMouseEnter(payload.event, payload.element);
			break;
			case 'progression-nav-tab-mouseleave':
				handleTabMouseLeave(payload.event, payload.element);
			break;
			case 'progression-nav-tab-click':
				handleTabClick(payload.event, payload.element);
			break;
		}
	};


	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleScroll
	 */
	var handleScroll = function(scrollPosition) {
		console.log('progressionNav.handleScroll()');
		console.log('scrollPosition: ', scrollPosition);

		if (scrollPosition >= 80) {
			if (!$('#progression-nav').hasClass('sticky')) {
				$('#progression-nav').addClass('sticky');
			}
		} else if (scrollPosition < 80) {
			if ($('#progression-nav').hasClass('sticky')) {
				$('#progression-nav').removeClass('sticky');
			}
		}
	};

	/*
	 * handleTabMouseEnter
	 */
	var handleTabMouseEnter = function(e, element) {
		//console.log('progressionNav.handleTabMouseEnter()');
	};

	/*
	 * handleTabMouseLeave
	 */
	var handleTabMouseLeave = function(e, element) {
		//console.log('progressionNav.handleTabMouseLeave()');
	};

	/*
	 * handleTabClick
	 */
	var handleTabClick = function(e, element) {
		console.log('progressionNav.handleTabClick()');

		if (!element.hasClass('selected')) {
			let index = element.attr('index');
			let label = element.attr('label');

			selectTab(index, label);
			events.dispatch('progression-nav-tab-select', {index: index, label: label});
		}
	};


	// Tabs
	// ---------------------------------------------------------

	/*
	 * initTabs
	 */
	var initTabs = function() {
		console.log('progressionNav.initTabs()');

		// Tab Button Event Listeners
		$('#progression-nav .tabs .tab-button').on('mouseenter', function(e){
			events.dispatch('progression-nav-tab-mouseenter', {event: e, element: $(this)});
		});

		$('#progression-nav .tabs .tab-button').on('mouseleave', function(e){
			events.dispatch('progression-nav-tab-mouseleave', {event: e, element: $(this)});
		});

		$('#progression-nav .tabs .tab-button').on('click', function(e){
			events.dispatch('progression-nav-tab-click', {event: e, element: $(this)});
		});
	};


	/*
	 * startTabs
	 */
	var startTabs = function() {
		console.log('progressionNav.startTabs()');

		// Check for existing hash value and set default tab selection state
		let index, label;
		if (window.location.hash) {
			let hashElement = $('.tab-button[label="' + window.location.hash.substring(1) + '"]');
			index = hashElement.attr('index');
			label = hashElement.attr('label');
		} else {
			index = 0;
			label = $('.tab-button[index="0"]').attr('label');
		}
		selectTab(index, label);
		events.dispatch('progression-nav-tab-select', {index: index, label: label});
	}


	/*
	 * selectTab
	 */
	var selectTab = function(index, label) {
		console.log('progressionNav.selectTab()');

		$('#progression-nav .tabs .tab-button').removeClass('selected');
		$('#progression-nav .tabs .tab-button[index="' + index + '"]').addClass('selected');

		// Set selection hash
		window.location.hash = label;
	}



	// Public Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'progressionNav',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('progressionNav.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            console.log('progressionNav.start()');
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
