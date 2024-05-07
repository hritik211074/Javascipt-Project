let btn=document.querySelector("button");
let inp=document.querySelector("input");
let u=document.querySelector("ul");

btn.addEventListener("click" ,function(){
    let list=document.createElement("li");
    list.innerText=inp.value;
    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    list.appendChild(delbtn);
    u.appendChild(list);
    inp.value="";
});
u.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
      let del=event.target.parentElement;
      del.remove();
   }
});