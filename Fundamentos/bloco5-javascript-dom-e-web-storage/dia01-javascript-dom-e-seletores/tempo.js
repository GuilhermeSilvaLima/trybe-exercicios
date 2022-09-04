document.querySelector("#container").style.backgroundColor = '#dbb39d';
document.getElementById("header-container").style.backgroundColor = 'green';
document.querySelector('footer').style.backgroundColor = 'grey';
document.querySelector(".emergency-tasks").style.backgroundColor = 'pink';
// let titulo3 = document.getElementsByTagName("h3");
// for(let index = 0; index < titulo3.length; index++){
//     titulo3[index].style.backgroundColor = 'red';
// }
let titulo3 = document.querySelectorAll("h3");

for(let i = 0; i < 2; i+= 1){
    titulo3[i].style.backgroundColor = 'purple';
}
let titulo2 = document.querySelectorAll(".no-emergency-tasks h3");

for(let i = 0; i < 2; i+= 1){
    titulo2[i].style.backgroundColor = 'black';
}
document.querySelector(".no-emergency-tasks").style.backgroundColor = 'yellow';