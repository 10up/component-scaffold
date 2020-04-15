/* global define, module, global */
'use strict';

/**
 * @module @10up/TenUpScaffold
 *
 * @description
 *
 * A description goes here.
 *
 * [Link to demo]{@link https://baseline.10up.com/component/tenup-scaffold}
 */
( function ( global ) {

	'use strict';

	/**
	* Setting the global namespace of TenUpScaffold if it's not set already
	* @namespace TenUpScaffold
	*/
	if ( 'object' !== typeof window.TenUpScaffold ) {
		window.TenUpScaffold = {};
	}

	/**
	 * TenUpScaffold primary function
	 */
	const TenUpScaffold = function ( options ) {

		console.log( 'This component is working.' );
		console.log( options );

	};

	// Export if supported. This is in place so the /dist naturally generates a supported version
	if ( 'undefined' !== typeof module && 'undefined' !== typeof module.exports ) {
		module.exports = TenUpScaffold;
	} else if ( 'function' === typeof define && define.amd ) {
		define( 'TenUpScaffold', [], function () {
			return TenUpScaffold;
		} );
	} else if ( 'object' === typeof global ) {
		global.TenUpScaffold = TenUpScaffold;
	}

} )( 'undefined' !== typeof global ? global : window );
