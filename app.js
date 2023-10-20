//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let comunicacion = document.getElementById("comunicacion");
crearBarra(comunicacion);
let resolucion = document.getElementById("resolucion");
crearBarra(resolucion);
let adaptacion = document.getElementById("adaptacion");
crearBarra(adaptacion);
let gestion = document.getElementById("gestion");
crearBarra(gestion);
let trabajo = document.getElementById("trabajo");
crearBarra(trabajo);
let etica = document.getElementById("etica");
crearBarra(etica);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalComunicacion = setInterval(function(){
            pintarBarra(comunicacion, 15, 0, intervalComunicacion);
        },100);
        const intervalResolucion = setInterval(function(){
            pintarBarra(resolucion, 14, 1, intervalResolucion);
        },100);
        const intervalAdaptacion = setInterval(function(){
            pintarBarra(adaptacion, 17, 2, intervalAdaptacion);
        },100);
        const intervalGestion = setInterval(function(){
            pintarBarra(gestion, 15, 3, intervalGestion);
        },100);
        const intervalTrabajo = setInterval(function(){
            pintarBarra(trabajo, 14, 4, intervalTrabajo);
        },100);
        const intervalEtica = setInterval(function(){
            pintarBarra(etica, 17, 5, intervalEtica);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}