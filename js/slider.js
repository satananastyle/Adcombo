$(document).ready(function () {
    $('.slider').slick({
        appendDots: $('.slider-nav__dots'),
        prevArrow: $('.slider-nav__button--prev'),
        nextArrow: $('.slider-nav__button--next'),
        dots: true,
        mobileFirst: true
    });   
});