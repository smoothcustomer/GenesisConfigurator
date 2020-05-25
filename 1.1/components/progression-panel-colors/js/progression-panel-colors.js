/*
 * progressionPanelColors module
 */
var progressionPanelColors = (function () {


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
        // console.log('progressionPanelColors.initModule()');

		subscribeToEvents();
		initSwatches();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		// console.log('progressionPanelColors.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		// console.log('progressionPanelColors.subscribeToEvents()');

		events.subscribe('progressionPanelColors', 'swatch-mouse-enter');
		events.subscribe('progressionPanelColors', 'swatch-mouse-leave');
		events.subscribe('progressionPanelColors', 'swatch-click');
		events.subscribe('progressionPanelColors', 'progression-nav-tab-select');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionPanelColors.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'progression-nav-tab-select':
				handleTabSelect(payload.index, payload.label);
			break;
			case 'swatch-mouse-enter':
				handleSwatchMouseEnter(payload.event, payload.element);
			break;
			case 'swatch-mouse-leave':
				handleSwatchMouseLeave(payload.event, payload.element);
			break;
			case 'swatch-click':
				handleSwatchClick(payload.event, payload.element);
			break;
		}
	};



	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleTabSelect
	 */
	var handleTabSelect = function(index, label) {
		console.log('progressionPanelColors.handleTabSelect()');


		// Hide current tab waypoints
		//TweenMax.to( $('#progression-panels .panel.selected .swatch'), 0, { opacity: 0, ease: Power2.easeOut });


		// Show new tab waypoints
		$('#progression-panels .panel.selected .swatch').each( function(index) {
			let delay = index * 0.05;
			TweenMax.to( $(this), 0, { opacity: 0, y: 120 });
			TweenMax.to( $(this), 0.9, { opacity: 1, y: 0, ease: Power2.easeOut, delay: delay });
		});
	};




	// Swatches
	// ---------------------------------------------------------

	/*
	 * initSwatches
	 */
	var initSwatches = function() {
		console.log('progressionPanelColors.initSwatches()');

		// Tab Button Event Listeners
		$('#progression-panels .panel-content .swatch').on('mouseenter', function(e){
			events.dispatch('swatch-mouse-enter', {event: e, element: $(this)});
		});

		$('#progression-panels .panel-content .swatch').on('mouseleave', function(e){
			events.dispatch('swatch-mouse-leave', {event: e, element: $(this)});
		});

		$('#progression-panels .panel-content .swatch').on('click', function(e){
			events.dispatch('swatch-click', {event: e, element: $(this)});
		});
	};

	/*
	 * handleSwatchMouseEnter
	 */
	var handleSwatchMouseEnter = function(e, element) {
		console.log('progressionPanelColors.handleSwatchMouseEnter()');
		TweenMax.to(element, 0.4, { scale: 1.15, ease: Power2.easeOut });

		// if (!element.hasClass('selected')) {
		// 	TweenMax.to(element.find('.button'), 0.6, { css: { backgroundColor: "rgba(163, 107, 79, 1)", borderColor: "#a36b4f"  }, ease: Power2.easeOut });
		// }
	};

	/*
	 * handleSwatchMouseLeave
	 */
	var handleSwatchMouseLeave = function(e, element) {
		console.log('progressionPanelColors.handleSwatchMouseLeave()');
		TweenMax.to(element, 0.4, { scale: 1, ease: Power2.easeOut });

		// if (!element.hasClass('selected')) {
		// 	TweenMax.to(element.find('.button'), 0.6, { css: { backgroundColor: "rgba(0, 0, 0, 0.2)", borderColor: "#5d5d5d"  }, ease: Power2.easeOut });
		// }
	};

	/*
	 * handleSwatchClick
	 */
	var handleSwatchClick = function(e, element) {
		console.log('progressionPanelColors.handleSwatchClick()');

	};







	// Public Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'progressionPanelColors',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            // console.log('progressionPanelColors.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
		start: function(){
			// console.log('progressionPanelColors.start()');
			startModule();
		},

		/*
		 * event
		 */
		event: function(eventName, payload){
            //console.log('progressionPanelColors.event()');
	    	handleEvent(eventName, payload);
	    }
	};
})();
