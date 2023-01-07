const btn = document.querySelector('.button_js');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

btn.addEventListener('click', () => {
return alert(`Ширина экрана- ${screenWidth}px, Высота экрана- ${screenHeight}px`);
});
