 const buttons = document.querySelectorAll(".button")
 const body = document.querySelector("body")
 buttons.forEach(function(btn){
    btn.addEventListener('click',function(event){

    if(event.target.id ==='MediumVioletRed'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='Purple'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='GreenYellow'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='DarkOliveGreen'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
       }
       if(event.target.id ==='#154616'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='Maroon'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='DarkSlateGray'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
    if(event.target.id ==='#340359'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
       }
       if(event.target.id ==='Chartreuse'){
        event.target.style.border='3px solid black'
        body.style.backgroundColor=event.target.id;
        }
 });
 }); 
 document.querySelector('.btn').addEventListener('click',()=>{
    body.style.backgroundColor= 'white';
 })