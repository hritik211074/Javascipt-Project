let btn=document.querySelector("button");
let img=document.querySelector("img");
btn.addEventListener("click", async()=>{
let res = await getImage();
img.setAttribute("src",res);
});

let url= "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res=await axios.get(url);
        return (res.data.message);
    }
    catch(error){
    return "NO Image found";
    }
}
