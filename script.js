document.addEventListener("DOMContentLoaded", () => {

    /*--------------------------------------------------------------
     1. Acceso al DOM básico
    --------------------------------------------------------------*/
    const head = document.getElementById("head");
    head.textContent = "Texto cambiado con JS";

    const parrafo = document.getElementsByTagName("p")[0];
    parrafo.style.color = "green";


    /*--------------------------------------------------------------
     2. Modificación de varios elementos
    --------------------------------------------------------------*/
    const parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = "lightgray";
    }


    /*--------------------------------------------------------------
     3. Selección con querySelector
    --------------------------------------------------------------*/
    const caja = document.querySelector(".caja");
    caja.style.border = "2px solid black";
    caja.style.backgroundColor = "#f5f5f5";


    /*--------------------------------------------------------------
     4. querySelectorAll y forEach
    --------------------------------------------------------------*/
    document.querySelectorAll(".btn-dom").forEach(btn => btn.textContent = "DOM listo");


    /*--------------------------------------------------------------
     5. Colecciones vivas vs estáticas
    --------------------------------------------------------------*/
    const coleccionViva = document.getElementsByTagName("li");
    const coleccionEstatica = document.querySelectorAll("li");
    console.log("ANTES:", coleccionViva.length, coleccionEstatica.length);

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Elemento nuevo";
    document.getElementById("lista").appendChild(nuevoElemento);
    console.log("DESPUÉS:", coleccionViva.length, coleccionEstatica.length);


    /*--------------------------------------------------------------
     6. Crear elementos dinámicamente
    --------------------------------------------------------------*/
    const parrafoDinamico = document.createElement("p");
    parrafoDinamico.textContent = "Creado dinámicamente";
    document.body.appendChild(parrafoDinamico);


    /*--------------------------------------------------------------
     7. Crear nodos de texto
    --------------------------------------------------------------*/
    const contenedor = document.getElementById("contenedor");
    const textoNodo = document.createTextNode("Texto insertado en el contenedor");
    contenedor.appendChild(textoNodo);


    /*--------------------------------------------------------------
     8. Añadir atributos a un elemento
    --------------------------------------------------------------*/
    const img = document.createElement("img");
    img.setAttribute("src", "https://via.placeholder.com/150");
    img.setAttribute("alt", "Imagen generada por JS");
    document.body.appendChild(img);


    /*--------------------------------------------------------------
     9. Crear estructura completa (tarjeta)
    --------------------------------------------------------------*/
    const contenedorTarjeta = document.createElement("div");

    const h5 = document.createElement("h5");
    h5.textContent = "Título de la tarjeta";

    const pTarjeta = document.createElement("p");
    pTarjeta.textContent = "Este es el texto de la tarjeta, generado dinámicamente";

    const boton = document.createElement("button");
    boton.textContent = "Click aquí";
    boton.className = "btn btn-primary"; // opcional estilo Bootstrap

    contenedorTarjeta.append(h5, pTarjeta, boton);
    document.body.appendChild(contenedorTarjeta);


    /*--------------------------------------------------------------
     10. Insertar elementos en distintas posiciones
    --------------------------------------------------------------*/
    const listaPos = document.getElementById("listaPosiciones");

    const liPrepend = document.createElement("li");
    liPrepend.textContent = "Añadido al inicio";
    listaPos.prepend(liPrepend);

    const liAppend = document.createElement("li");
    liAppend.textContent = "Añadido al final";
    listaPos.append(liAppend);

    const divBefore = document.createElement("div");
    divBefore.textContent = "Elemento antes del UL";
    listaPos.before(divBefore);

    const divAfter = document.createElement("div");
    divAfter.textContent = "Elemento después del UL";
    listaPos.after(divAfter);


    /*--------------------------------------------------------------
     11. Reemplazar y eliminar
    --------------------------------------------------------------*/
    const parrafoEliminar = document.getElementById("parrafo-eliminar");
    document.getElementById("btn-eliminar").onclick = () => {
        parrafoEliminar.remove();
        console.log("Párrafo eliminado");
    };

    document.getElementById("btn-reemplazar").onclick = () => {
        const nuevoP = document.createElement("p");
        nuevoP.textContent = "Parrafo reemplazado";
        parrafoEliminar.replaceWith(nuevoP);
    };


    /*--------------------------------------------------------------
     13-14. Lista dinámica con botón
    --------------------------------------------------------------*/
    const listaD = document.getElementById("lista-dinamica");

    document.getElementById("btn-agregar").onclick = () => {
        const li = document.createElement("li");
        li.textContent = "Elemento agregado";
        listaD.appendChild(li);
    };

    document.getElementById("btn-eliminar-ultimo").onclick = () => {
        if (listaD.lastElementChild) listaD.lastElementChild.remove();
    };


    /*--------------------------------------------------------------
     15. Numerar elementos automáticamente
    --------------------------------------------------------------*/
    document.querySelectorAll(".item").forEach((item, index) => {
        item.textContent = `Elemento ${index + 1}`;
    });


    /*--------------------------------------------------------------
     16. Crear galería desde JSON local
    --------------------------------------------------------------*/
    const imagenes = [
        { titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
        { titulo: "Lago", url: "https://via.placeholder.com/150/2" },
        { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
    ];

    const galeria = document.getElementById("galeria");
    imagenes.forEach(imgObj => {
        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.padding = "5px";
        card.style.marginBottom = "5px";

        const h5 = document.createElement("h5");
        h5.textContent = imgObj.titulo;

        const img = document.createElement("img");
        img.src = imgObj.url;
        img.style.width = "100%";

        card.append(h5, img);
        galeria.appendChild(card);
    });


    /*--------------------------------------------------------------
     17-20. Usuarios API JSONPlaceholder
    --------------------------------------------------------------*/
    const contUsuarios = document.getElementById("usuarios");
    let ultimoUsuario = null;

    document.getElementById("btn-cargar").onclick = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        contUsuarios.innerHTML = "";

        data.forEach(user => {
            const card = document.createElement("div");
            card.style.border = "1px solid black";
            card.style.padding = "5px";
            card.style.marginBottom = "5px";

            const h5 = document.createElement("h5");
            h5.textContent = user.name;

            const p = document.createElement("p");
            p.textContent = `Email: ${user.email}`;

            const ciudad = document.createElement("p");
            ciudad.textContent = `Ciudad: ${user.address.city}`;

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = () => card.remove();

            card.append(h5, p, ciudad, btnEliminar);
            contUsuarios.appendChild(card);

            ultimoUsuario = card;
        });
    };

    document.getElementById("btn-clonar-ultimo").onclick = () => {
        if (ultimoUsuario) {
            const clon = ultimoUsuario.cloneNode(true);
            contUsuarios.appendChild(clon);
        }
    };

});
