(function ($) {
	"use strict";

	// Preloader
	// $(window).on('load', function () {
	// 	$('.preloader').fadeOut();
	// }
	// );

	// Animation.
    function scrollAnimation() {
        var shouldAnimate = $('body').data('scroll-animation');
        if (true === shouldAnimate) {
            new WOW().init();
        }
    }
    scrollAnimation();

})(jQuery);