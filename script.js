const hamburgerMenu = document.querySelector('.hamburger-menu');
const offscreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
})