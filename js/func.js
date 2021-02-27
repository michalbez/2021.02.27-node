const output=document.getElementById("output")
const button=document.getElementById("button")

button.addEventListener('click',click)


function click(){

const input=document.getElementById("input").value
output.innerHTML=input;


}