/*
 * progressionPanelTrims module
 */
var progressionPanelTrims = (function () {


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
        // console.log('progressionPanelTrims.initModule() ');

		subscribeToEvents();
		initCompare();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		// console.log('progressionPanelTrims.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		// console.log('progressionPanelTrims.subscribeToEvents()');

		events.subscribe('progressionPanelTrims', 'compare-mouse-enter');
		events.subscribe('progressionPanelTrims', 'compare-mouse-leave');
		events.subscribe('progressionPanelTrims', 'compare-click');
		// events.subscribe('progressionPanelTrims', 'progression-nav-tab-select');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionPanelTrims.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'compare-mouse-enter':
				handleCompareMouseEnter(payload.event, payload.element);
			break;
			case 'compare-mouse-leave':
				handleCompareMouseLeave(payload.event, payload.element);
			break;
			case 'compare-click':
				handleCompareClick(payload.event, payload.element);
			break;
		}
	};


	// Compare
	// ---------------------------------------------------------

	/*
	 * initSwatches
	 */
	var initCompare = function() {
		console.log('progressionPanelTrims.initSwatches()');

		// Tab Button Event Listeners
		$('#progression-panels .compare-button.trims').on('mouseenter', function(e){
			events.dispatch('compare-mouse-enter', {event: e, element: $(this)});
		});

		$('#progression-panels .compare-button.trims').on('mouseleave', function(e){
			events.dispatch('compare-mouse-leave', {event: e, element: $(this)});
		});

		$('#progression-panels .compare-button.trims').on('click', function(e){
			events.dispatch('compare-click', {event: e, element: $(this)});
		});
	};

	/*
	 * handleCompareMouseEnter
	 */
	var handleCompareMouseEnter = function(e, element) {
		console.log('progressionPanelTrims.handleCompareMouseEnter()');
		//TweenMax.to(element, 0.4, { scale: 1.15, ease: Power2.easeOut });

	};

	/*
	 * handleCompareMouseLeave
	 */
	var handleCompareMouseLeave = function(e, element) {
		console.log('progressionPanelTrims.handleCompareMouseLeave()');
		//TweenMax.to(element, 0.4, { scale: 1, ease: Power2.easeOut });

	};

	/*
	 * handleCompareClick
	 */
	var handleCompareClick = function(e, element) {
		console.log('progressionPanelTrims.handleCompareClick()');

	};







	// Public Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'progressionPanelTrims',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            // console.log('progressionPanelTrims.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
		start: function(){
			// console.log('progressionPanelTrims.start()');
			startModule();
		},

		/*
		 * event
		 */
		event: function(eventName, payload){
            //console.log('progressionPanelTrims.event()');
	    	handleEvent(eventName, payload);
	    }
	};
})();
