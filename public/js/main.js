var texto=document.getElementById("mensajes");
texto.addEventListener("keyup",porfiPorfi);
function porfiPorfi(evento){
    cambiarIcon();
}
function cambiarIcon(){
    var icono=document.getElementById("icono-microfono");
    if(texto.value.length!=0){
        icono.classList.remove("icon-mic");
        icono.classList.add("icon-insert_emoticon");
    }
    else{
        icono.classList.add("icon-mic");
    }
}


/*
boton.addEventListener("click",onButtonClick);

function onButtonClick(evento){
    agregarMensaje();
}

function agregarMensaje(){
    if (texto.value == null || texto.value.length == 0 || /^\s*$/.test(texto.value)){
        alert (texto.name+ ' no puede estar vacía o contener sólo espacios en blanco');
        lista.removeChild(this.parentNode);
    }
    var mensaje=texto.value;
    
    //------------------------variables globales
    check=document.createElement("input");
    span=document.createElement("span");
    item=document.createElement("li");
    item.className="tarea";
    
    var icon=document.createElement("i");
    icon.style.cursor="pointer";
    check.setAttribute("type","checkbox");
    check.className="check";
    icon.className="glyphicon glyphicon-trash tacho";
    
    span.innerHTML=mensaje;
    item.appendChild(check);
    item.appendChild(span);
    item.appendChild(icon);
    lista.appendChild(item);
    
    texto.value="";
    texto.focus();
    
    icon.addEventListener("click", onIconClick);
    check.addEventListener("click", onChange);   
}

function onIconClick(evento){
    console.log(evento.target.parentNode);
    lista.removeChild(evento.target.parentNode);
}

function onChange(evento){
    console.log(evento.target);
    if(evento.target.checked){
        evento.target.nextSibling.style.textDecoration="line-through";
    } else{
        evento.target.nextSibling.style.textDecoration="none";
    }
}

*/