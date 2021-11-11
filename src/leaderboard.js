import './style.css';

const result = [];

export default function currentLeaderboard() {
    const container = document.querySelector('#leaderboard');

    result.forEach((element) => {
        const { user, score } = element;
        const item = document.createElement('li');
        item.classList.add('row');
        item.innerHTML = `<p>${element.user}:  ${element.score}</p>`;
        container.appendChild(item);

    });

};

