$(document).ready(function () {
	$('.main .header .inner .navigation  > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fal fa-times"></i></a></li>');
	
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
	$(document).on('click', '#return-to-top', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	
	var myBanner = new Swiper('#logistic-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 250,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
	})
	var myBlog = new Swiper('#logistic-blog', {
		slidesPerView: 3,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	})
})