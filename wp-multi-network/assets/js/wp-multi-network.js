/**
 * WP Multi Network Admin Script
 */


jQuery( document ).ready( function ( $ ) {
	$( '.if-js-closed' ).removeClass( 'if-js-closed' ).addClass( 'closed' );

	$( '.postbox' )
		.children( 'h3' )
		.click( function () {
			if ( $( this.parentNode ).hasClass( 'closed' ) ) {
				$( this.parentNode ).removeClass( 'closed' );
			} else {
				$( this.parentNode ).addClass( 'closed' );
			}
		} );

	/* Handle clicks to add/remove sites to/from selected list */
	$( 'input[name=assign]' ).click( function () {
		move( 'from', 'to' );
	} );

	$( 'input[name=unassign]' ).click( function () {
		move( 'to', 'from' );
	} );

	/* Toggle root site option between new and existing */
	$( 'input[name=root_site_option]' ).on( 'change', function () {
		if ( $( this ).val() === 'existing' ) {
			$( '.root-site-new' ).hide();
			$( '.root-site-existing' ).show();
			$( '#wpmn-edit-network-details' ).hide();
		} else {
			$( '.root-site-new' ).show();
			$( '.root-site-existing' ).hide();
			$( '#wpmn-edit-network-details' ).show();
		}
	} );

	/* Select all sites in "selected" box when submitting */
	$( '#edit-network-form' ).submit( function () {
		$( '#to' ).children( 'option:enabled' ).attr( 'selected', true );
		$( '#from' ).children( 'option:enabled' ).attr( 'selected', true );
	} );

	function move( from, to ) {
		jQuery( '#' + from )
			.children( 'option:selected' )
			.each( function () {
				jQuery( '#' + to ).append( jQuery( this ).clone() );
				jQuery( this ).remove();
			} );
	}
} );
