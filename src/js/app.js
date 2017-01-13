// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();


//slider

$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $(".slider__link--right"),
        prevArrow: $(".slider__link--left"),
        variableWidth: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    autoplay: true,
                    slidesToShow: 1,
                    slideToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slideToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slideToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    variableWidth: false,
                    slidesToShow: 3,
                    slideToScroll: 1
                }
            }
        ]
    });
});