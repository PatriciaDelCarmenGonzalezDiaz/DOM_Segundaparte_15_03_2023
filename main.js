let root = document.querySelector(".root");
let boton = document.querySelector(".btn");

boton.addEventListener("click", () => {
    boton.dispatchEvent(new CustomEvent("user:message", {
      detail: {
        name: "Manz"
      },
      bubbles: true,
    }));
  });
  
  root.addEventListener("user:message", (event) => {
    let name = event.detail.name;
    let number = event.target.dataset.number;
    console.log(`Mensaje recibido de ${name} (${number})`);
  }, { capture: true });