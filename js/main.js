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
        });
        $('[data-toggle="tooltip"]').tooltip();

        // // Testimonials Slider
        // $(".testimonials.owl-carousel").owlCarousel({
        //     nav: true, // Show next/prev buttons.
        //     items: 1, // The number of items you want to see on the screen.
        //     loop: true, // Infinity loop. Duplicate last and first items to get loop illusion.
        //     navText: false,
        //     margin: 10,
        // });

         // Blog grid init
        // setTimeout(function(){
        //     var $container = $(".blog-masonry");
        //     $container.masonry();
        // }, 500);
        //
        // $('.site-main-menu').on("click", "a", function (e) {
        //     var $container = $(".blog-masonry");
        //     $container.masonry();
        // });


    });

    // Animate page loader
    // $(window).on('load', function() {
    //     $(".preloader").fadeOut("slow");
    // });
    //
    // // Mobile menu hide
    // $(window).on('resize', function() {
    //      mobileMenuHide();
    // });
    //
    // // Mobile menu hide on main menu item click
    // $('.site-main-menu').on("click", "a", function (e) {
    //     mobileMenuHide();
    // });

})(jQuery);
