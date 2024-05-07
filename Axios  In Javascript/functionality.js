let btn=document.querySelector("button");
let p= document.querySelector("p");

btn.addEventListener("click", async()=>{
let res = await getFact();
p.innerText=res;
});

let url= "https://catfact.ninja/fact";
async function getFact(){
    try{
        let res=await axios.get(url);
        return (res.data.fact);
    }
    catch(error){
    return ("NO fact found");
    }
}