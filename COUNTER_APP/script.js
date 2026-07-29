var number=document.querySelector("h1").innerHTML;
const add=document.querySelector(".add");
const sub=document.querySelector(".subtract");
const reset=document.querySelector(".reset")
add.addEventListener('click',() =>{
    number=parseInt(number);
    number=number+1;
    document.querySelector("h1").innerHTML=number;

})
sub.addEventListener('click',() =>{
    number=parseInt(number);
    if (number>0){
    number=number-1;
    document.querySelector("h1").innerHTML=number;
    }
    else {
        document.querySelector("h1").innerHTML=0;
    }

})
reset.addEventListener('click',() =>{
    number=0;
    document.querySelector("h1").innerHTML=number;
})