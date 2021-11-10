import _ from 'lodash';
import './style.css';

const leaderboard = [
    {name: 'Hannah', score: 98},
    {name: 'Kevin', score: 94},
    {name: 'Stuart', score: 81},
    {name: 'Matt', score: 87},
    {name: 'Alyssa', score: 90},
    {name: 'Jamie', score: 72},
]

const container = document.querySelector('#leaderboard');

leaderboard.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add('row');
    item.textContent = (`${element.name}`) + ': ' + (`${element.score}`);
    container.appendChild(item);
});


