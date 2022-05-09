const menu_link = document.getElementsByClassName('menu__link');

for (let l of Array.from(menu_link))
  l.onclick = function() {
    
    const mainMenu = this.closest('ul');
    const subMenu = this.parentElement.querySelector('.menu_sub');
    
    if (!subMenu) 
      return true;

    if (mainMenu.className === 'menu menu_main') {
      const activeMenu = mainMenu.querySelector('.menu_active');
      if (activeMenu && (activeMenu !== subMenu)) 
        activeMenu.className = 'menu menu_sub';
    }    
    
    if (subMenu.className === 'menu menu_sub') 
      subMenu.className = 'menu menu_sub menu_active';
    else
      subMenu.className = 'menu menu_sub';   
    return false;
       
  }