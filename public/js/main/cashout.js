(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");

        }
    });
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {

        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "5 April 2023 00:00:00",
                        format: "on"
                    });
                }
            });
        }

        $('#clients').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
            smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 2000,
			responsiveClass: true,
			autoplayHoverPause: false,
            stagePadding: 0,
            slideTransition: 'linear',
            autoplayTimeout: 1300,
            autoplaySpeed: 1300,
			responsive: {
                0: {items: 7, margin: 9}, 
                768: {items: 11, margin: 15}, 
                992: {items: 12, margin: 23}, 
                1200: {items: 18, margin: 15},
                1300: {items: 19, margin: 14}
			}
		});

    });

    function toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    ;var navbar_init = function() {
        $('.switcher-setting').on('click', function() {
            toggleFullScreen();
            return false;
        });
    };
    navbar_init();
}
)(jQuery);

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}