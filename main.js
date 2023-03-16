let boton = document.querySelector("#btn");

boton.addEventListener("click", (event)=>{
    let {type,timeStamp,isTrusted} = event;
    console.log({type,timeStamp,isTrusted});
})
