const main = document.getElementById('modal_main');
const close = document.getElementsByClassName('modal__close');
const success = document.getElementById('modal_success');
const button = document.getElementsByClassName("show-success")[0];

main.classList.add('modal_active');

close[0].onclick = () => {
    main.classList.remove('modal_active');
}

button.onclick = () => {
    main.classList.remove('modal_active');
    success.classList.add('modal_active')
}

close[2].onclick = () => {
    success.classList.remove('modal_active');
    main.classList.remove('modal_active');
}
