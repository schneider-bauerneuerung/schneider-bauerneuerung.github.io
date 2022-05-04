/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var anc = $anchor.attr('href').substring($anchor.attr('href').lastIndexOf("/") + 1);
        $('html, body').stop().animate({
            scrollTop: ($(anc).offset().top - 60)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    //Highlight the top nav as scrolling occurs
    // https://github.com/twbs/bootstrap/issues/33943

    // bootstrap 5
    // var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    //     target: '#mainNav',
    //     offset: 51
    //   })

      // bootstrap 3.x
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    var header = document.querySelector( '.navbar-default' );
    if (!header.classList.contains("noani")) {
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })
    }

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
