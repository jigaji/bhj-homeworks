let menus = document.getElementsByClassName('menu_main');

for (let menu of menus) {
    let items = menu.querySelectorAll('ul.menu_main li.menu__item');
    for (let item of items) {
        let subMenus = item.querySelectorAll('ul.menu_sub');
        for (let subMenu of subMenus) {
            item.onclick = () => {
                if (subMenu.classList.contains('menu_active')) {
                    clear(menu);
                    return false;
                }
                else {
                    clear(menu);
                    subMenu.classList.add('menu_active');
                    return false;
                }
            };
        }
    }
}

function clear(menu) {
    let activeSubMenus = menu.querySelectorAll('ul.menu_active li.menu__item');
    for(let activeSubMenu of activeSubMenus) {
        activeSubMenu.parentElement.classList.remove('menu_active');
    }
}
