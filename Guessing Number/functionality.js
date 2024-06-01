let randNum= Math.floor(Math.random()*100)+1;
const form = document.querySelector("form");
const userInput= document.querySelector('input')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const loOrhigh= document.querySelector('.lowOrHigh')
const startOver= document.querySelector('.result')
const p =document.createElement('p')
let prevGuess=[]
let numGuess =1;
let playGame=true;
if(playGame){
      document.querySelector('#subt').addEventListener('click',function(event){
      event.preventDefault();
      const guess = parseInt(userInput.value);
      ValidateGuess(guess);
    });
}
function ValidateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a valid number')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess>=11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randNum){
        displayMessage('You Guess it right !')
        endGame();
    }else if(guess<randNum){
        displayMessage('Number is too low')
    }else if(guess>randNum){
        displayMessage('Number is too high')
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}   `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    loOrhigh.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
 userInput.value ='';
 userInput.setAttribute('disabled','')
 p.innerHTML = `<h2 id="newGame">Click me! to start a new game</h2>`
 startOver.appendChild(p);
 playGame=false
 startGame()
}
function startGame()
{
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(event){
loOrhigh.innerHTML=''
randNum = Math.floor(Math.random()*100)+1

prevGuess=[]
numGuess=1

guessSlot.innerHTML=''
remaining.innerHTML=`${11-numGuess}   `

userInput.removeAttribute('disabled')
startOver.removeChild(p)
playGame=true
})
}