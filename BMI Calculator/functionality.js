const form = document.querySelector("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseInt(document.querySelector('.wi').value);
    const height = parseInt(document.querySelector('.hi').value);
    const result = document.querySelector("#result");
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    }
     else if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please give a valid height: ${height}`;
    } 
    else {
       const BMI = ((weight / (height * height)) * 10000).toFixed(2);
       if(BMI<=18.6){
        result.innerHTML=`Under Weight`
       }else if(BMI>18.6 && BMI<24.9){
        result.innerHTML=`Normal Weight`
       }else{
        result.innerHTML=`Over Weight`
       }
    }
});
