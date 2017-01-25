var texto=document.getElementById("mensajes");
var icono=document.getElementById("icono-microfono");

texto.addEventListener("keyup",porfiPorfi);
icono.addEventListener("click",enviarMensaje);

function enviarMensaje(evento){
    sendMensaje();
}
function porfiPorfi(evento){
    cambiarIcon();
}
function cambiarIcon(){
    if(texto.value.length!=0){
        icono.classList.remove("icon-mic");
        icono.classList.add("icon-insert_emoticon");
    }
    else{
        icono.classList.add("icon-mic");
    }
}

// ---------------------------------- enviar mensaje con ENTER

texto.addEventListener("keyup",sendEnter);
function sendEnter(evento){
    if(evento.keyCode==13){
        sendMensaje();
    }
}

function sendMensaje(){
    var mensaje=texto.value;
    var div=document.createElement("div");
    div.className="w-message w-message-out";
    var divDos=document.createElement("div");
    divDos.className="w-message-text";
    var divTres=document.getElementById("chat");
    var text=document.createElement("p");
    var time=document.createElement("div");
    time.className="time";
    var porfi=new Date();
    var hora=porfi.getHours();
    var minuto=porfi.getMinutes();
    if(minuto<10){minuto='0'+minuto}
    divTres.scrollTop=divTres.scrollHeight;

    time.innerHTML=hora+":"+minuto;
    text.innerHTML=mensaje;
    div.appendChild(divDos);
    divDos.appendChild(text);
    divDos.appendChild(time);
    divTres.appendChild(div);
    
    texto.value="";
    texto.focus();
}


// --------------------------------- busqueda de contactos

var search = document.getElementById("search"),
   contacto = document.getElementsByTagName("h4"),
   forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.parentNode.style.display = "none";   
       else
          f.parentNode.parentNode.style.display = "block";        
   });
}, 
false);
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