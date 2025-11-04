//Llamar a los elementos con los que vamos a trabajar
const producto = document.querySelectorAll(".producto"); //LLamar a todos los elementos que tienen la clase producto. 
const miLista = document.querySelector("#lista"); //LLamar al unico elemento que tiene el id lista. 
const botonAgregar = document.querySelectorAll(".agregar");
const botonVaciar = document.querySelector("#vaciar");
const total = document.querySelector(".totalPrecio");


//Inicializamos el total de precio en 0
let precioTotal = 0;

//Ciclo for para recorrer los botones de la tarjeta
for(let i = 0; i < botonAgregar.length; i++ ){
    //Codigo a ejecutar 
    botonAgregar[i].addEventListener('click',function(){
        //Codigo del evento
        const nombreProducto = producto[i].querySelector("h3").textContent;
        const precioProducto = parseFloat(producto[i].querySelector("p").textContent.replace("$",""));

        //creamos los items por cada producto en la lista del carrito. Usamos createElement
        const nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `${nombreProducto} - $${precioProducto}`;
        //elementopadre.appendChild(elementoHijo)
        miLista.appendChild(nuevoItem);
        
        //Botono eliminar para cada producto (item) de la lista del carrito. 
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.classList.add("botonX");
        nuevoItem.appendChild(botonEliminar);
        botonEliminar.addEventListener('click', ()=>{
            miLista.removeChild(nuevoItem);
            precioTotal = precioTotal - precioProducto;
            total.textContent = precioTotal

        })

        //Suma total de los precios
        precioTotal += precioProducto;
        total.textContent = precioTotal; 
        
    })
}

//EventListener para el boton vaciar.
botonVaciar.addEventListener('click',function(){
    miLista.innerHTML = "";
    precioTotal = 0;
    total.textContent = precioTotal;
})