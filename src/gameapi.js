const gameScoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0VAg54chbZRX31kPbycC/scores';
const userInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const getScore = async () => {
    const fetchScore = await fetch(gameScoreUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => res.json())
    .then((data) => data.result)
    .catch(() => []);
    return fetchScore;
};

const postScore = async () => {
    const fetchScore = await fetch (gameScoreUrl, {
    method: 'POST',
    body: JSON.stringify({
        user: userInput.value,
        score: scoreInput.value
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },

}); 
    return fetchScore.json();
};

export { getScore, postScore }