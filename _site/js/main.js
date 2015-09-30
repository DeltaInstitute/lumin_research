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
        $(this).find('#illuminationDefinition').slideDown();
        $(this).find('#lowIncomeDefinition').slideDown();
        $(this).find('#engagementDefinition').slideDown();
    } else {
        $(this).find('#illuminationDefinition').slideUp();
        $(this).find('#lowIncomeDefinition').slideUp();
        $(this).find('#engagementDefinition').slideUp();
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


// Survey REsults - Treatment Eval Animation
//======================================================================================
var div1=d3.select(document.getElementById('div1'));
    var forecastEval=d3.select(document.getElementById('forecastEval'));
    var applianceEval=d3.select(document.getElementById('applianceEval'));
    var goalEval=d3.select(document.getElementById('goalEval'));
    var programEval=d3.select(document.getElementById('programEval'));
    var utilityBill=d3.select(document.getElementById('utilityBill'));

$(window).scroll(function () {
$('.charts').each(function () {  
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {  
        start();
    }
    });
});

    function labelFunction(val,min,max) {

    }

    function deselect() {
        div1.attr("class","radial");
        forecastEval.attr("class","radial");
        div3.attr("class","radial");
    }

    function start() {

        var rp1 = radialProgress(document.getElementById('forecastEval'))
                .diameter(175)
                .value(52)
                .render();

        var rp2 = radialProgress(document.getElementById('applianceEval'))
                .diameter(175)
                .value(60)
                .render();

        var rp3 = radialProgress(document.getElementById('goalEval'))
                .diameter(175)
                .value(68)
                .render();

        var rp4 = radialProgress(document.getElementById('programEval'))
                .diameter(175)
                .value(85)
                .render();

        var rp5 = radialProgress(document.getElementById('utilityBill'))
                .diameter(250)
                .value(31)
                .render();

        // var rp3 = radialProgress(document.getElementById('div3'))
        //         .diameter(150)
        //         .minValue(100)
        //         .maxValue(200)
        //         .value(150)
        //         .render();

    }


