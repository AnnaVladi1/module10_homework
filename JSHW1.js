const btn = document.querySelector('.button_js');
const icon1 = document.querySelector('.bi-arrow-down-left-circle');
const icon2 = document.querySelector('.bi-arrow-down-left-circle-fill');

btn.addEventListener('click', () => {
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
});