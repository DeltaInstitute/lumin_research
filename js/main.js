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

// Nav
//======================================================================================

$('.hamburger').on('click', function(){
    $('.menu').toggleClass('openMenu');
});

$('.menu a').on('click', function() {
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 800);
});


var approachPosition = $('#approach').offset().top;
var recruitmentPosition = $('#recruitment').offset().top;
var prototypePosition = $('#prototype').offset().top;
var pilotPosition = $('#pilot').offset().top;
var learningPosition = $('#learning').offset().top;
var futurePosition = $('#future').offset().top;

$(window).on('scroll', function(){
    if ($(this).scrollTop() > approachPosition - 100) {
        $('#menu').find('a').removeClass('activeNav');
        $('#approachNav').addClass('activeNav');
    } else {
        $('#approachNav').removeClass('activeNav');
    }
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > recruitmentPosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#recruitmentNav').addClass('activeNav');
    } else {
        $('#recruitmentNav').removeClass('activeNav');
    }
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > prototypePosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#prototypeNav').addClass('activeNav');
    } else {
        $('#prototypeNav').removeClass('activeNav');
    }
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > pilotPosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#pilotNav').addClass('activeNav');
    } else {
        $('#pilotNav').removeClass('activeNav');
    }
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > learningPosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#learningNav').addClass('activeNav');
    } else {
        $('#learningNav').removeClass('activeNav');
    }
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > futurePosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#futureNav').addClass('activeNav');
    } else {
        $('#futureNav').removeClass('activeNav');
    }
});

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

// Human centered design
//======================================================================================
$('#researchTitle').on('click', function () {
    $('#researchText').slideDown();
});

$('#developmentTitle').on('click', function () {
    $('#developmentTitle').css('opacity', 1);
    $('#developmentText').slideToggle();
});

$('#refineTitle').on('click', function () {
    $('#refineTitle').css('opacity', 1);
    $('#refineText').slideToggle();
});

$('#pilotTitle').on('click', function () {
    $('#pilotTitle').css('opacity', 1);
    $('#pilotText').slideToggle();
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
    } 
    });
});


// Feature carousel animation
//======================================================================================

var featureImages=['img/spending-forecast.svg', 'img/appliance-diagnosis.svg', 'img/goal-setting.svg', 'img/program-match.svg'];

var featureDescription = ['#spendingDescription', '#applianceDescription', '#goalDescription', '#programDescription']

var currentFeaturePosition = 0;

$('#nextFeature').on('click', nextFeature);
$('#prevFeature').on('click', previousFeature);

function nextFeature(){
    currentFeaturePosition++;
    
    $('#prevFeature').prop('disabled', false);

    changeFeature();

    if (currentFeaturePosition === featureImages.length - 1) {
        $('#nextFeature').prop('disabled', true);
    }
}

function previousFeature(){
    currentFeaturePosition--;

    $('#nextFeature').prop('disabled', false);

    changeFeature();

    if (currentFeaturePosition === 0 ) {
        $('#prevFeature').prop('disabled', true);
    }
}

function changeFeature(){
    $('#featureImg').attr('src', featureImages[ currentFeaturePosition ]);
    $('.featureDescriptions').addClass('hidden');
    $(featureDescription[ currentFeaturePosition ]).removeClass('hidden');
}

// Measures animation
//======================================================================================
// $(window).scroll(function () {
// $('.measureExample').each(function () {
//     var imagePos = $(this).offset().top;
//     var imageHeight = $(this).height();
//     var topOfWindow = $(window).scrollTop();

//     if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
//         $('.lightOn').addClass('switchOn');
//         $('.string').addClass('pullOn');
//     } else {
//         $('.lightOn').removeClass('switchOn');
//         $('.string').removeClass('pullOn');
//     }
//     });
// });


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

// Recruitment Map
//======================================================================================

L.mapbox.accessToken = 'pk.eyJ1IjoiY21jZyIsImEiOiJlZTA1Mjg5MThhNzAwYjIwMzkzOTRhZmI0YzdhM2ZhNyJ9.qmfiogrh1Wu7_JlfoaSMKw';
var map = L.mapbox.map('map', 'mapbox.streets')
.setView([41.831396, -87.610218], 9);


// Participant Profile interaction
//======================================================================================

function switchTabs() {
    $('.profileCharts').fadeOut(200);
    $('.profileTabs').find('rect').attr('fill', '#ccc');
    $('.profileTabs').find('text').attr('opacity', '.4');
}

$('#whoAreThey').on('click', function() {
    switchTabs();
    $(this).find('rect').attr('fill', '#eee');
    $(this).find('text').attr('opacity', '1');
    $('#whoCharts').fadeIn(200);

});

$('#whereTheyLive').on('click', function() {
    switchTabs();
    $(this).find('rect').attr('fill', '#eee');
    $(this).find('text').attr('opacity', '1');
    $('#whereCharts').fadeIn(200);
});

$('#howTheyUseEnergy').on('click', function() {
    switchTabs();
    $(this).find('rect').attr('fill', '#eee');
    $(this).find('text').attr('opacity', '1');
    $('#howCharts').fadeIn(200);
});

// Zipcode Interation
//======================================================================================

$('#zip60638').on('mouseenter', function(){
    $('#zipText60638').attr('display', 'inline');
});

$('#zip60638').on('mouseout', function(){
    $('#zipText60638').attr('display', 'none');
});

$('#zip60652').on('mouseenter', function(){
    $('#zipText60652').attr('display', 'inline');
});

$('#zip60652').on('mouseout', function(){
    $('#zipText60652').attr('display', 'none');
});

$('#zip60615').on('mouseenter', function(){
    $('#zipText60615').attr('display', 'inline');
});

$('#zip60615').on('mouseout', function(){
    $('#zipText60615').attr('display', 'none');
});

$('#zip60621').on('mouseenter', function(){
    $('#zipText60621').attr('display', 'inline');
});

$('#zip60621').on('mouseout', function(){
    $('#zipText60621').attr('display', 'none');
});

$('#zip60636').on('mouseenter', function(){
    $('#zipText60636').attr('display', 'inline');
});

$('#zip60636').on('mouseout', function(){
    $('#zipText60636').attr('display', 'none');
});

$('#zip60649').on('mouseenter', function(){
    $('#zipText60649').attr('display', 'inline');
});

$('#zip60649').on('mouseout', function(){
    $('#zipText60649').attr('display', 'none');
});

$('#zip60617').on('mouseenter', function(){
    $('#zipText60617').attr('display', 'inline');
});

$('#zip60617').on('mouseout', function(){
    $('#zipText60617').attr('display', 'none');
});

$('#zip60643').on('mouseenter', function(){
    $('#zipText60643').attr('display', 'inline');
});

$('#zip60643').on('mouseout', function(){
    $('#zipText60643').attr('display', 'none');
});

$('#zip60653').on('mouseenter', function(){
    $('#zipText60653').attr('display', 'inline');
});

$('#zip60653').on('mouseout', function(){
    $('#zipText60653').attr('display', 'none');
});

$('#zip60628').on('mouseenter', function(){
    $('#zipText60628').attr('display', 'inline');
});

$('#zip60628').on('mouseout', function(){
    $('#zipText60628').attr('display', 'none');
});

$('#zip60629').on('mouseenter', function(){
    $('#zipText60629').attr('display', 'inline');
});

$('#zip60629').on('mouseout', function(){
    $('#zipText60629').attr('display', 'none');
});

$('#zip60620').on('mouseenter', function(){
    $('#zipText60620').attr('display', 'inline');
});

$('#zip60620').on('mouseout', function(){
    $('#zipText60620').attr('display', 'none');
});

$('#zip60637').on('mouseenter', function(){
    $('#zipText60637').attr('display', 'inline');
});

$('#zip60637').on('mouseout', function(){
    $('#zipText60637').attr('display', 'none');
});

$('#zip60619').on('mouseenter', function(){
    $('#zipText60619').attr('display', 'inline');
});

$('#zip60619').on('mouseout', function(){
    $('#zipText60619').attr('display', 'none');
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


// Pilot animation
//======================================================================================
$(window).scroll(function () {
$('.feedback').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('.feedback').addClass('show');
    } else {
        $('.feedback').removeClass('show');
    }
    });
});

// Survey Results - Treatment Eval Animation
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
    }

// Web Analytics
//======================================================================================

$('.webAnalyticsBars rect').on('mouseenter', function() {
    var views = $(this).attr('y');
    views = parseFloat(views);
    views = (400 - views) / 6;
    var date = $(this).attr('x');
    date = parseFloat(date);
    date = date - 4;
    $('.webViewMsg').find('p').show();
    $('.webViewCount').html(views + ' visits');
    $('.webViewDate').html('day ' + date);
});

// Looking Foward Animation
//======================================================================================

$(window).scroll(function () {
$('.twoPointOh').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $('.twoPointOh').addClass('erase');
    } else {
        $('.twoPointOh').removeClass('erase');
    }
    
    });
});



