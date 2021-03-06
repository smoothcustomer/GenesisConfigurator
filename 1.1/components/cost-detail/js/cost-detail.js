/*
 * configurator module
 */
var configurator = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let visualizerHeight;
	let scrollPosition;




    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        console.log('configurator.initModule()');

		initTabs();
		initScrollManager();
		initResize();
	};



	/* Scrolling */

	/*
	 * initScrollManager
	 */
	var initScrollManager = function() {
		console.log('configurator.initScrollManager()');

		$(document).on('scroll', handleScroll);
	};

	/*
	 * handleScroll
	 */
	var handleScroll = function() {
		console.log('configurator.handleScroll()');


		scrollPosition = $(document).scrollTop();
		//let newVisualizerHeight = $(window).height() - scrollPosition - 360;
		//let newVisualizerMinHeight = (560 - scrollPosition);

		if (scrollPosition >= 80) {
			if (!$('.subnav').hasClass('sticky')) {
				$('.subnav').addClass('sticky');
			}

			// $('.visualizer').css({
			// 	'height': newVisualizerHeight,
			// 	'min-height': newVisualizerMinHeight
			// });

		} else if (scrollPosition < 80) {
			if ($('.subnav').hasClass('sticky')) {
				$('.subnav').removeClass('sticky');
			}

			// $('.visualizer').css({
			// 	'height': '',
			// 	'min-height': ''
			// });
		}


		console.log('scrollPosition: ', scrollPosition);

	};



	/* Resizing */

	/*
	 * initResize
	 */
	var initResize = function() {
		console.log('configurator.initResize()');

		// Initial resize on page load
		handleResize();

		$(window).on('resize', handleResize);
	};

	/*
	 * handleResize
	 */
	var handleResize = function() {
		console.log('configurator.handleResize()');

		visualizerHeight = $('section.configurator .visualizer').outerHeight();
		console.log('visualizerHeight: ', visualizerHeight);
	};






	/* Tabs/Panels */

	/*
	 * initTabs
	 */
	var initTabs = function() {
		console.log('configurator.initTabs()');


		// Check for existing hash value and
		// set default tab selection state
		console.log('window.location.hash: ', window.location.hash);

		if (window.location.hash) {
			let hashElement = $('.tab-button[label="' + window.location.hash.substring(1) + '"]');
			switchTab(hashElement.attr('index'), hashElement.attr('label'));
		} else {
			switchTab(0, $('.tab-button[index="0"]').attr('label'));
		}


		// Global Nav Button Event Listeners

		$('.configurator .subnav .tabs .tab-button').on('mouseenter', function(e){
			handleTabButtonMouseEnter(e, $(this));
		});

		$('.configurator .subnav .tabs .tab-button').on('mouseleave', function(e){
			handleTabButtonMouseLeave(e, $(this));
		});

		$('.configurator .subnav .tabs .tab-button').on('click', function(e){
			handleTabButtonClick(e, $(this));
		});
	};

	/*
	 * handleTabButtonMouseEnter
	 */
	var handleTabButtonMouseEnter = function(e, element) {
		console.log('configurator.handleTabButtonMouseEnter()');
	};

	/*
	 * handleTabButtonMouseLeave
	 */
	var handleTabButtonMouseLeave = function(e, element) {
		console.log('configurator.handleTabButtonMouseLeave()');
	};

	/*
	 * handleTabButtonClick
	 */
	var handleTabButtonClick = function(e, element) {
		console.log('configurator.handleTabButtonClick()');
		// console.log('index: ', element.attr('index'));

		if (!element.hasClass('selected')) {
			switchTab(element.attr('index'), element.attr('label'));
		}
	};

	/*
	 * switchTab
	 */
	var switchTab = function(index, label) {
		console.log('configurator.switchTab()');
		console.log('index: ', index);
		console.log('label: ', label);

		// Change tab button state
		$('.configurator .subnav .tabs .tab-button').removeClass('selected');
		$('.configurator .subnav .tabs .tab-button[index="' + index + '"]').addClass('selected');

		// Change tab state
		$('.configurator .panels .panel').removeClass('selected');
		$('.configurator .panels .panel[index="' + index + '"]').addClass('selected');

		// Show/hide visualizer on Model selection step
		if ( label == 'models' ) {
			$('.vehicle-info-bar').removeClass('active');
			$('.visualizer').removeClass('active');
		} else {
			$('.vehicle-info-bar').addClass('active');
			$('.visualizer').addClass('active');
		}


		// Set selection hash
		window.location.hash = label;
	};



	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'configurator',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            console.log('configurator.init()');
	    	initModule();
	    }
	};
})();
