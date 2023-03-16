let boton = document.querySelector("button");
let root = document.querySelector(".root");

boton.addEventListener("click", (event) => {
  let customEvent = new CustomEvent("warning", { bubbles: true });
  boton.dispatchEvent(customEvent);
});

root.addEventListener("warning", (event) => {
    console.log("Evento click recibido en el root.");
    let path = event.composedPath();
    console.log(path);
  });