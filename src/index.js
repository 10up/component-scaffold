/* global define */

/**
 * @module @10up/TenUpScaffold
 *
 * @description
 *
 * A description goes here.
 *
 * [Link to demo]{@link https://baseline.10up.com/component/tenup-scaffold}
 */
(function (global) {
	/**
	 * Setting the global namespace of TenUpScaffold if it's not set already
	 *
	 * @namespace TenUpScaffold
	 */
	if (typeof window.TenUpScaffold !== 'object') {
		window.TenUpScaffold = {};
	}

	/**
	 * TenUpScaffold primary function
	 *
	 * @param {object} options Misc. options for this component
	 */
	const TenUpScaffold = function (options) {
		console.log('This component is working.');
		console.log(options);
	};

	// Export if supported. This is in place so the /dist naturally generates a supported version
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = TenUpScaffold;
	} else if (typeof define === 'function' && define.amd) {
		define('TenUpScaffold', [], function () {
			return TenUpScaffold;
		});
	} else if (typeof global === 'object') {
		/* eslint-disable */
		global.TenUpScaffold = TenUpScaffold;
		/* eslint-enable */
	}
})(typeof global !== 'undefined' ? global : window);
