let boton = document.querySelector("#btn");
let accion = () => alert("Hola, Presionaste un botón");
let alternar = () => boton.classList.toggle("red");

boton.addEventListener("click", accion);
boton.addEventListener("click", alternar);
boton.removeEventListener("click", accion);
