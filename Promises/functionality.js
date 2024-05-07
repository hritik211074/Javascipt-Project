function savetoDb(data){
    // here this is all about promise argument like resolve and reject
    return new Promise((resolve,reject)=>{
        let internetSpeed =Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success : Data was saved");
            // in resolve it shows a normal behavior 
        }else{
            reject("failure : weak connection");
            // in reject it throws a error message as a output on console
        }
    });
}
//then() method basiclly do after resolve  and catch() method basically do after reject.. If we use catch we will not get error message on console
let request=savetoDb("Hritik");// request is object of promise
request
.then((result)=>{
    console.log("Data1: saved");
    console.log("result of promise",result);
    return savetoDb("Maurya");
})
.then((result)=>{
    console.log("Data2: saved");
    console.log("result of promise",result);
    return savetoDb("Bachelor");
})
.then((result)=>{
    console.log("Data3: saved");
    console.log("result of promise",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("error of promise",error);
});