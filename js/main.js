/*
* Template Name: Sunshine - Responsive vCard Template
* Author: LMPixels (Linar Miftakhov)
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.0
*/

(function($) {
"use strict";

    // /Hide Mobile menu

    $(document).ready(function(){

        // Mobile menu
        $('.menu-toggle').click(function() {
            $('.site-nav').toggleClass('mobile-menu-hide');
            $('#hamburger, #close').toggleClass('d-none');
        });
        $('[data-toggle="tooltip"]').tooltip();

    });

})(jQuery);
