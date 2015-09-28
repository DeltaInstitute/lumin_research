function checkWindow() {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        return inView
    } else {
        return outOfView
    }
}


// $(window).scroll(function () {
// $('.bulb').each(function() {
//     var view = checkWindow();
//     if (view ='yes') {
//         $('nav').find('#approach').addClass('active');
//     else {
//         $('nav').find('#aproach').removeClass('active');
//     }
// ]);


// Lumin Approach animation
//======================================================================================
$(window).scroll(function () {
$('nav').find('a').removeClass('active');
$('.bulb').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $(this).addClass("drawBulb");
        $('nav').find('#approachNav').addClass('active');
    } else {
        $(this).removeClass("drawBulb");
    }
	});
});


// Research Question animation
//======================================================================================
$(window).scroll(function () {
$('.researchQuestion').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $(this).find('#illuminationDefinition').fadeIn(1800);
        $(this).find('#lowIncomeDefinition').fadeIn(1800);
        $(this).find('#engagementDefinition').fadeIn(1800);
    } else {
        $(this).find('#illuminationDefinition').fadeOut();
        $(this).find('#lowIncomeDefinition').fadeOut();
        $(this).find('#engagementDefinition').fadeOut();
    }
    });
});


// Recruitment animation
//======================================================================================
$(window).scroll(function () {
$('nav').find('a').removeClass('active');
$('.recruitment').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('nav').find('#recruitmentNav').addClass('active');
    } else {
        $(this).removeClass("drawBulb");
    }
    });
});


// Prototype animation
//======================================================================================
$(window).scroll(function () {
$('.code').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('nav').find('#prototypeNav').addClass('active');
        $(this).addClass('blink');
        window.setTimeout(function () {
        	$( ".cursor" ).find('line').attr( 'x1', '600');
        	$( ".cursor" ).find('line').attr( 'x2', '600');
    	}, 2800 );
    	window.setTimeout(function () {
        	$( ".cursor" ).find('line').attr( 'x1', '850');
        	$( ".cursor" ).find('line').attr( 'x2', '850');
    	}, 3300 );
    	window.setTimeout(function () {
        	$( ".cursor" ).find('line').attr( 'x1', '1100');
        	$( ".cursor" ).find('line').attr( 'x2', '1100');
    	}, 3800 );
    } else {
        $(this).removeClass('blink');
        $( ".cursor" ).find('line').attr( 'x1', '225');
        $( ".cursor" ).find('line').attr( 'x2', '225');
    }
	});
});

// Pilot animation
//======================================================================================
$(window).scroll(function () {
$('.envelope').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        window.setTimeout(function () {
        	$( ".envelopeOpen" ).css('opacity', 1);
        	$( ".paperInside" ).css('opacity', 1);
    	}, 1000 );
    	window.setTimeout(function () {
        	$( ".paperInside" ).find('rect').attr('height', 800).attr('y', 850);
    	}, 1500 );
    	window.setTimeout(function () {
        	$( ".paperInside" ).find('rect').attr('height', 1200).attr('y', 450);
    	}, 2000 );
    	window.setTimeout(function () {
        	$('.paperOutside').removeAttr('display');
        	$( ".paperInside" ).find('rect').attr('height', 1200).attr('y', 50);
    	}, 2500 );
    	window.setTimeout(function () {
        	$('.paperOutside').find('rect').attr('y', 550);
        	$('.paperInside').find('rect').attr('y', 550);
    	}, 3000 );
    } else {
        $( ".envelopeOpen" ).css('opacity', 0);
        $( ".paperInside" ).find('rect').attr('height', 400).attr('y', 1250);
        $( ".paperInside" ).css('opacity', 0);
        $('.paperOutside').attr('y', 550);
        $('.paperOutside').attr('display', 'none');
    }
	
	});
});

// Energy Calc animation
//======================================================================================
$(window).scroll(function () {
$('.calcFlowChart').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $(this).addClass("drawCalcLines");
    } else {
        $(this).removeClass("drawCalcLines");
    }
    });
});

