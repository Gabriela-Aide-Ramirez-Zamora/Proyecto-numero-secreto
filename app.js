/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero entre 1 y 10';
*/
let numeroSecreto = 0;// Genera un numero secreto entre 1 y 10
let intentos =1;
let listaNumerosAleatorios = [];// Lista para almacenar numeros aleatorios generados
let numeroMaximo = 10;// Numero maximo del rango de numeros aleatorios

console.log(numeroSecreto);// Muestra el numero secreto en la consola


function asignarTextoElemento(elemento, texto) {// Asigna un texto a un elemento HTML
    let elementoHTML = document.querySelector(elemento);// Selecciona el elemento HTML
    elementoHTML.innerHTML = texto;// Asigna el texto al elemento HTML
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');// Asigna el texto al elemento h1
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);// Asigna el texto al elemento p
    numeroSecreto = generarNumeroSecreto();// Genera un nuevo numero secreto
    intentos = 1;// Reinicia el contador de intentos

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);// Muestra el numero generado en la consola
    console.log(listaNumerosAleatorios);// Muestra la lista de numeros aleatorios generados en la consola

    if(listaNumerosAleatorios.length==numeroMaximo){
        asignarTextoElemento('p','ya se han sorteado todos los numeros posibles');
    }else{

        //si el numero generado esta en la lista
        if(listaNumerosAleatorios.includes(numeroGenerado)){
            return generarNumeroSecreto();// Llama a la funcion generarNumeroSecreto de nuevo
        }else{
            listaNumerosAleatorios.push(numeroGenerado);
            return numeroGenerado;// Retorna el numero generado
        }
    }
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);// Obtiene el valor del input del usuario
   // console.log(numeroSecreto);
    console.log(intentos);
    //console.log(numeroUsuario);
    //console.log(numeroSecreto == numeroUsuario);// Compara el numero secreto con el numero del usuario
    if(numeroSecreto==numeroUsuario){
        asignarTextoElemento('p',`¡Felicidades! Has acertado el numero secreto en ${intentos} ${(intentos==1)? 'intento':'intentos'}`);// Asigna un texto al elemento p
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{//el usuario no acerto
        if(numeroSecreto>numeroUsuario){
            asignarTextoElemento('p','El numero secreto es mayor');// Asigna un texto al elemento p
        }else{
            asignarTextoElemento('p','El numero secreto es menor');// Asigna un texto al elemento p
        }
        intentos++;// Incrementa el contador de intentos
        limpiarInput();
    }
    return;
}

function limpiarInput(){
    document.querySelector('#valorUsuario').value = '';// Selecciona el input del usuario
    //valorCaja.value = '';// Limpia el input del usuario
}

function reiniciarJuego() {
    //limpiar caja
    limpiarInput();// Limpia el input del usuario
    //Indicar mensaje de intentos
    //generar un nuevo numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales();// Llama a la funcion condicionesIniciales
    //Deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');// Deshabilita el boton de reiniciar

}

condicionesIniciales();// Llama a la funcion condicionesIniciales al cargar la pagina