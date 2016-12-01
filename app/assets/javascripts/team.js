$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > $(window).height() * 0.10) {
        $(".team-title").addClass("hidden");
    } else if (scroll < $(window).height()) {
         $(".team-title").removeClass("hidden");
    }
});