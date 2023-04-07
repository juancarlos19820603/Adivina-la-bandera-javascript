//cargo en un arreglo las imagenes de las banderas que se mostraran, Este es el orden de que se mostraran
let banderas = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg"];

//arreglo que contendra la opcion correcta
let correcta = [2, 2, 1, 1, 0];

//arrgelo que guardara los paises a mostrar en cada jugada
let opciones = [];

//cargo en el arreglo las opciones a mostrar en cada jugada
opciones.push([ "Sudafrica", "Singapur", "Panama" ]);
opciones.push([ "Peru","Italia", "Bolivia" ]);
opciones.push([ "Tunez","Andorra", "Antigua y Barbuda" ]);
opciones.push([ "Ucrania","Reino Unido", "Madagascar" ]);
opciones.push([ "Namibia","Oman", "Etiopia" ]);

//vartibale que guardqa la pocision actual
let posActual = 0;

//variable que guarda la cantidad acertada hasta el momento
let cantidadAcertadas = 0;


//Se crea la funcion para empezar el juego
function comenzarJuego(){

    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;

    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

//funcion que varga la siguiente bandera con sus opciones
function cargarBandera(){
    //controlo si se acabaron las banderas
    if ( banderas.length <= posActual ){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpio las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgBandera").src="img/"+banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];

    }
}

//funcion limpiar opciones
function limpiarOpciones(){
        document.getElementById("n0").className ="nombre";
        document.getElementById("n1").className ="nombre";
        document.getElementById("n2").className ="nombre";

        document.getElementById("l0").className ="letra";
        document.getElementById("l1").className ="letra";
        document.getElementById("l2").className ="letra";
}

//comprobar respuesta
function comprobarRespuesta(opElegida){
    if(opElegida == correcta[posActual]){
        //Acertó
     //agregamos las clases para agregar el color verde a la opcion elegida
     document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
     document.getElementById("l" + opElegida).className = "letra letraAcertada";
     cantidadAcertadas++;
}else{//no acertó
     //agregamos las clases para agregar el color darkred a la opcion elegida
     document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
     document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

     //opcion que era correcta
     document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
     document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada"; 
}
posActual++;

//Esperamos 1 seg y pasamos a la siguiente bandera para mostrar las opciones
setTimeout(cargarBandera, 1000);
}

//funcion terminar juego
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //Agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

//funcion volver al inicio
function volveralInicio(){
    //ocultanmos las pantallas y volvemos a la pantalla inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}