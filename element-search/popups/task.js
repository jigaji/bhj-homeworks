const main = document.getElementById('modal_main');
const close = document.getElementsByClassName('modal__close');
const success = document.getElementById('modal_success');


main.classList.add('modal_active');


for (i = 0; i < close.length; i++) {
    close[i].classList.add('modal_active');
    if (close[i].classList.contains('show-success')) {
        close[i].onclick = ModalSuccess;
    } else {
        close[i].onclick = CloseActive;
    }
}


function ModalSuccess() {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
}


function CloseActive() {
    main.classList.remove('modal_active');
    success.classList.remove('modal_active');
}
