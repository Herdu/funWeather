
$(document).ready(function() {


    $("#download-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    });

    $("#download-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    });

    $("#features-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 1000);
    });

    $("#scroll-down").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 1000);
    });




    $("#features-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 1000);
    });

    $("#home-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });

    $(".navbar-brand").click(function () {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });


    $("#reviews-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#reviews").offset().top
        }, 1000);
    });

});






// cache the navigation links
var $navigationLinks = $('.navbar-nav>li>a');
// cache (in reversed order) the sections
var $sections = $($(".section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('.navbar-nav>li>a[myAttribute=' + id + ']');
    console.log(sectionIdTonavigationLink[id]);
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top - 300;

        // if the user has scrolled over the top of the section
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('btn-active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('btn-active');
                // add .active class to the current link
                $navigationLink.addClass('btn-active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

$(window).scroll( throttle(highlightNavigation,100) );

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );

