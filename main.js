let boton = document.querySelector("button");
let root = document.querySelector(".root");
let parent = document.querySelector(".parent");

boton.addEventListener("click", (event) => {
  let customEvent = new CustomEvent("warning", { bubbles: true });
  boton.dispatchEvent(customEvent);
});

root.addEventListener("warning", (event) => {
    console.log("Evento click recibido en el root.", event);
});

parent.addEventListener("warning", (event) => {
  parent.stopPropagation;
  console.log("Recibido en parent");
});