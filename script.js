//Ejercicio 1
const head=document.getElementById("head");
head.textContent="Texto cambiado con js";

const parrafo=document.getElementsByTagName("p")[0];
parrafo.style.color="green";


//Ejercicio 2
const parrafos=document.getElementsByClassName("texto");
for(let i=0;i<parrafos.length;i++){
    parrafos[i].style.backgroundColor="grey";
}

//Ejercicio 3
const caja=document.querySelector("caja");
caja.style.border="red";
caja.style.backgroundColor="black";


