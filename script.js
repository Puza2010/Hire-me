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

	$('#github').click(function(){
		window.location.href='https://github.com/Puza2010';
	});
});
