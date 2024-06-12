const flipButtonFront = document.querySelector('.flip-button-front');
const flipButtonBack = document.querySelector('.flip-button-back');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

const stockRankName = document.querySelector('.stock-rank-name');
const projectsContainer = document.querySelector('.projects-container');

flipButtonFront.addEventListener('click', () => {
    toggleHighlight(stockRankName);
    
    front.classList.toggle('visible');
    front.classList.toggle('hidden');
    back.classList.toggle('hidden');
    back.classList.toggle('visible');
});

flipButtonBack.addEventListener('click', () => {
    projectsContainer.style["scroll-behavior"] = "auto";
    projectsContainer.scrollTop = 0;
    projectsContainer.style["scroll-behavior"] = "smooth";

    back.classList.toggle('visible');
    back.classList.toggle('hidden');
    front.classList.toggle('hidden');
    front.classList.toggle('visible');
});

const projectNames = document.querySelectorAll('.table-of-contents a');

let wasClicked = false;
function toggleHighlight(selectedProjectName) {
    projectNames.forEach(projectName => {
        if (projectName === selectedProjectName) {
            projectName.classList.add('selected');
        } else {
            projectName.classList.remove('selected');
        }
    });

    wasClicked = true;
    setTimeout(() => {
        wasClicked = false;
    }, 600);
}


projectNames.forEach((projectName) => {
    projectName.addEventListener('click', () => toggleHighlight(projectName));
});

const scrollThreshold = 200;

let prevScrollTop = projectsContainer.scrollTop;
projectsContainer.onscroll = () => {
    const currentScrollTop = projectsContainer.scrollTop;
    const scrollDifference = Math.abs(currentScrollTop - prevScrollTop);

    if (scrollDifference >= scrollThreshold) {
        if (!wasClicked) {
            projectNames.forEach(projectName => {
                projectName.classList.remove('selected');
            });
        }

        prevScrollTop = currentScrollTop;
    }
}