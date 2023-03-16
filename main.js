let boton = document.querySelector("#btn");
let eventManager = {
    handleEvent: function(event) {
        alert("Hola, Has presionado un Botón");
    }
}

boton.addEventListener("click",eventManager);
