const holes = document.getElementsByClassName(`hole`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;

for (let hole of holes) {
        hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )){
            deadCounter += 1;
            dead.textContent =  + deadCounter;
            if (deadCounter == 10) {
                alert('Победа');
                clear();
            }
        } else {
            lostCounter += 1;
            lost.textContent = + lostCounter;
            if (lostCounter == 5) {
                alert('Вы проиграли');
                clear()
            } 
        }        
    }
} 

function clear () {
    deadCounter = 0;
    dead.textContent= deadCounter;
    lostCounter = 0; 
    lost.textContent = lostCounter;s
}