let boton = document.querySelector("#btn");
let eventManager = {
    handleEvent: function(event) {
        if (event.type == "click") {
            alert("Hola, Has presionado un Botón");
        } else if (event.type == "mouseleave") {
            alert("Adios, has abandonado el botón");
        }
    }
}

boton.addEventListener("click",eventManager);
boton.addEventListener("mouseleave",eventManager);
