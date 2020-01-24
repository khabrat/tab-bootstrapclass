$(document).ready(function() {
	'use strict'
	$('.nav-item').each(function(i) {
		$(this).attr('href', '#' + i);
	})
	$('.jumbotron').each(function(i) {
		$(this).attr('id', i);
	})
	// $('.jumbotron').each(function(i){
	//     $('.jumbotron').hide();
	// })
	$('.nav a').on('click', function(e) {
		e.preventDefault();
		$('.nav a').removeClass('active');
		$('.jumbotron').removeClass('active');
		$(this).addClass('active');
		let $hrefActive = $(this).attr('href');
		let $showContent = $(this).attr('href');
		$('.jumbotron ').not($showContent).css({
			'display': 'none'
		});
		$($showContent).fadeIn();
		console.log($showContent)
	})
})