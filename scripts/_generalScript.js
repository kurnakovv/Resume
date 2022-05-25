//? your scripts //
let burgerCheckboxClass = '#menu__toggle';
let burgerButtonClass = '.burger-btn';
let burgerMenuSelector = '.navmenu';
let burgerCheckbox = document.querySelector(burgerCheckboxClass);
let bergerMenu = document.querySelector(burgerMenuSelector);
window.addEventListener('pointerup', disableBurgerMenuByClickOnAnother, false);
function disableBurgerMenuByClickOnAnother(e) {
    if (!e.target.closest(`${burgerButtonClass}, ${burgerMenuSelector}`)) {
        burgerCheckbox.checked = false;
    }
}