// Using jQuery.
$(document).ready(function() {

	$(window).scroll(function(e) {
		
		var scrollP = $(this).scrollTop();
		$('#main-header').css({'background-position': '0px ' + scrollP/5 + 'px'});

	});

	var thumb = $('.thumb');
	thumb.hover(function() {
		$(this).children('span').css({
			'visibility': 'visible',
			'background-color': 'rgba(78,183,89,0.5)'
		});
	}, function() {
		$(this).children('span').css({
			'visibility': 'hidden',
			'background': 'none'
		});
	});

});