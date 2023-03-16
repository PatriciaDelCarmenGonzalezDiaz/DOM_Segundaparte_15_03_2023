let texto = document.querySelector(".text");

document.body.addEventListener("click", (event)=> {
    let {x,y,detail} = event;
    texto.textContent = `Has hecho ${detail} CLICK en las coordenadas (${x} y ${y})`;
});