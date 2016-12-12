function cycleMyImages(){
	    var $active = $('#about-main-image .active');
	    var $next = ($active.next().length > 0) ? $active.next() : $('#about-main-image img:first');
	    $next.css('z-index',5);//move the next image up the pile
	    $active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',-10).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',10).addClass('active');//make the next image the top one
  	});
}

$(document).ready(function(){
// run every 7s
setInterval('cycleMyImages()', 4000);
})