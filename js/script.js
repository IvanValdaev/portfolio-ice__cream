document.querySelector('.burger').addEventListener('click', function () {
	document.querySelector('.burger span').classList.toggle('active');
	document.querySelector('.menu').classList.toggle('animate');
})

//Слайдер





var swiper = new Swiper('.image-slider', {
	pagination: {
		el: ".swiper-pagination",
	},
});

