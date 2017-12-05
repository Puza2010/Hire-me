$(document).ready(function() {
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
	return false,
		$('#dropDown').slideUp();
	});

	$('#mobile').click(function(){
		if($('#dropDown').is(':visible')) {
			$('#dropDown').slideUp();
		} else {
			$('#dropDown').slideDown();    
		}
	});

	$('.project1').click(function(){
		window.open('https://puza2010.github.io/Project-Game/');
	});

	$('.project2').click(function(){
		window.open('https://puza2010.github.io/Project-Quotes/');
	});

	$('.project3').click(function(){
		window.open('https://puza2010.github.io/Project-Kanban/');
	});

	$('.project4').click(function(){
		window.open('https://puza2010.github.io/Project-Gif/');
	});

	$('#github').click(function(){
		window.open('https://github.com/Puza2010');
	});
});
