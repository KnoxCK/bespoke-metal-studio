if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() {}, 1); scroll(0,0)

$(function() {
    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1500, 'swing');
    }
});