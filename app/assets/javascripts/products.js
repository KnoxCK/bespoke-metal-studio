function cycleImages(){
	    var $active = $('#product-image .active');
	    var $next = ($active.next().length > 0) ? $active.next() : $('#product-image img:first');
	    $next.css('z-index',5);//move the next image up the pile
	    $active.fadeOut(1000,function(){//fade out the top image
		$active.css('z-index',-10).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',10).addClass('active');//make the next image the top one
  	});
}

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 4000);
})
