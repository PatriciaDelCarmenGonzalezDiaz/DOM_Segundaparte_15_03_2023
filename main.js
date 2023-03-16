class eventManager {
    constructor(element) {
        element.addEventListener("click", this.enviarMensaje.bind(this));
    }

    enviarMensaje() {
        alert("Hola, Presionaste Un Botón");
        console.log(this);
    }
}

let boton = document.querySelector("#btn");
let em = new eventManager(boton);
