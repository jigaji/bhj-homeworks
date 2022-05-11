const hasTooltip = document.querySelectorAll(`.has-tooltip`);
const toolTip = Array.from(hasTooltip);

const tool = document.createElement(`div`);

toolTip.forEach((el) => {el.addEventListener(`click`, function (event) {
    tool.classList.add(`tooltip`);
    tool.setAttribute(`style`, `left: ${el.getBoundingClientRect().left}px; top: ${el.getBoundingClientRect().top +20}px`);
    tool.classList.toggle(`tooltip_active`);
    tool.innerText = `${el.title}`;
    el.insertAdjacentElement("afterend", tool);
    
    event.preventDefault();
    
})})