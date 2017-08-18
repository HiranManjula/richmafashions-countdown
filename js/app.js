/*
 * A Design by GraphBerry
 * Author: GraphBerry
 * Author URL: http://graphberry.com
 * License: http://graphberry.com/pages/license
 */
$(function(){
	'use strict';

	var options ={
		wrapper: ".wrapper",
		minHeight: 500
	};

	function setHeight(){
		var documentHeight = $(window).height();

		if(documentHeight > options.minHeight){
			$(options.wrapper).height(documentHeight);
		}
	}

	setHeight();

	$(window).resize(function(){
		setHeight();
	})

	$('#clock').countdown('2017/10/01', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<li><span class="days">%D</span><p class="days_ref">days</p></li>'
    + '<li><span class="hours">%H</span><p class="hours_ref">hours</p></li>'
    + '<li><span class="minutes">%M</span><p class="minutes_ref">minutes</p></li>'
    + '<li><span class="seconds">%S</span><p class="seconds_ref">seconds</p></li>'));
	});

});