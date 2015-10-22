// Using jQuery.
$(document).ready(function() {
	// Parallax Scrolling Effects
	$(window).scroll(function(e) {
		
		var scrollP = $(this).scrollTop();
		//$('#main-header').css({'background-position': '0px ' + scrollP/4 + 'px'});

	});

	// Menu button on click event for small screen devices
	// Open Menu (from the right)
	$('.hamburger').on('click', function(e) {
		e.preventDefault();
		$('#main-menu').animate({'right': '0px'}, 200);
	});
	// Close button on click event for small screen devices
	// Close Menu (animate to the right)
	$('.close-button').on('click', function(e) {
		e.preventDefault();
		$('#main-menu').animate({'right': '-182px'}, 200);
	});

		// Portfolio Thumbnails
		var thumb = $('.thumb');
		thumb.hover(
			function() {
				$(this).children('span').css({
					'visibility': 'visible',
					'background-color': 'rgba(78,183,89,0.5)'
				});
			}, 
			function() {
				$(this).children('span').css({
					'visibility': 'hidden',
					'background': 'none'
				});
			});
});