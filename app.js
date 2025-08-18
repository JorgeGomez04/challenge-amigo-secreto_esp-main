// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variable
let listaDeAmigos = [];

//Funcion que AGREGA amigos a la lista
function agregarAmigo(){
        let amigosEscritos = document.getElementById("amigo").value;

        //si el valor es nullo
        if (amigosEscritos == ""){ 
            asignarTexto("h2", "Por favor escribre un nombre");
            
        //si el valor ya esta en la lista
        }else if (listaDeAmigos.includes(amigosEscritos)){
            asignarTexto("h2", "Ya esta en la lista, introdusca otro nombre");

        //si el valor no esta en la lista se lo agrega a "listaDeAmigos"
        } else {
            listaDeAmigos.push(amigosEscritos);
            asignarTexto("h2", "Digite el nombre de sus amigos");
        }
        
        document.getElementById("amigo").value = "";
        mostrarLista()
        return; 
}

//Funcion que muestra los nombres en una lista
function mostrarLista(){
        let listaNombres = document.getElementById("listaAmigos");
        listaNombres.innerHTML = "";

        //recorre la lista, Crea un nuevo elemento de lista, le asigna el nombre de la "ListaDeAmigo" como texto
        // y finalmente se lo agrega al index.HTML
        listaDeAmigos.forEach( listaDeAmigos => {
            let li = document.createElement("li");
            li.textContent = listaDeAmigos;
            listaNombres.appendChild(li);
    });
}

//Funcion para sortear al amigo secreto
function sortearAmigo(){
        if (listaDeAmigos.length === 0){
            asignarTexto("h2", "La lista esta vacia, no hay nombres para sortear");
            return;
        }
        
        let numeroRandom = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoRandom = listaDeAmigos[numeroRandom];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es.. !! ${amigoRandom} !!`;
}


//Funcion para agregar texto al titulo
function asignarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

