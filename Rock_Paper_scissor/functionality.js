let userScore=0
let compScore=0
const userP =document.querySelector('.your_score')
const compp =document.querySelector('.computer_score')

const msg =document.querySelector('.result')
const choice=document.querySelectorAll('img')
const arr =['Rock','Paper','Scissor']
const drawGame= ()=>{
    msg.innerHTML=`Game gone draw! Play again`
    msg.style.backgroundColor='#1a1541'
}
const computerChoice =()=>{
 let randInd = Math.floor(Math.random()*3)
 return arr[randInd]
}
const showWinner =(userWin,userChoices,compChoices)=>{
    if(userWin){
        userScore++;
        userP.innerHTML=userScore
        msg.innerHTML=`You win!  ${userChoices} beats ${compChoices}`
        msg.style.backgroundColor='#11360c'
    }else{
        compScore++;
        compp.innerHTML=compScore
        msg.innerHTML=`You Lose!  ${compChoices} beats ${userChoices}`
        msg.style.backgroundColor='Maroon'
    }
}
const play =(userChoices)=>{
     // generate computer choices
     let compChoices=computerChoice()
     if(compChoices===userChoices)
        {
        drawGame()
        }else{
            let userWin=true
            if(userChoices==="Rock"){
                userWin = compChoices==='Paper'? false:true
            }else if(userChoices==="Paper"){
                userWin = compChoices==='Scissor'? false:true
            }else{
                userWin = compChoices==='Rock'? false:true
            }
            showWinner(userWin,userChoices,compChoices)
        }
      
}
choice.forEach((choices)=>{
    choices.addEventListener('click',(event)=>{
       let userChoices= choices.getAttribute('alt')
       play(userChoices)
    })
})