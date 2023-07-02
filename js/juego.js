
//RECUPERACIÓN DE ELEMENTOS GUARDADOS EN EL SESSION STORAGE.
let nombre = sessionStorage.getItem("nombreUsuario");
let dificultad = sessionStorage.getItem("dificultad");
let colores = JSON.parse(sessionStorage.getItem("colores"));

//OBTENER ELEMENTOS PARA LA PARTIDA.
let divBoss = document.getElementsByClassName("bossColors");

let numeroColores = 0;
let turnos = 0

const tablero = document.getElementById("jugador");
const check = document.getElementById('check');


    //CREACIÓN DEL SWITCH PARA ASIGNAR CANTIDAD DE TURNOS Y COLORES DEPENDIENDO DE LA DIFICULTAD. ✅
    switch(dificultad){
        case '1':
            numeroColores = 4;
            turnos = 10;
            break;
        case '2':
            numeroColores = 5;
            turnos = 8;
            break;
        case '3':
            numeroColores = 6;
            turnos = 6;
            break;
        default:
            numeroColores = 4;
            break;
    }

    //CREACIÓN ARRAY ALEATORIO BOSS. ✅
    const generarBoss = () => {
        const codigo = [];
        for (let i = 0; i < 4; i++) {
          const random = Math.floor(Math.random() * colores.length);
          codigo.push(colores[random]);
        }
        return codigo;
      }

    let boss = generarBoss();

            console.log(colores);
            console.log(boss);

    //CREACIÓN DE LOS CÍRCULOS DEL BOSS. ✅
    const circulosBoss = document.querySelectorAll('.circuloBoss');
    circulosBoss.forEach((circulo, i) => {
        circulo.style.backgroundColor = boss[i];
    })

    //CREACIÓN DE LOS CUATRO CÍRCULOS INICIALES. ✅
    for(let i = 0; i < 4; i++){
        const circulosColores = document.createElement('div');
        circulosColores.className = 'circulos';
        circulosColores.addEventListener('click', () => seleccionColor(circulosColores));
        tablero.appendChild(circulosColores);
    }

    //SELECCIÓN DE COLOR.
    const seleccionColor = (circulo) => {
        const colorActual = circulo.style.backgroundColor;
        const indice = colores.indexOf(colorActual);
        const nuevoIndice = (indice + 1) % colores.length;
        circulo.style.backgroundColor = colores[nuevoIndice];
    }

    //FUNCIÓN CHECKEAR + ASIGNAR A BOTÓN.

    const checkear = () => {
        if(turnos <= 0){
            alert('Se acabó el juego! Pa tu casa! 😜');
            alert('El código secreto era: ' + boss.join(', '));
            resetGame();
            return;
        }

        const adivinar = Array.from(tablero.children).map(circulo => circulo.style.backgroundColor);
        const resultado = obtenerResultado(adivinar);

        //MOSTRAR RESULTADO.
        const resultadoFila = document.createElement('div');
        resultadoFila.classList.add('.resultado');
        tablero.appendChild(resultadoFila);

        adivinar.forEach(color => {
            const circuloColor = document.createElement('div');
            circuloColor.className = 'color';
            circuloColor.style.backgroundColor = color;
            resultadoFila.appendChild(circuloColor);
        });

        resultado.forEach((color, i) => {
            const circuloResultado = document.createElement('div');
            circuloResultado.className = 'color';
            circuloResultado.style.backgroundColor = color;
            resultadoFila.appendChild(circuloResultado);
        });

        //VER SI ES CORRECTO O NO.
        if(resultado.every(color => color === 'black')){
            alert('Has ganado, campeón, leyenda, máquina, mastodonte.');
            resetGame();
            return;
        }

        turnos--;

        if(turnos === 0){
            alert('Se acabó el juego! Pa tu casa! 😜');
            alert('El código secreto era: ' + boss.join(', '));
            resetGame();
        }
    }

    const obtenerResultado = (res) => {
        const resultado = [];
        const copiaResultado = [...boss];
        res.forEach((color, i) => {
            if(color === copiaResultado[i]) {
                resultado.push('black');
                copiaResultado[i] = null;
            }
        })

        res.forEach((color, i) => {
            const posicion = copiaResultado.indexOf(color);
            if(posicion !== -1) {
                resultado.push('white');
                copiaResultado[posicion] = null;
            }
        })

        while(resultado.length < 4) {
            resultado.push('empty');
        }
        return resultado;
    }

    check.addEventListener('click', checkear());

    //REINICIAR JUEGO.
    const resetGame = () => {
        boss = generarBoss();
        turnos = 10;
        while (tablero.firstChild) {
            tablero.firstChild.remove();
        }
    }

