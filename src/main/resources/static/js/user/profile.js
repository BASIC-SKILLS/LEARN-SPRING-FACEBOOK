const profileImgElem = document.querySelector('#flexContainer .profile.w300.pointer');
const modalElem = document.querySelector('section .modal');
const modalCloseElem = document.querySelector('section .modal .modal_close');

profileImgElem.addEventListener('click', () => {
    modalElem.classList.remove('hide');
});

modalCloseElem.addEventListener('click', () => {
    modalElem.classList.add('hide');
})