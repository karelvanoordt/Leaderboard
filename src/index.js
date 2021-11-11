import './style.css';
import { getScore, postScore } from './gameapi.js';
import currentLeaderboard from './leaderboard.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const userInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const userInputF = userInput.value;
  const scoreInputF = scoreInput.value;
  await postScore(userInputF, scoreInputF);
});

const updateLeaderboard = async () => {
  const scores = await getScore();
  currentLeaderboard(scores);
};

refreshBtn.addEventListener('click', async () => {
  await updateLeaderboard();
});
