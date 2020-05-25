/*
 * progressionPanels module
 */
var progressionPanels = (function () {


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
        // console.log('progressionPanels.initModule()');

		subscribeToEvents();
		initCards();
	};


	/*
	 * startModule
	 */
	var startModule = function() {
		// console.log('progressionPanels.startModule()');

	};


	/*
	 * subscribeToEvents
	 */
	var subscribeToEvents = function() {
		// console.log('progressionPanels.subscribeToEvents()');

		events.subscribe('progressionPanels', 'card-mouse-enter');
		events.subscribe('progressionPanels', 'card-mouse-leave');
		events.subscribe('progressionPanels', 'card-click');
		events.subscribe('progressionPanels', 'progression-nav-tab-select');
	};

	/*
	 * handleEvent
	 */
	var handleEvent = function(eventName, payload) {
		// console.log('progressionNav.handleEvent()');
		// console.log('eventName: ', eventName);
		// console.log('payload: ', payload);

		switch(eventName) {
			case 'progression-nav-tab-select':
				handleTabSelect(payload.index, payload.label);
			break;
			case 'card-mouse-enter':
				handleCardMouseEnter(payload.event, payload.element);
			break;
			case 'card-mouse-leave':
				handleCardMouseLeave(payload.event, payload.element);
			break;
			case 'card-click':
				handleCardClick(payload.event, payload.element);
			break;
		}
	};



	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleTabSelect
	 */
	var handleTabSelect = function(index, label) {
		console.log('progressionPanels.handleTabSelect()');


		// Hide current tab waypoints
		TweenMax.to( $('#progression-panels .panel.selected .waypoint'), 0, { opacity: 0, ease: Power2.easeOut });


		// Show new tab waypoints
		$('#progression-panels .panel').removeClass('selected');
		$('#progression-panels .panel[index="' + index + '"]').addClass('selected');
		$('#progression-panels .panel.selected .waypoint').each( function(index) {
			let delay = index * 0.05;
			TweenMax.to( $(this), 0, { opacity: 0, y: 120 });
			TweenMax.to( $(this), 0.9, { opacity: 1, y: 0, ease: Power2.easeOut, delay: delay });
		});
	};




	// Cards
	// ---------------------------------------------------------


	// #progression-panels .panel-content .card {
	// 	position: relative;
	// 	display: flex;
	// 	flex-direction: column;
	// 	width: 25%;
	// 	cursor: pointer;
	// }


	/*
	 * initCards
	 */
	var initCards = function() {
		console.log('progressionPanels.initCards()');

		// Tab Button Event Listeners
		$('#progression-panels .panel-content .card').on('mouseenter', function(e){
			events.dispatch('card-mouse-enter', {event: e, element: $(this)});
		});

		$('#progression-panels .panel-content .card').on('mouseleave', function(e){
			events.dispatch('card-mouse-leave', {event: e, element: $(this)});
		});

		$('#progression-panels .panel-content .card').on('click', function(e){
			events.dispatch('card-click', {event: e, element: $(this)});
		});
	};

	/*
	 * handleCardMouseEnter
	 */
	var handleCardMouseEnter = function(e, element) {
		console.log('progressionPanels.handleCardMouseEnter()');
		TweenMax.to(element, 0.4, { scale: 1.05, ease: Power2.easeOut });

		if (!element.hasClass('selected')) {
			TweenMax.to(element.find('.button'), 0.6, { css: { backgroundColor: "rgba(163, 107, 79, 1)", borderColor: "#a36b4f"  }, ease: Power2.easeOut });
		}
	};

	/*
	 * handleCardMouseLeave
	 */
	var handleCardMouseLeave = function(e, element) {
		console.log('progressionPanels.handleCardMouseLeave()');
		TweenMax.to(element, 0.4, { scale: 1, ease: Power2.easeOut });

		if (!element.hasClass('selected')) {
			TweenMax.to(element.find('.button'), 0.6, { css: { backgroundColor: "rgba(0, 0, 0, 0.2)", borderColor: "#5d5d5d"  }, ease: Power2.easeOut });
		}
	};

	/*
	 * handleCardClick
	 */
	var handleCardClick = function(e, element) {
		console.log('progressionPanels.handleCardClick()');

	};







	// Public Methods
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'progressionPanels',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            // console.log('progressionPanels.init()');
	    	initModule();
	    },

		/*
		 * start
		 */
		start: function(){
			// console.log('progressionPanels.start()');
			startModule();
		},

		/*
		 * event
		 */
		event: function(eventName, payload){
            //console.log('progressionPanels.event()');
	    	handleEvent(eventName, payload);
	    }
	};
})();
