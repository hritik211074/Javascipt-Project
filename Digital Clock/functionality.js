const clock =document.getElementById("clock")
setInterval(() => {
   let date =new Date();
   clock.innerText=date.toLocaleTimeString();
}, 1000);