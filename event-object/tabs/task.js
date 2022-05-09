const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");
const tabs = Array.from(tab);

for (let t of tabs) {
    t.addEventListener('click', function() {
        t.classList.add("tab_active");
        for (let i of Array.from(tabContent)) {
            i.classList.remove("tab__content_active");
        }
        tabContent[tabs.indexOf(t)].classList.add("tab__content_active")
    })
}