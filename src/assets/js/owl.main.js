

$(document).ready(function () {
    $('.testimonial').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            770: {
                items: 2.5
            },
            1060: {
                items: 2.5
            },
            1400: {
                items: 2.5
            }
        }
    });
});

$(document).ready(function () {
    $('.aboutTestimonial').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            770: {
                items: 2.5
            },
            1060: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });
});





