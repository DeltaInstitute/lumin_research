---
layout: section
title: Communicating Energy Use
---
<p>After calculating the data and using that data to build visualizations, we then built a system for communicating that information to participants through channels that were easily accessible for them, including the online participant dashboard, emails, and printed letters.</p>

<div class="row">
	<div class="col-sm-6">
		<img src="img/download-fury.gif" alt="png factory" class="img-responsive">
	</div>
	<div class="col-sm-6">	
		<p>Connecting the data to the online dashboard was accomplished using Google Sheets and Tabletop, a javascript library that converts Google Sheets data to objects and/or arrays through an XHR. This was useful for modifying and tweaking calculations, but it is too slow for a production environment. The back end will be rebuilt to allow for more real-time data manipulation.</p>
		
		<p>Developing individualized email and print mailings required the creation of a PNG factory using saveSVGAsPNG. This allowed the team to use the Dashboard instead of replicating this functionality in Adobe Creative Suite. The team used Salesforce to insert PNGs for email.</p>
	</div>
</div>