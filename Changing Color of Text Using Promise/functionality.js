let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;
        resolve("Color changed");
      },delay); 
   }) 
}
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("pink color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
    return changeColor("violet",1000);
})
.then(()=>{
    console.log("violet color was completed");
    return changeColor("indigo",1000);
})
.then(()=>{
    console.log("indigo color was completed");
    return changeColor("brown",1000);
});

