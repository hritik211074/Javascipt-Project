const BASE_URL =
  'https://v6.exchangerate-api.com/v6/21d27bc44ebbd9390924be06/latest'
 
const dropdown =document.querySelectorAll('.dropdown select')
const btn=document.querySelector('.but')

const fromCurr = document.querySelector('.from select')

const toCurr = document.querySelector('.to select')
const msg=document.querySelector('.msg')

for(let select of dropdown){
    for(let current in countryList){
        let newOption = document.createElement('option')
        newOption.innerText=current
        newOption.value=current
        if(select.name==="from" && current==="USD"){
            newOption.selected ="selected"
        }else if(select.name==="to" && current==="INR"){
            newOption.selected ="selected"
        }
        select.appendChild(newOption)
    }
    select.addEventListener("change",(event)=>{
        updateflag(event.target)
    })
}
const updateflag =(element)=>{
    console.log(element)
    let currency=element.value;
    let countryCode=countryList[currency]
    let newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`
    let img =element.parentElement.querySelector("img")
    img.src=newsrc
}
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    let amount=document.querySelector('input').value;

    if(amount<1 || amount===""){
        document.querySelector('input').value='1'
    }
    
    const url =`${BASE_URL}/${fromCurr.value}`
    let response =async ()=>{
        let promise= await fetch(url)
        let data =await promise.json()
        let rate =(data.conversion_rates[toCurr.value])
        
        let final_answer =rate*amount;

        msg.innerText=`${amount} ${fromCurr.value} = ${final_answer} ${toCurr.value}`
    }
    response()
    document.querySelector('input').value=''
})



