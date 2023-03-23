// modificaciones 
// 1.Se modifico la etiqueta  en el formulario y la forma correcta es .formulario 
// 2. se agrega default al metodo prevent para que no se ejecute el evento
// 3. Se elimino el boton borrar para que solo se muestra cuando se agrega un invitado
// 4. Se elimino la parte del  bloque de codigo que hacia que se repituera el nombre dos veces
// 5. inputNombre.innerHTML = valor; //Se modifico para que cuando se crea el elemento este no se pueda modificar. 


var formulario = document.querySelector(".formulario"); 

formulario.onsubmit = function (e) {
  e.preventDefault();

  var n = formulario.elements[0];
  var ed = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = ed.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    ed.classList.add("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};



var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

 


  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("span"); 
    var espacio = document.createElement("br"); 
    spanNombre.textContent = descripcion + ": ";
    inputNombre.innerHTML = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}