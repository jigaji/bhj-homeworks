const value = document.querySelector(`.dropdown__value`);
const list = document.querySelector(`.dropdown__list`);
const links = document.querySelectorAll(`.dropdown__link`);


value.addEventListener(`click`, function() {
    list.classList.add(`dropdown__list_active`);
});

for (let l of Array.from(links)) {
    l.addEventListener('click', function(event) {
        event.preventDefault();
        list.classList.remove(`dropdown__list_active`);
        value.textContent = this.closest(`a`).textContent;
    })
}

