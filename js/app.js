/*jslint browser: true*/
/*global $, jQuery, alert*/
var slideInterval = 5000;
$(document).ready(function () {
	'use strict';
	var sliderLength = $("#slide-dots li").length,
		curSlide = $('.active'),
		slideIndex = curSlide.parent('li').index() + 1,
		nextSlide,
		imageHttp = '',
		slides = {
			'1' : "img/01.jpg",
			'2' : "img/02.jpg",
			'3' : "img/03.jpg",
			'4' : "img/04.jpg"
		},
		slideInterval = 5000, // initial condition
		run = setInterval(request, slideInterval);
	function slideSwap() {
		$('#slide-dots li a').removeClass('active');
		imageHttp = slides[slideIndex];
		$('#banner').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("' + imageHttp + '")');
		nextSlide = slideIndex - 1;
		$('#slide-dots li').eq(nextSlide).find('a').addClass('active');
	}
	function timerSlide() {
		if (slideIndex < sliderLength) {
			slideIndex += 1;
		} else {
			slideIndex = 1;
		}
		slideSwap();
	}
	function request() {
        clearInterval(run);
        run = setInterval(request, slideInterval);
		timerSlide();
    }
	$('#slide-dots li').click(function (e) {
		e.preventDefault();
		$('#slide-dots li').find('a').removeClass('active');
		$(this).find('a').addClass('active');
		var index = $(this).index() + 1;
		imageHttp = slides[index];
		$('#banner').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("' + imageHttp + '")');
		slideInterval = 15000;
	});
	$('.next').click(function () {
		if (slideIndex < sliderLength) {
			slideIndex += 1;
		} else {
			slideIndex = 1;
		}
		slideInterval = 10000;
		slideSwap();
	});
	$('.prev').click(function () {
		if (slideIndex > 1) {
			slideIndex -= 1;
		} else {
			slideIndex = 4;
		}
		slideInterval = 10000;
		slideSwap();
	});
});