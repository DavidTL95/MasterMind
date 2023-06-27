
let nombre = sessionStorage.getItem("nombreUsuario");

let dificultad = sessionStorage.getItem("dificultad");

let coloresEscogidos = JSON.parse(sessionStorage.getItem("colores"));

let coloresPredefinidos = ['#950952', '#5e0035', '#e5e6e4', '#a6a2a2'];

let respuesta = [];

let arrayBoss = [];

let numeroColores = 0;

//SWITCH DEL NÚMERO DE COLORES SEGÚN LA DIFICULTAD.
    switch(dificultad){
        case '1':
            numeroColores = 4;
            break;
        case '2':
            numeroColores = 5;
            break;
        case '3':
            numeroColores = 6;
            break;
        default:
            numeroColores = 4;
            break;
    }

//CREACIÓN ARRAY ALEATORIO BOSS.
const coloresBoss = () => {
    for(let i = 0; i < numeroColores; i++){
        arrayBoss.push(coloresEscogidos[Math.floor(Math.random() * coloresEscogidos.length)]);
    }
}

coloresBoss();

console.log(nombre)
console.log(dificultad)
console.log(coloresEscogidos)
console.log(arrayBoss)
