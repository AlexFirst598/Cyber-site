const menu = document.querySelector('.menu');
const burgerOpen = document.querySelector('.header__menu-btn');
const burgerClose = document.querySelector('.menu__btn');
const menuWrapper = document.querySelector('.menu__wrapper');

burgerOpen.addEventListener('click', (event) => {
    event.preventDefault()
    menu.classList.add('menu--active')
    setTimeout( () => {
        menuWrapper.classList.add('menu__wrapper--active')
    }, 5)
})

burgerClose.addEventListener('click', (event) => {
    event.preventDefault()
    menuWrapper.classList.remove('menu__wrapper--active')
    setTimeout( () => {
        menu.classList.remove('menu--active')
    }, 501)
})
