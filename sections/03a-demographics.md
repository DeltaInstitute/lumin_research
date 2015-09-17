---
layout: section
title: Demographic and Geographic Priorities
<!-- bannerpath: img/question.jpg -->
---
<link href='https://api.mapbox.com/mapbox.js/v2.2.2/mapbox.css' rel='stylesheet' />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim accumsan tempor. Nam pellentesque justo quam, quis malesuada libero semper ut. Duis laoreet augue elit, eleifend posuere sapien varius eu. Suspendisse tristique orci eget sem accumsan, ut cursus turpis porta. Donec elementum tellus vitae diam facilisis, in eleifend mi maximus. Fusce erat tortor, pharetra ac cursus at, volutpat eu sem. Ut et semper velit, ac feugiat nulla. Sed ipsum leo, rutrum a justo et, aliquam iaculis elit. Proin scelerisque vitae massa nec elementum.</p>

<div id='map'></div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim accumsan tempor. Nam pellentesque justo quam, quis malesuada libero semper ut. Duis laoreet augue elit, eleifend posuere sapien varius eu. Suspendisse tristique orci eget sem accumsan, ut cursus turpis porta. Donec elementum tellus vitae diam facilisis, in eleifend mi maximus. Fusce erat tortor, pharetra ac cursus at, volutpat eu sem. Ut et semper velit, ac feugiat nulla. Sed ipsum leo, rutrum a justo et, aliquam iaculis elit. Proin scelerisque vitae massa nec elementum.</p>

<script src='https://api.mapbox.com/mapbox.js/v2.2.2/mapbox.js'></script>
<script src="js/main.js" type="text/javascript"></script>

<script>
	L.mapbox.accessToken = 'pk.eyJ1IjoiY21jZyIsImEiOiJlZTA1Mjg5MThhNzAwYjIwMzkzOTRhZmI0YzdhM2ZhNyJ9.qmfiogrh1Wu7_JlfoaSMKw';
	var map = L.mapbox.map('map', 'mapbox.streets')
	    .setView([41.831396, -87.610218], 9);
</script>