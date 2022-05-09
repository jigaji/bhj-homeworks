const images = Array.from(document.querySelectorAll('div.slider__item'));
const next = document.querySelector('div.slider__arrow_next');
const previous = document.querySelector('div.slider__arrow_prev');
const sliderDot = document.querySelectorAll('.slider__dot');
const sliderItem = document.querySelectorAll('.slider__item');
let count = 0


for (let i = 0; i < sliderDot.length; i++) {
	sliderDot[i].onclick = function () {
		active();
		count = i;
		active();
	}
}


next.onclick= () => {
    active();
    count++;
    if (count >= sliderItem.length) {
		count = 0;
	}
	active();    
}


previous.onclick= () => {
    active();
	count--;
	if (count < 0) {
		count = sliderItem.length - 1;
	}
	active();
}


function active() {
    if (sliderItem[count].classList.contains('slider__item_active')) {
		sliderItem[count].classList.remove('slider__item_active');
		sliderDot[count].classList.remove('slider__dot_active');
	} else {
		sliderItem[count].classList.add('slider__item_active');
		sliderDot[count].classList.add('slider__dot_active');
	}
}