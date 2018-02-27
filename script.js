$(document).ready(function() {
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
	return false;
	});

	$('#mobile').click(function(){
		if($('#dropDown').is(':visible')) {
			$('#dropDown').slideUp();
		} else {
			$('#dropDown').slideDown();    
		}
		$('a').click(function(){
			$('#dropDown').slideUp();
		});
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

    $('.project5').click(function(){
        window.open('https://puza2010.github.io/Chat/');
    });

    $('.project6').click(function(){
        window.open('https://polar-fjord-61724.herokuapp.com/#/');
    });

	$('#github').click(function(){
		window.open('https://github.com/Puza2010');
	});

	$('#github2').click(function(){
		window.open('https://github.com/Puza2010');
	});
});
