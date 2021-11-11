import './style.css';
import { getScore, postScore } from './gameapi';
import currentLeaderboard from './leaderboard';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const mainContainer = document.querySelector('#leaderboard');
const userInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userInputF = userInput.value;
    const scoreInputF = scoreInput.value;
    await postScore(userInputF, scoreInputF);
});

function updateLeaderboard () {
    const fetchScore = getScore();
    console.log(fetchScore.result);
    const updateList = fetchScore.result;
    currentLeaderboard(updateList);

};

refreshBtn.addEventListener('click', async () => {
    await updateLeaderboard();
});

// window.onload() {
//   updateLeaderboard()
// };

