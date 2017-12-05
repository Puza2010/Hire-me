$(document).ready(function() {
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
	return false;
	//	$('#dropDown').slideUp();
	});

	$('#mobile').click(function(){
		if($('#dropDown').is(':visible')) {
			$('#dropDown').slideUp();
		} else {
			$('#dropDown').slideDown();    
		}
	});

	$('.project1').click(function(){
		window.location.href ='projects/game/index.html';
	});

	$('.project2').click(function(){
		window.location.href ='projects/quotes/index.html';
	});

	$('.project3').click(function(){
		window.location.href ='projects/kanban/index.html';
	});

	$('.project4').click(function(){
		window.location.href ='projects/gif/index.html';
	});

	$('#github').click(function(){
		window.location.href='https://github.com/Puza2010';
	});
});
