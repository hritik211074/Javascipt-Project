let imp=document.querySelector('.imp')
function randColor() {
    const str = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;
const randomColor = function() {
    imp.style.backgroundColor = randColor();
};
const changingColor = function() {
    if (!interval) {
        interval = setInterval(randomColor, 1000);
    }

};

const stopChangingColor = function() {
    clearInterval(interval);
    interval = null;
};

document.querySelector('#start').addEventListener('click', changingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
