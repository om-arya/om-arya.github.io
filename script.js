const flipButtonFront = document.querySelector('.flip-button-front');
const flipButtonBack = document.querySelector('.flip-button-back');

flipButtonFront.addEventListener('click', () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');

    front.classList.toggle('visible');
    front.classList.toggle('hidden');
    back.classList.toggle('hidden');
    back.classList.toggle('visible');
});

flipButtonBack.addEventListener('click', () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');

    back.classList.toggle('visible');
    back.classList.toggle('hidden');
    front.classList.toggle('hidden');
    front.classList.toggle('visible');
});