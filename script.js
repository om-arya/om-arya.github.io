const flipCardButton = document.querySelector('.flip-card-button');
flipCardButton.addEventListener('click', () => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');

    if (front.style.visibility = "visible") {
        front.classList.toggle('visible');
        front.classList.toggle('hidden');
        back.classList.toggle('hidden');
        back.classList.toggle('visible');
    } else {
        back.classList.toggle('visible');
        back.classList.toggle('hidden');
        front.classList.toggle('hidden');
        front.classList.toggle('visible');
    }
});