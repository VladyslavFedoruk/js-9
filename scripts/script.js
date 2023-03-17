$('.hero-slider').slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.products-slide_list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1105,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 889,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 777,
            settings: {

                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 631,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 477,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 458,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.partners_slider-list').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1105,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 889,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 777,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 458,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});