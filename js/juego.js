
//RECUPERACIÓN DE ELEMENTOS GUARDADOS EN EL SESSION STORAGE.
let nombre = sessionStorage.getItem("nombreUsuario");
let dificultad = sessionStorage.getItem("dificultad");
let colores = JSON.parse(sessionStorage.getItem("colores"));

//OBTENER ELEMENTOS PARA LA PARTIDA.
let divBoss = document.getElementsByClassName("bossColors");

let numeroColores = 0;
let turnos = 0

const tablero = document.getElementById("jugador");
const divResultado = document.getElementById("resultado");
const divNombre = document.getElementById("nombre");

//MOSTRAR NOMBRE, DIFUCULTAD.

    divNombre.innerHTML = `Usuario: ${nombre}`;

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
        switch(dificultad){
            case '1':
                for (let i = 0; i < 4; i++) {
                    const random = Math.floor(Math.random() * colores.length);
                    codigo.push(colores[random]);
                  }
                  return codigo;

            case '2':
                for (let i = 0; i < 5; i++) {
                    const random = Math.floor(Math.random() * colores.length);
                    codigo.push(colores[random]);
                  }
                  return codigo;

            case '3':
                for (let i = 0; i < 6; i++) {
                    const random = Math.floor(Math.random() * colores.length);
                    codigo.push(colores[random]);
                  }
                  return codigo;

            default:

        }
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
    function crearDivsJugador() {

        const filaJugador = document.createElement('div');
        filaJugador.classList.add('row');
        tablero.appendChild(filaJugador);
     
        for(let i = 0; i < 4; i++){

            const circulosColores = document.createElement('div');
            circulosColores.style.backgroundColor = colores[0];
            circulosColores.className = 'circulos';
            circulosColores.addEventListener('click', () => seleccionColor(circulosColores));
            filaJugador.appendChild(circulosColores);
        }
        
    }

    crearDivsJugador();

    //SELECCIÓN DE COLOR. ✅
    const seleccionColor = (circulo) => {
        const colorActual = rgbToHex(circulo.style.backgroundColor);
        // console.log(colorActual)
        const indice = colores.indexOf(colorActual);
        // console.log(indice)
        const nuevoIndice = (indice + 1) % colores.length;
        circulo.style.backgroundColor = colores[nuevoIndice];
    }

    //FUNCIÓN CHECKEAR + ASIGNAR A BOTÓN.

    document.getElementById('check').addEventListener('click', checkear);

    function checkear () {
        if(turnos <= 0){
            alert('Se acabó el juego! Pa tu casa! 😜');
            alert('El código secreto era: ' + boss.join(', '));
            resetGame();
            return;
        }

        const adivinar = Array.from(tablero.lastChild).map(circulo => rgbToHex(circulo.style.backgroundColor));
        const resultado = obtenerResultado(adivinar);

        //CREAR NUEVA ROW EN EL DIV RESULTADO.
            const resultadoFila = document.createElement('div');
            resultadoFila.classList.add('rowResultado');
            divResultado.appendChild(resultadoFila);

            //     for(let i = 0; i < 4; i++){
            //         const circuloResultado = document.createElement('div');
            //         circuloResultado.className = 'color';
            //         resultadoFila.appendChild(circuloResultado);
            //     };


            adivinar.forEach(color => {
                const circuloColor = document.createElement('div');
                // circuloColor.className = 'circulosResultado';
                circuloColor.className = 'color';
                circuloColor.style.backgroundColor = color;
                resultadoFila.appendChild(circuloColor);
            });

            resultado.forEach(color => {
                const circuloColor = document.createElement('div');
                // circuloColor.className = 'circulosResultado';
                circuloColor.className = 'color';
                circuloColor.style.backgroundColor = color;
                resultadoFila.appendChild(circuloColor);
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

        //CREACIÓN NUEVA ROW JUGADOR.
            const filaJugador = document.createElement('div');
            filaJugador.classList.add('row');
            tablero.appendChild(filaJugador);
                
                for(let i = 0; i < 4; i++){
                    const circulosColores = document.createElement('div');
                    circulosColores.style.backgroundColor = colores[0];
                    circulosColores.className = 'circulos';
                    circulosColores.addEventListener('click', () => seleccionColor(circulosColores));
                    filaJugador.appendChild(circulosColores);
                }
        }

        function obtenerResultado(res) {
            const resultado = [];
            const copiaResultado = [...boss];
                res.forEach((color, i) => {
                    if(color === copiaResultado[i]) {
                        // const circuloResultado = document.createElement('div');
                        // circuloResultado.className = 'color';
                        // resultadoFila.appendChild(circuloResultado);
                        resultado.push('black');
                        copiaResultado[i] = null;
                    }
        })

        res.forEach((color) => {
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



    //REINICIAR JUEGO.
    function resetGame() {
        boss = generarBoss();
        turnos = 10;
        while (tablero.firstChild) {
            tablero.firstChild.remove();
        }
    }


    function rgbToHex(col) {
        if (col.charAt(0) == "r") {
          col = col.replace("rgb(", "").replace(")", "").split(",");
          var r = parseInt(col[0], 10).toString(16);
          var g = parseInt(col[1], 10).toString(16);
          var b = parseInt(col[2], 10).toString(16);
          r = r.length == 1 ? "0" + r : r;
          g = g.length == 1 ? "0" + g : g;
          b = b.length == 1 ? "0" + b : b;
          var colHex = "#" + r + g + b;
          return colHex;
        }
      }

