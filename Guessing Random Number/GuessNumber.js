const max =prompt("Enter the maximum  number");
const random =Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit the game");
        break;
    }
    if(guess==random){
        console.log("congrats you are right!!");
        break;
    }else if(guess<random){
        guess=prompt("You are too close to guess the number!! Please try again");
    }else{
        guess=prompt("Try better one");
    } 

}