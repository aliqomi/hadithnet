// Run javascript after DOM is initialized
$(document).ready(function() {

	$('.tabs_default').tabslet();

	$('.tabs_active').tabslet({
		active: 2
	});

	$('.tabs_hover').tabslet({
		mouseevent: 'hover',
		attribute: 'id',
		//animation: true,
		autorotate: true,
		delay: 3000
	});
	$('.tabs_hover2').tabslet({
		mouseevent: 'hover',
		attribute: 'id',
		//animation: true,
		autorotate: false,
		delay: 2000
	});
	$('.tabs_hover3').tabslet({
		mouseevent: 'hover',
		attribute: 'id',
		//animation: true,
		autorotate: true,
		delay: 3000
	});
	$('.tabs_hover4').tabslet({
		mouseevent: 'hover',
		attribute: 'id',
		//animation: true,
		autorotate: true,
		delay: 4000
	});

	$('.tabs_animate').tabslet({
		mouseevent: 'click',
		attribute: 'href',
		animation: true
	});

	$('.tabs_rotate').tabslet({
		autorotate: true,
		delay: 3000
	});

	$('.tabs_controls').tabslet();

	$('.before_event').tabslet();
	$('.before_event').on("_before", function() {
		alert('This alert comes before the tab change!')
	});

	$('.after_event').tabslet({
		animation: true
	});
	$('.after_event').on("_after", function() {
		alert('This alert comes after the tab change!')
	});

});