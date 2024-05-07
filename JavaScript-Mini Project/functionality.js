 let gameSeq=[];
 let userSeq=[];
 let started=false;
 let level=0;
 let btns=["red","blue","orange","green"];
 let h2=document.querySelector("h2");

 document.addEventListener("keypress",function(){
 if(started==false){
    console.log("Game started");
    started=true; 
    levelUp();
 }
 });
 function gameFlash(btn){
  btn.classList.add("gamef"); 
  setTimeout(function () {
   btn.classList.remove("gamef");
  },100);
 }

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // get a random color
    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
 }

 function checkAns(idx){
    if(userSeq[idx]===gameSeq  [idx]){
      if(userSeq.length==gameSeq.length){
         setTimeout(levelUp(),50);
      }
    }else{

      h2.innerHTML=`Game Over! Your score was <b>${level}</b> </br>Press any key to start.`;
      reset();  
    }
 }
 function userFlash(btn){
   btn.classList.add("userf"); 
   setTimeout(function () {
    btn.classList.remove("userf");
   },100);
  }
 function btnPress(){
   let userBtn= this;
   userFlash(userBtn);
   let userColor=userBtn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
 }
 let allBtns=document.querySelectorAll(".btn");
 for(let i=0;i<allBtns.length;i++){
   allBtns[i].addEventListener("click",btnPress );
}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}



 