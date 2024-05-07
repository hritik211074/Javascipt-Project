let url= "http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let inp=document.querySelector("input");
function showCollege(arr){
let list= document.querySelector(".list");
list.innerText="";
for(let i=0;i<10;i++){
    let li=document.createElement("li");
    li.innerText = arr[i].name;
    list.appendChild(li);
}
}
btn.addEventListener("click", async()=>{
let val=inp.value;
let res = await getCollege(val);
showCollege(res);
});
async function getCollege(val){
    try{
        let res=await axios.get(url+val);
        return (res.data);
    }
    catch(error){
    return [];
    }
}
