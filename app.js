// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

//Funcion que AGREGA amigos a la lista
function agregarAmigo(){
    let amigosEscritos = document.getElementById("amigo").value;
    
    if (amigosEscritos == ""){ 
        alert("Porfavor ingrese un nombre");
//si el valor escrito es correcto se agrega
    }else{
        listaDeAmigos.push(amigosEscritos);
        console.log(listaDeAmigos);
    }
    limpiarCaja();
    return; 
}
//Funcion para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}    
