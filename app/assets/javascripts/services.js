$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > $(window).height() * 0.25) {
        $(".services-list-two").removeClass("hidden");
    } else if (scroll < $(window).height()) {
        $(".services-list-two").addClass("hidden");
    }
});