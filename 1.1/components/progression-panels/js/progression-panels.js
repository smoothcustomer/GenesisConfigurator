/*
 * progressionPanels module
 */
var progressionPanels = (function () {


 	// Private Vars
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	// ---------------------------------------------------------
	let currentPanelLabel;
	let compare = {
		models: false,
		trims: false,
		packages: false
	};
	let compareColumnWidth = 100;



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
		initCompare();
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
		events.subscribe('progressionPanels', 'compare-mouse-enter');
		events.subscribe('progressionPanels', 'compare-mouse-leave');
		events.subscribe('progressionPanels', 'compare-click');
		events.subscribe('progressionPanels', 'progression-nav-tab-select');
		events.subscribe('progressionPanels', 'window-resize');
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
			case 'window-resize':
				handleResize(payload.windowWidth, payload.windowHeight);
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



	// Event Handlers
	// ---------------------------------------------------------

	/*
	 * handleTabSelect
	 */
	var handleTabSelect = function(index, label) {
		console.log('progressionPanels.handleTabSelect()');

		currentPanelLabel = label;

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



	// Compare
	// ---------------------------------------------------------

	/*
	 * initSwatches
	 */
	var initCompare = function() {
		console.log('progressionPanels.initSwatches()');

		// Tab Button Event Listeners
		$('#progression-panels .compare-button').on('mouseenter', function(e){
			events.dispatch('compare-mouse-enter', {event: e, element: $(this)});
		});

		$('#progression-panels .compare-button').on('mouseleave', function(e){
			events.dispatch('compare-mouse-leave', {event: e, element: $(this)});
		});

		$('#progression-panels .compare-button').on('click', function(e){
			events.dispatch('compare-click', {event: e, element: $(this)});
		});
	};

	/*
	 * handleCompareMouseEnter
	 */
	var handleCompareMouseEnter = function(e, element) {
		console.log('progressionPanels.handleCompareMouseEnter()');
		//TweenMax.to(element, 0.4, { scale: 1.15, ease: Power2.easeOut });

	};

	/*
	 * handleCompareMouseLeave
	 */
	var handleCompareMouseLeave = function(e, element) {
		console.log('progressionPanels.handleCompareMouseLeave()');
		//TweenMax.to(element, 0.4, { scale: 1, ease: Power2.easeOut });

	};

	/*
	 * handleCompareClick
	 */
	var handleCompareClick = function(e, element) {
		console.log('progressionPanels.handleCompareClick()');

		toggleCompareView(currentPanelLabel);
	};



	/*
	 * toggleCompareView
	 */
	var toggleCompareView = function(label) {
		console.log('progressionPanels.toggleCompareView()');
		console.log('label: ', label);
		console.log('compare[' + label + ']: ', compare[label]);


		// Hide compare view
		if (compare[label]) {
			compare[label] = false;
			hideCompareView(label);

		// Show compare view
		} else {
			compare[label] = true;
			showCompareView(label);
		}


		// Waypoints
		// Common code to panel switch animation
		// Abstract as common method

		// $('#progression-panels .panel').removeClass('selected');
		// $('#progression-panels .panel[index="' + index + '"]').addClass('selected');
		TweenMax.killTweensOf($('#progression-panels .panel.selected .waypoint'));
		$('#progression-panels .panel.selected .waypoint').each( function(index) {
			let delay = index * 0.05;
			TweenMax.to( $(this), 0, { opacity: 0, y: 120 });
			TweenMax.to( $(this), 0.9, { opacity: 1, y: 0, ease: Power2.easeOut, delay: delay });
		});

	};



	/*
	 * toggleCompareView
	 */
	var showCompareView = function(label, animation = true) {
		console.log('progressionPanels.showCompareView()');
		console.log('label: ', label);

		let compareView = '#progression-panels .compare.' + label;
		let compareHeader = '#progression-panels .row-header.compare-header.' + label;
		let cardsView = '#progression-panels .cards.' + label;
		let cardsHeader = '#progression-panels .row-header.cards-header.' + label;

		$(cardsView).css('display', 'none');
		$(compareView).css('display', 'flex');
		$(cardsHeader).css('display', 'none');
		$(compareHeader).css('display', 'flex');
	};


	/*
	 * hideCompareView
	 */
	var hideCompareView = function(label, animation = true) {
		console.log('progressionPanels.hideCompareView()');
		console.log('label: ', label);

		let compareView = '#progression-panels .compare.' + label;
		let compareHeader = '#progression-panels .row-header.compare-header.' + label;
		let cardsView = '#progression-panels .cards.' + label;
		let cardsHeader = '#progression-panels .row-header.cards-header.' + label;

		$(cardsView).css('display', 'flex');
		$(compareView).css('display', 'none');
		$(cardsHeader).css('display', 'flex');
		$(compareHeader).css('display', 'none');
	};



	/*
	 * resizeCompareTables
	 */
	var resizeCompareTables = function(windowWidth, windowHeight) {
		console.log('progressionPanels.resizeCompareTables()');

		// Calculate responsive compare columns
		// Include padding and containers, this is exact pixel amount
		// Not most ideal way, but will work until pure CSS solution is found

		const pageContentWidth = $('body').outerWidth();

		if (windowWidth < 768) {
			compareColumnWidth = (pageContentWidth - 40) / 3;

		} else if (windowWidth >= 768 && windowWidth < 1024) {
			compareColumnWidth = (pageContentWidth - 80) / 3;

		} else if (windowWidth >= 1024 && windowWidth < 1280) {
			compareColumnWidth = (pageContentWidth - 160) / 3;

		} else if (windowWidth >= 1280 && windowWidth < 1600) {
			compareColumnWidth = (pageContentWidth - 160) / 4;

		} else if (windowWidth >= 1600 && windowWidth < 1920) {
			compareColumnWidth = (pageContentWidth - 160) / 4;

		} else if (windowWidth >= 1920) {
			compareColumnWidth = (pageContentWidth - 160) / 5;
		}


		$('#progression-panels .compare-row').css('paddingLeft', compareColumnWidth);
		$('#progression-panels .compare-element').css('width', compareColumnWidth);
	};





	// Resize
	// ---------------------------------------------------------

	/*
	 * handleResize
	 */
	var handleResize = function(windowWidth, windowHeight) {
		console.log('progressionPanels.handleResize()');

		resizeCompareTables(windowWidth, windowHeight);

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
