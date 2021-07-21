const ducksCheckBoxes = document.querySelectorAll('.duck-object');

const scoreEl = document.getElementById('score');
const ducks = document.getElementById('ducks');

const sound = document.getElementById('sound1');
const LIVES = 4;
let duckNumber = 0;
let score = 0;

const renderScore = () => {
    scoreEl.innerHTML = `Score: ${score}`;
}

const checkGameEnd = () => {
    if (duckNumber >= LIVES) {
        if (score === LIVES) {
            scoreEl.innerHTML = `WINNER!`;
        } else {
            scoreEl.innerHTML = `LOSER!`;
        }
        return true;
    } 

    return false
}

const createDuck = () => {
    const duck = document.createElement('label');
    duck.setAttribute("for", `duck${duckNumber}`);
    duck.style.animation = `fly 10s linear 1s`;
    duck.addEventListener('click', () => {
        
        sound.currentTime = 0;
        sound.play();

        score++;
        duckNumber++
        renderScore();

        duck.remove();

        const gameEnd = checkGameEnd()
        if (!gameEnd) {
            createDuck();
        }
    })

    duck.addEventListener('animationend', () => {
        duck.remove();
        duckNumber++;
        const gameEnd = checkGameEnd()
        if (!gameEnd) {
            createDuck();
        }
    })

    ducks.appendChild(duck);
}

const newGame = () => {
    renderScore();
    createDuck();  
}

newGame();