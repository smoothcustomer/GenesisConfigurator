/*
 * progressionNav module
 */
var progressionNav = (function () {


 	// Private Vars
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	let currentIndex = 0;
	let nextIndex = 1;
	let maxIndex = 5;




    // Private Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------


	/*
	 * initModule
	 */
	var initModule = function() {
        // console.log('progressionNav.initModule()');

		subscribeToEvents();
		initTabs();
		initNextButton();
	};

	/*
	 * startModule
	 */
	var startModule = function() {
		// console.log('progressionNav.startModule()');

		startTabs();
	};



	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		// console.log('progressionNav.subscribeToEvents()');

		//events.subscribe('progressionNav', 'window-resize');
		events.subscribe('progressionNav', 'window-scroll');
		events.subscribe('progressionNav', 'progression-nav-tab-mouseenter');
		events.subscribe('progressionNav', 'progression-nav-tab-mouseleave');
		events.subscribe('progressionNav', 'progression-nav-tab-click');
		events.subscribe('progressionNav', 'progression-nav-next-mouseenter');
		events.subscribe('progressionNav', 'progression-nav-next-mouseleave');
		events.subscribe('progressionNav', 'progression-nav-next-click');
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
			case 'progression-nav-next-mouseenter':
				handleNextMouseEnter(payload.event, payload.element);
			break;
			case 'progression-nav-next-mouseleave':
				handleNextMouseLeave(payload.event, payload.element);
			break;
			case 'progression-nav-next-click':
				handleNextClick(payload.nextIndex, payload.nextLabel);
			break;
		}
	};


	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleScroll
	 */
	var handleScroll = function(scrollPosition) {
		// console.log('progressionNav.handleScroll()');
		// console.log('scrollPosition: ', scrollPosition);

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
		// TweenMax.to( hoverBox.find('.video'), mouseOverScaleSpeed, { opacity: 1, ease: Power2.easeOut });

		TweenMax.to(element, 0.3, { opacity: 1, ease: Power2.easeOut });
	};

	/*
	 * handleTabMouseLeave
	 */
	var handleTabMouseLeave = function(e, element) {
		//console.log('progressionNav.handleTabMouseLeave()');
		if (!element.hasClass('selected')) {
			TweenMax.to(element, 0.9, { opacity: 0.4, ease: Power2.easeOut });
		}
	};

	/*
	 * handleTabClick
	 */
	var handleTabClick = function(e, element) {
		// console.log('progressionNav.handleTabClick()');

		if (!element.hasClass('selected')) {
			let index = element.attr('index');
			let label = element.attr('label');

			selectTab(index, label);
			events.dispatch('progression-nav-tab-select', {index: index, label: label});
		}
	};



	/*
	 * handleNextMouseEnter
	 */
	var handleNextMouseEnter = function(e, element) {
		// TweenMax.to(element, 0.3, { opacity: 1, ease: Power2.easeOut });
	};

	/*
	 * handleNextMouseLeave
	 */
	var handleNextMouseLeave = function(e, element) {

	};


	/*
	 * handleNextClick
	 */
	var handleNextClick = function(nextIndex, nextLabel) {
		// console.log('progressionNav.handleNextClick()');
		// console.log('nextIndex: ', nextIndex);
		// console.log('nextLabel: ', nextLabel);

		if (currentIndex != maxIndex) {
			selectTab(nextIndex, nextLabel);
			events.dispatch('progression-nav-tab-select', {index: nextIndex, label: nextLabel});
		}
	};







	// Tabs
	// ---------------------------------------------------------

	/*
	 * initTabs
	 */
	var initTabs = function() {
		// console.log('progressionNav.initTabs()');

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
	 * initNextButton
	 */
	var initNextButton = function() {
		// console.log('progressionNav.initNextButton()');

		// Tab Button Event Listeners
		$('#progression-nav .next-button').on('mouseenter', function(e){
			events.dispatch('progression-nav-next-mouseenter', {event: e, element: $(this)});
		});

		$('#progression-nav .next-button').on('mouseleave', function(e){
			events.dispatch('progression-nav-next-mouseleave', {event: e, element: $(this)});
		});

		$('#progression-nav .next-button').on('click', function(e){
			events.dispatch('progression-nav-next-click', {
				nextIndex: $(this).attr('next-index'),
				nextLabel: $(this).attr('next-label')
			});
		});
	};


	/*
	 * startTabs
	 */
	var startTabs = function() {
		// console.log('progressionNav.startTabs()');

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
		// console.log('progressionNav.selectTab()');

		currentIndex = index;

		// Update next button values
		updateNextButton(index)

		// Deselect animation
		TweenMax.to( $('#progression-nav .tabs .tab-button .underline'), 0.3, { scaleX: 0, opacity: 0, ease: Power2.easeOut });
		TweenMax.to( $('#progression-nav .tabs .tab-button'), 0.3, { opacity: 0.4, ease: Power2.easeOut });

		// Add selected class
		$('#progression-nav .tabs .tab-button').removeClass('selected');
		$('#progression-nav .tabs .tab-button[index="' + index + '"]').addClass('selected');

		// Select Animation
		TweenMax.to( $('#progression-nav .tabs .tab-button.selected .underline'), 0.6, { scaleX: 1, opacity: 1, ease: Power2.easeOut });
		TweenMax.to( $('#progression-nav .tabs .tab-button.selected'), 0.6, { opacity: 1, ease: Power2.easeOut });

		// Set selection hash
		window.location.hash = label;
	}


	/*
	 * updateNextButton
	 */
	var updateNextButton = function(newIndex) {
		// console.log('progressionNav.updateNextButton()');
		// console.log('newIndex: ', newIndex);

		if (newIndex == maxIndex) {
			$('.next-button .button').html('Finished');

		} else {
			let nextIndex = parseInt(newIndex) + 1;
			let nextLabel = $('.tab-button[index="' + nextIndex + '"]').attr('label');

			// console.log('nextIndex: ', nextIndex);
			// console.log('nextLabel: ', nextLabel);

			$('.next-button').attr('next-index', nextIndex);
			$('.next-button').attr('next-label', nextLabel);
			$('.next-button .button').html('Next: ' + nextLabel);
		}

	}


	/*
	 * hideProgressionNav
	 */
	var hideProgressionNav = function() {
		console.log('progressionNav.hideProgressionNav()');

	}

	/*
	 * showProgressionNav
	 */
	var showProgressionNav = function() {
		console.log('progressionNav.showProgressionNav()');

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
            // console.log('progressionNav.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
	    start: function(){
            // console.log('progressionNav.start()');
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
