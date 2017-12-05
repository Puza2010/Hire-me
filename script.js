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
		window.open('https://puza2010.github.io/Game-Project/');
	});

	$('.project2').click(function(){
		window.open('projects/quotes/index.html');
	});

	$('.project3').click(function(){
		window.open('projects/kanban/index.html');
	});

	$('.project4').click(function(){
		window.open('projects/gif/index.html');
	});

	$('#github').click(function(){
		window.open('https://github.com/Puza2010');
	});
});
