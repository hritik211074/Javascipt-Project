const box = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let turn = true; // player 0 otherwise player x
const newGame = document.querySelector('.newGame');
const msg = document.querySelector('#msg');
const container_bottom = document.querySelector('.container_bottom');

let possibleWin = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];
let len = 0;

const disableBtn = () => {
    for (let boxes of box) {
        boxes.disabled = true;
    }
}

const enableBtn = () => {
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerHTML = '';
    }
}

const resetGame = () => {
    enableBtn();
    container_bottom.classList.add('hide');
    turn = true; // Reset turn to player 'x'
    len = 0; // Reset the length counter
    msg.innerHTML = ''; // Clear the message
}

const showWinner = (winner) => {
    disableBtn();
    container_bottom.classList.remove('hide');
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
}

const checkDraw = () => {
    if (len === box.length) {
        disableBtn();
        container_bottom.classList.remove('hide');
    }
}

const checkWinner = () => {
    for (let pattern of possibleWin) {
        let pos1 = box[pattern[0]].innerHTML;
        let pos2 = box[pattern[1]].innerHTML;
        let pos3 = box[pattern[2]].innerHTML;
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true; // Winner found
            }
        }
    }
    return false; // No winner yet
}

box.forEach((box) => {
    box.addEventListener('click', (event) => {
        len++;
        if (turn) {
            box.innerHTML = 'x';
            box.style.color = "DeepPink";
            turn = !turn;
        } else {
            box.innerHTML = 'o';
            box.style.color = "LightSeaGreen";
            turn = !turn;
        }
        box.disabled = true;
        if (!checkWinner()) {
            checkDraw();
        }
    });
});

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);
