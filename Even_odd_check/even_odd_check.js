function Check(n){
    return (!(n%2==0));
}
function Factory(){
       let n=prompt("Enter the that you want");
       let ans=Check(n);
       if(ans){
        console.log("Odd");
       }
       else{
        console.log("Even");
       }
}

