// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

//Funcion que AGREGA amigos a la lista
function agregarAmigo(){
    listaDeAmigos = document.getElementById("amigo").value;
    
    if (listaDeAmigos == ""){ 
        alert("Porfavor ingrese un nombre");
    }
    return;
    limpiarCaja();
    console.log(listaDeAmigos);
}
//Funcion para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}    
