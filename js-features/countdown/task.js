const countdown = function(){
    const seconds = document.getElementById('timer');  

    if (seconds.textContent >= 1 ) {
        seconds.textContent --;
    } else if (seconds.textContent === '0' ) {
        alert('Вы победили в конкурсе!')
    }
}

setInterval(countdown, 1000);

