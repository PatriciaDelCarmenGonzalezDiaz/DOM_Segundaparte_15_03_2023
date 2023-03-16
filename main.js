let boton = document.querySelector("#btn");
class eventManager {
    handleEvent(event) {
        if (event.type == "click") {
            this.onClick(event.type, event.target);
        } else if (event.type == "mouseleave") {
            this.onLeave(event.type, event.target);
        }
    }
    
    onClick(type, element) {
        alert("Hola, Has presionado un Botón");
        console.log({type, element});
    }

    onLeave(type, element) {
        alert("Adios, has abandonado el botón");
        console.log({type, element});
    }
}

let ev = new eventManager();
boton.addEventListener("click",ev);
boton.addEventListener("mouseleave",ev);
