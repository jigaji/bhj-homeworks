const images = Array.from(document.querySelectorAll('div.slider__item'));
let next = document.querySelector('div.slider__arrow_next');
let previous = document.querySelector('div.slider__arrow_prev');


next.onclick= () => {
    let index = images.indexOf(document.querySelector('div.slider__item_active'));
    let nextIndex = index + 1;
    if (nextIndex === images.length) {
        nextIndex = 0;  
    }
    images[index].classList.remove('slider__item_active');
    images[nextIndex].classList.add('slider__item_active');
}


previous.onclick= () => {
    let index = images.indexOf(document.querySelector('div.slider__item_active'));
    let prevIndex = index - 1;
    if (prevIndex === -1) {
        prevIndex = images.length - 1;  
    }
    images[index].classList.remove('slider__item_active');
    images[prevIndex].classList.add('slider__item_active');
}