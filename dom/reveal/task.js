const reveal = document.querySelectorAll(".reveal");

window.addEventListener('scroll', active);

function active() {
    let height = window.innerHeight;
    for (let r of reveal) {
        revealTop = r.getBoundingClientRect().top;
        revealBottom = r.getBoundingClientRect().bottom
        if ((revealTop < height) && (revealBottom > 0)) {
            r.classList.toggle("reveal_active")
        } 
    }
}