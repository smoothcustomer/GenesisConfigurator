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
        window.console && console.log('configurator.initModule()');

		initTabs();
		initScrollManager();
		initResize();
	};



	/* Scrolling */

	/*
	 * initScrollManager
	 */
	var initScrollManager = function() {
		window.console && console.log('configurator.initScrollManager()');

		$(document).on('scroll', handleScroll);
	};

	/*
	 * handleScroll
	 */
	var handleScroll = function() {
		window.console && console.log('configurator.handleScroll()');

		scrollPosition = $(document).scrollTop();
		let newVisualizerHeight = $(window).height() - scrollPosition - 340;
		let newVisualizerMinHeight = (560 - scrollPosition);

		if (scrollPosition >= 80) {
			if (!$('.vehicle-info-bar').hasClass('sticky')) {
				$('.vehicle-info-bar').addClass('sticky');
			}

			$('.visualizer').css({
				'height': newVisualizerHeight,
				'min-height': newVisualizerMinHeight
			});

		} else if (scrollPosition < 80) {
			if ($('.vehicle-info-bar').hasClass('sticky')) {
				$('.vehicle-info-bar').removeClass('sticky');
			}

			$('.visualizer').css({
				'height': '',
				'min-height': ''
			});
		}


		window.console && console.log('scrollPosition: ', scrollPosition);
	};



	/* Resizing */

	/*
	 * initResize
	 */
	var initResize = function() {
		window.console && console.log('configurator.initResize()');

		// Initial resize on page load
		handleResize();

		$(window).on('resize', handleResize);
	};

	/*
	 * handleResize
	 */
	var handleResize = function() {
		window.console && console.log('configurator.handleResize()');

		visualizerHeight = $('section.configurator .visualizer').outerHeight();
		window.console && console.log('visualizerHeight: ', visualizerHeight);
	};






	/* Tabs/Panels */

	/*
	 * initTabs
	 */
	var initTabs = function() {
		window.console && console.log('configurator.initTabs()');


		// Check for existing hash value and
		// set default tab selection state
		window.console && console.log('window.location.hash: ', window.location.hash);

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
		window.console && console.log('configurator.handleTabButtonMouseEnter()');
	};

	/*
	 * handleTabButtonMouseLeave
	 */
	var handleTabButtonMouseLeave = function(e, element) {
		window.console && console.log('configurator.handleTabButtonMouseLeave()');
	};

	/*
	 * handleTabButtonClick
	 */
	var handleTabButtonClick = function(e, element) {
		window.console && console.log('configurator.handleTabButtonClick()');
		// window.console && console.log('index: ', element.attr('index'));

		if (!element.hasClass('selected')) {
			switchTab(element.attr('index'), element.attr('label'));
		}
	};

	/*
	 * switchTab
	 */
	var switchTab = function(index, label) {
		window.console && console.log('configurator.switchTab()');
		window.console && console.log('index: ', index);
		window.console && console.log('label: ', label);

		// Change tab button state
		$('.configurator .subnav .tabs .tab-button').removeClass('selected');
		$('.configurator .subnav .tabs .tab-button[index="' + index + '"]').addClass('selected');

		// Change tab state
		$('.configurator .panels .panel').removeClass('selected');
		$('.configurator .panels .panel[index="' + index + '"]').addClass('selected');

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
            window.console && console.log('configurator.init()');
	    	initModule();
	    }
	};
})();
