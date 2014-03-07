/*jslint browser: true, devel: true, white: true */
/*global jQuery*/
(function( $ ){
    "use strict";
    var $burnGuard = $( '<div>' ).attr( 'id', 'burnGuard' ).css({
                height: $( document ).height() + 'px'
            }).appendTo( 'body' ),
        delay = 60000,
        scrollDelay = 1000;

    function burnGuardAnimate(){
        $burnGuard
            .css({
                left: '0px'
            })
            .show()
            .animate({
                left: $( window ).width() + 'px'
            }, scrollDelay,function(){
                $( this ).hide();
            });

        setTimeout( burnGuardAnimate, delay );
    }

    setTimeout( burnGuardAnimate, delay );
}( jQuery ));