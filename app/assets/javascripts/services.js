$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > $(window).height() * 0.45) {
        $(".services-list-two").removeClass("hidden");
    } else if (scroll < $(window).height()) {
        $(".services-list-two").addClass("hidden");
    }
});
$(document).on('click', '.tailoring-link', function(e) {
  $(".extra-tailoring").removeClass("hidden");
e.preventDefault();
});