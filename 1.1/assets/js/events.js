/*
 * events module
 */
var events = (function () {


 	// Private Vars
 	// ---------------------------------------------------------
	let subscribers = {};


    // Private Methods
 	// ---------------------------------------------------------

	/*
	 * initModule
	 */
	var initModule = function() {
        // console.log('events.initModule()');
	};

	/*
	 * dispatchEvent
	 */
	var dispatchEvent = function(eventName, payload) {
		console.log('events.dispatchEvent()');
		console.log('eventName: ', eventName);
		console.log('payload: ', payload);

		if (subscribers[eventName]) {
			for (let i = 0; i < subscribers[eventName].subscriptionList.length; i++) {
				window[subscribers[eventName].subscriptionList[i]].event(eventName, payload);
			}
		}
	};

	/*
	 * addSubscription
	 */
	var addSubscription = function(moduleName, eventName) {
		console.log('events.addSubscription()');
		console.log('moduleName: ', moduleName);
		console.log('eventName: ', eventName);

		// If event is registered, append subscriber
		if (subscribers[eventName]) {

			if (subscribers[eventName].subscriptionList) {

				// Check if module is already in the subscriptionList
				let moduleExists = false;
				for (let i = 0; i < subscribers[eventName].subscriptionList.length; i++) {
					if (subscribers[eventName].subscriptionList[i] == moduleName) {
						moduleExists = true;
					}
				}

				// If it does not exist append it
				if (!moduleExists) {
					subscribers[eventName].subscriptionList.push(moduleName);
				}

			} else {
				subscribers[eventName].subscriptionList = [ moduleName ];
			}


		// If event is unregistered, add event and subscriber
		} else {
			subscribers[eventName] = {
				eventName: eventName,
				subscriptionList: [ moduleName ]
			}
		}

		console.log('subscribers: ', subscribers);
	};


	// Public Methods
	// ---------------------------------------------------------

	return {

		// Module name id for dynamic initialization
        name: 'events',

		/*
		 * init
		 * Main init function called when module target content is loaded
		 */
	    init: function(){
            // console.log('events.init()');

	    	initModule();
	    },

		/*
		 * dispatch
		 */
		dispatch: function(eventName, payload = {}) {
			dispatchEvent(eventName, payload);
		},

		/*
		 * subscribe
		 */
		subscribe: function(moduleName, eventName) {
			addSubscription(moduleName, eventName);
		}
	};
})();
