let h1=document.querySelector("h1");
function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;
        resolve("Color changed");
      },delay); 
   }) 
}
async function calling(){
  await changeColor("red",1000);
  await changeColor("blue",1000);
  await changeColor("pink",1000);
  await changeColor("violet",1000);
  await changeColor("brown",1000);
  await changeColor("indigo",1000);
 changeColor("green",1000);
}
calling();

