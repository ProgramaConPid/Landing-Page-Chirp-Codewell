const menuBtn = document.querySelector('#menu__hamburger');
const menuMobile = document.querySelector('.nav__links')

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
})