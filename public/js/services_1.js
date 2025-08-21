(jQuery)(function ($) {
    /* ================ SERVICES CAROUSEL ================ */
    $('.services-carousel').each(function () {
        var autoPlay = false;
        var auto = $(this).data('play') == '1';
        var timeoutDuration = $(this).data('timeout');
        var navigation = $(this).data('navigation') == '1';

        $(this).owlCarousel({
            autoPlay: auto,
            items: 3,
            loop: true,
            margin: 0,
            responsiveClass: true,
            mouseDrag: true,
            dots: navigation,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true,
                    autoplay: auto,
                    autoplayTimeout: timeoutDuration,
                    autoplayHoverPause: true,
                    responsiveClass: true,
                    autoHeight: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    loop: true,
                    autoplay: auto,
                    autoplayTimeout: timeoutDuration,
                    autoplayHoverPause: true,
                    responsiveClass: true,
                    autoHeight: false
                },
                1000: {
                    items: 3,
                    nav: false,
                    loop: true,
                    autoplay: auto,
                    autoplayTimeout: timeoutDuration,
                    autoplayHoverPause: true,
                    responsiveClass: true,
                    mouseDrag: true,
                    autoHeight: false
                }
            }

        });

    });

    $('.services-gallery').each(function () {
        // services gallery button positioning 
        var service_button_width = $(this).find('.hover-details').width() / 2;
        $(this).find('.hover-details').css('margin-left', -service_button_width);
    });

    /*
     * SVG COLOR CHANGING
     */
    jQuery("ul[class^='service-list'] .icon-container img").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        var classes = '';

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }

            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                classes = imgClass;
            }

            if ($img.closest('ul').hasClass('white')) {
                $svg = $svg.attr('class', classes + ' replaced-svg svg-white');
            } else {
                $svg = $svg.attr('class', classes + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


});