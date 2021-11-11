import './style.css';

const currentLeaderboard = (result) => {
  const container = document.querySelector('#leaderboard');
  container.innerHTML = '';
  result.forEach((element) => {
    const item = document.createElement('li');
    item.classList.add('row');
    item.innerHTML = `<p>${element.user}:  ${element.score}</p>`;
    container.appendChild(item);
  });
};

export default currentLeaderboard;