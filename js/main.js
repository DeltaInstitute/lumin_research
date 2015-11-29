

// Nav
//======================================================================================

$('.hamburger').on('click', function(){
    $('.menu').toggleClass('openMenu');
});

$('nav a').on('click', function() {
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 1200);
});

var introPosition = $('.intro').offset().top;
var approachPosition = $('#approach').offset().top;
var recruitmentPosition = $('#recruitment').offset().top;
var prototypePosition = $('#prototype').offset().top;
var pilotPosition = $('#pilot').offset().top;
var learningPosition = $('#learning').offset().top;
var futurePosition = $('#future').offset().top;
var contactPosition = $('#contact').offset().top;


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

$(window).on('scroll', function(){
    if ($(this).scrollTop() > contactPosition - 100) {
        $('nav').find('a').removeClass('activeNav');
        $('#contactNav').addClass('activeNav');
    } else {
        $('#contactNav').removeClass('activeNav');
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



$('#zip60638').on('click', function(){
    $('.zipText').hide();
    $('#zipText60638').fadeIn();
    $('#zip60638').attr('stroke', '#000');
});

$('#zip60652').on('click', function(){
    $('.zipText').hide();
    $('#zipText60652').fadeIn(300);
});

$('#zip60615').on('click', function(){
    $('.zipText').hide();
    $('#zipText60615').fadeIn(300);
});

$('#zip60621').on('click', function(){
    $('.zipText').hide();
    $('#zipText60621').fadeIn(300);
});

$('#zip60636').on('click', function(){
    $('.zipText').hide();
    $('#zipText60636').fadeIn(300);
});

$('#zip60649').on('click', function(){
    $('.zipText').hide();
    $('#zipText60649').fadeIn(300);
});

$('#zip60617').on('click', function(){
    $('.zipText').hide();
    $('#zipText60617').fadeIn(300);
});

$('#zip60643').on('click', function(){
    $('.zipText').hide();
    $('#zipText60643').fadeIn(300);
});

$('#zip60653').on('click', function(){
    $('.zipText').hide();
    $('#zipText60653').fadeIn(300);
});

$('#zip60628').on('click', function(){
    $('.zipText').hide();
    $('#zipText60628').fadeIn(300);
});

$('#zip60629').on('click', function(){
    $('.zipText').hide();
    $('#zipText60629').fadeIn(300);
});

$('#zip60620').on('click', function(){
    $('.zipText').hide();
    $('#zipText60620').fadeIn(300);
});

$('#zip60637').on('click', function(){
    $('.zipText').hide();
    $('#zipText60637').fadeIn(300);
});

$('#zip60619').on('click', function(){
    $('.zipText').hide();
    $('#zipText60619').fadeIn(300);
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
        $(this).addClass('open');
    } else {
        $(this).removeClass('open');
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

// Learning animation
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

// Communication Results
//======================================================================================
$(window).scroll(function () {
$('.commCharts').each(function () {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
        $(this).addClass("commDrawMail");
    } else {
        $(this).removeClass("commDrawMail");
    }
    });
});


// Survey Results - Feature Eval Animation
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

    if (imagePos < topOfWindow + 250 && imagePos > topOfWindow + 150) {  
        start();
    }
    });
});

    function labelFunction(val,min,max) {

    }

    // function deselect() {
    //     div1.attr("class","radial");
    //     forecastEval.attr("class","radial");
    //     div3.attr("class","radial");
    // }

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
                .diameter(400)
                .value(31)
                .render();
    }

// General Engagement
//======================================================================================

$('#actionButton').on('click', function(){
    $(this).find('.buttonToFill').find('path').attr('fill', '#6ba1b9');
    $(this).find('text').attr('fill', '#fff');
    $('#intentionButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#intentionButton').find('text').attr('fill', '#000');
    $('#intentionSummary').fadeOut();
    $('#actionSummary').fadeIn();
});

$('#intentionButton').on('click', function(){
    $(this).find('.buttonToFill').find('path').attr('fill', '#6ba1b9');
    $(this).find('text').attr('fill', '#fff');
    $('#actionButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#actionButton').find('text').attr('fill', '#000');
    $('#actionSummary').fadeOut();
    $('#intentionSummary').fadeIn();
});


// Spending forecast to engagement
//======================================================================================
$('#efficiencyButton').on('click', function(){
    $(this).find('.buttonToFill').find('path').attr('fill', '#6ba1b9');
    $(this).find('text').attr('fill', '#fff');
    $('#hypothesisButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#hypothesisButton').find('text').attr('fill', '#000');
    $('#conservationButton').find('.buttonToFill').find('rect').attr('fill', '#fff');
    $('#conservationButton').find('text').attr('fill', '#000');
    $('#forecastConservation').fadeOut();
    $('#hypothesis').fadeOut();
    $('#forecastMonths').fadeIn();
    $('#forecastEfficiency').fadeIn();
});

$('#conservationButton').on('click', function(){
    $(this).find('.buttonToFill').find('rect').attr('fill', '#6ba1b9');
    $(this).find('text').attr('fill', '#fff');
    $('#hypothesisButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#hypothesisButton').find('text').attr('fill', '#000');
    $('#efficiencyButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#efficiencyButton').find('text').attr('fill', '#000');
    $('#forecastEfficiency').fadeOut();
    $('#hypothesis').fadeOut();
    $('#forecastMonths').fadeIn();
    $('#forecastConservation').fadeIn();
});

$('#hypothesisButton').on('click', function(){
    $(this).find('.buttonToFill').find('path').attr('fill', '#6ba1b9');
    $(this).find('text').attr('fill', '#fff');
    $('#conservationButton').find('.buttonToFill').find('rect').attr('fill', '#fff');
    $('#conservationButton').find('text').attr('fill', '#000');
    $('#efficiencyButton').find('.buttonToFill').find('path').attr('fill', '#fff');
    $('#efficiencyButton').find('text').attr('fill', '#000');
    $('#forecastEfficiency').fadeOut();
    $('#forecastConservation').fadeOut();
    $('#forecastMonths').fadeOut();
    $('#hypothesis').fadeIn();
});
 

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



