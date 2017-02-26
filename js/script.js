
$(document).ready(function(){


    $("#download-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });

    $("#download-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });

    $("#features-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    $("#features-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    $("#home-button").click(function () {
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    });

    $(".navbar-brand").click(function () {
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    });


    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        width: 317
    });




    // On before slide change
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-center').removeClass( "slick-right" ).removeClass("slick-left");
        $('.slick-center').prev().removeClass( "slick-right" ).addClass( "slick-left" );
        $('.slick-center').next().removeClass( "slick-left" ).addClass( "slick-right" );
    });

});