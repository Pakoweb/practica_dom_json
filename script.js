/*1. Acceso al DOM básico
Crea una página con un <h1> y un párrafo.
Desde JavaScript, cambia el texto del <h1> usando getElementById y el color del párrafo
con getElementsByTagName.*/

const head=document.getElementById("head");
head.textContent="Texto cambiado con js";

const parrafo=document.getElementsByTagName("p")[0];
parrafo.style.color="green";


/*2. Modificación de varios elementos
Crea tres párrafos con la clase texto.
Usa getElementsByClassName para recorrerlos con un for y cambiar el color de fondo a
gris.*/

const parrafos=document.getElementsByClassName("texto");
for(let i=0;i<parrafos.length;i++){
    parrafos[i].style.backgroundColor="grey";
}

/*3. Selección con querySelector
Usa querySelector para seleccionar el primer <div> con clase .caja y cambia su borde y
fondo con style.*/

const caja=document.querySelector(".caja"); //seleccionamos la clase "caja" con .
caja.style.border="100px solid blue"; //Especificar grosor y tipo de linea sino no lo pinta
caja.style.backgroundColor="yellow";

/*4. querySelectorAll y forEach
Crea tres botones con clase btn-dom.
Recógelos con querySelectorAll y cambia el texto de todos ellos a “DOM listo ”.*/

const botones=document.querySelectorAll(".btn-dom");//Se crea la variable donde se guardaran todos los elementos con la clase btn-dom
botones.forEach(function(boton){
    boton.textContent="DOM listo";//Recorremos el array que nso ofrece querySelectorALl
                                  // y vamos cambiando el contenido de cada elemento 

});

/*5. Comparación entre colecciones vivas y estáticas
Crea una lista <ul id="lista"> con dos <li>.
Muestra por consola la diferencia entre getElementsByTagName("li") (viva) y
querySelectorAll("li") (estática) al agregar un nuevo elemento.*/

const coleccionViva=document.getElementsByTagName("li"); //Colección viva
const coleccionEstatica=document.querySelectorAll("li"); //Colección estática
console.log(coleccionViva,coleccionEstatica);

//Agrego un elemtento nuevo para ver la diferencia
const nuevoElemento=document.createElement("li");
nuevoElemento.textContent="Elemento nuevo";
const lista=document.getElementById("lista");
lista.appendChild(nuevoElemento);

//Hago un nuevo console.log y veo que solo ha cambiado la coleccion viva.
console.log(coleccionViva,coleccionEstatica);

/*6. Crear elementos dinámicamente
Usa createElement() para crear un <p> con texto "Creado dinámicamente" y añádelo al
body con appendChild().*/

document.addEventListener("DOMContentLoaded", function() {//Si no ponemos esta linea,el DOM no se carga entero por lo que los cambioas anteriores no se ven
    const parrafo = document.createElement("p");//A partir de aqui,se crea el elemento,se pone el texto,y lo añadimos
    parrafo.textContent = "Creado dinámicamente";
    document.body.appendChild(parrafo);
});

/*7. Crear nodos de texto
Crea un <div id="contenedor">.
Genera un nodo de texto con createTextNode() y añádelo dentro del div.*/

