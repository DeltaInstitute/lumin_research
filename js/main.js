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
$('.recruitment').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $(this).addClass('drawBubble');
    } else {
        $(this).removeClass("drawBubble");
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
        $(this).addClass('cursorMove');
    } else {
        $(this).removeClass('cursorMove');
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
        $('.envelope').addClass('open');
    } else {
        $('.envelope').removeClass('open');
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


