var texto=document.getElementById("mensajes");
var icono=document.getElementById("icono-microfono");

texto.addEventListener("keyup",porfiPorfi);
icono.addEventListener("click",enviarMensaje);

function enviarMensaje(evento){
    if(texto.value.length!=0){
    sendMensaje();
    }
}
function porfiPorfi(evento){
    cambiarIcon();
}
function cambiarIcon(){
    if(texto.value.length!=0){
        icono.classList.remove("icon-mic");
        icono.classList.add("icon-sendfabi");
    }
    else{
        if(texto.value.length==0){
            icono.classList.remove("icon-sendfabi");
            icono.classList.add("icon-mic");
        }
    }
}

// ---------------------------------- enviar mensaje con ENTER

texto.addEventListener("keyup",sendEnter);
function sendEnter(evento){
    if(evento.keyCode==13 && texto.value.length!=0){
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
    cambiarIcon();
}


// --------------------------------- BUSCAR CONTACTOS

var search = document.getElementById("search");
var contacto = document.getElementsByTagName("h4");
var forEach = Array.prototype.forEach;

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

// ----------------------------------- MOSTRAR CONTACTOS
// demo es el ul que contiene las ultimas conversaciones
var list=document.getElementById("demo");
var contactos=list.getElementsByTagName("li");
// cada li va a tener un evento click
for(i in contactos){
    contactos[i].addEventListener("click",seleccionarContacto);
}
function seleccionarContacto(evento){
    mostrarContacto();
    console.log(contactos[0]);
}
function listClick (_img,_name,_mensaje){

}
function mostrarContacto(){
    // conectando con el div donde estara todo
    var avatar = document.getElementsByClassName("w-chat-profile")[0];
    // creacion de los elementos que estaran dentro del div
    var imgAvatar=document.createElement("img");
    imgAvatar.setAttribute("src","image/logocodeacademy.png");

    var nameContact=document.createElement("h3");
    nameContact.className="w-contact-name";

    var miembros=document.createElement("ul");
    miembros.className="w-users-messages";

    var listaMiembros=document.createElement("li");
    
    var nombreContacto=document.getElementsByTagName("h4")[0].textContent;
    // conexion con el div principal
    avatar.appendChild(imgAvatar);
    avatar.appendChild(nameContact);
    avatar.appendChild(miembros);
    miembros.appendChild(listaMiembros);
    nameContact.innerHTML=nombreContacto;
}


