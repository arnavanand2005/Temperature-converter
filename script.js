let input=document.getElementById("textbox");
let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
let search=document.getElementById("submit");
let result=document.getElementById("result");

function convert(){
    event.preventDefault();

    let inputv=Number(input.value)
    if(celsius.checked){
    let fahr=((9/5)*inputv)+32;
    result.textContent=fahr.toFixed(1)+"°F";
}
    else if (fahrenheit.checked){ 
    let cels=(inputv-32)*(5/9);
    result.textContent=cels.toFixed(1)+"°C";
    }
    
    else{
        result.textContent="PLEASE SELECT A UNIT";
    }
}

search.onclick=convert;
