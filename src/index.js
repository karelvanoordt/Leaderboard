import './style.css';

const leaderboard = [
  { name: 'Hannah', score: 98 },
  { name: 'Kevin', score: 94 },
  { name: 'Stuart', score: 81 },
  { name: 'Matt', score: 87 },
  { name: 'Alyssa', score: 90 },
  { name: 'Jamie', score: 72 },
];


leaderboard.forEach((element) => {
  const container = document.querySelector('#leaderboard');
  const item = document.createElement('li');
  item.classList.add('row');
  item.textContent = `${element.name}:  ${element.score}`;
  container.appendChild(item);

  console.log(item);
});


console.log(leaderboard);