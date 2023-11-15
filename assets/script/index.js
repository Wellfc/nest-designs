'use strict';

const modal = document.querySelector('.modal');
const container = document.querySelector('.login__container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// btnPopup.addEventListener('click', () => {
//     modal.classList.add('active-popup');
//     container.classList.add('active-popup');
// });

iconClose.addEventListener('click', () => {
    modal.classList.remove('active-popup');
    container.classList.remove('active-popup');
});