const rotator =  document.querySelectorAll(".rotator__case");
let i = 0;
let delay = 1000;



setInterval(() => { 
    rotator[i].classList.toggle("rotator__case_active");
    i++;
    if (i === rotator.length) {
        i = 0;
    }
    delay =  rotator[i].getAttribute("data-speed");
    let color = rotator[i].getAttribute("data-color");
    rotator[i].style.color = color;
    rotator[i].classList.toggle("rotator__case_active");
    
}, delay)
