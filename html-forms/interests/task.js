const interests = document.querySelectorAll(".interest__check");


for (let interest of interests) {
    interest.addEventListener('change', function(e) { 
        if (interest.checked ) {
            let subCheck = interest.closest(".interest").lastElementChild.children;
            console.log(subCheck)
            for (let i = 0; i < subCheck.length; i++) {
                let item = subCheck.item(i);
                let sub = item.firstElementChild.firstElementChild;
                sub.checked = true;
            }
        }
    })
}