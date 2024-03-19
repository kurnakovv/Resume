let burgerButtonSelector = 'label[for="menu-toggler"]'
let burgerMenuSelector = '#index > nav'
let burgerCheckbox = document.querySelector('#menu-toggler')

window.addEventListener('pointerup', disableBurgerMenuByClickOnAnother)

function disableBurgerMenuByClickOnAnother(event) {
  if (burgerCheckbox.checked && !event.target.closest(`${burgerButtonSelector}, ${burgerMenuSelector}`)) {
    burgerCheckbox.checked = false
  }
}