let boton = document.querySelector("#btn");
let texto = document.querySelector(".text");

boton.addEventListener("click", ()=>{
    alert("Hola, Has Presionado Un Botón");
});

texto.addEventListener("mouseenter", () => {
   let event = new Event("click");
   boton.dispatchEvent(event);
});
