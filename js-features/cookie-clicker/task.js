const img = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const speed = document.getElementById('speed')
counter = 0;
lastClick = new Date().getTime();

img.onclick = () => {
    counter ++;
    clicker.textContent = +counter; 
    const clickTime = new Date().getTime();
    speed.textContent = parseFloat((clickTime - lastClick) / 1000);
    if (counter % 2 == 0) {
        img.width = parseInt(img.width) - 20;
        img.height = parseInt(img.height) - 20;
    } else if (counter % 2 != 0) {
        img.width = parseInt(img.width) +  20;
        img.height = parseInt(img.height) + 20;
    }
    lastClick = clickTime

}
