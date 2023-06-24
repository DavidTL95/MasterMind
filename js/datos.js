
//COGEMOS EL INPUT QUE ALBERGA EL NOMBRE.
let nombre = document.getElementById("nombre");

//FUNCIÓN GUARDAR NOMBRE EN SESSION STORAGE.
const guardarNombre = () => {
    sessionStorage.setItem("nombreUsuario", nombre.value)
}

//FUNCIÓN GUARDAR DIFICULTAD.
const guardarDificultad = (dificultad) => {
    sessionStorage.setItem("dificultad", dificultad);
}

// let color1 = document.getElementById("color1");
// let color2 = document.getElementById("color2");
// let color3 = document.getElementById("color3");
// let color4 = document.getElementById("color4");

//BOTÓN IR A LA PANTALLA DE JUEGO.
let botonComenzar = document.getElementById("botonComenzar");

//FUNCIÓN IR A LA PANTALLA DE JUEGO.
const jugar = () => {
    if(nombre.value != ""){
        window.location.href = "../pages/juego.html";
    }else{
        nombre.style.borderColor = "red";
    }
}

//OBETNER LOS DIVS QUE ALBERGARÁN LOS COLORES + COLOR PICKER.

let colores = document.getElementsByClassName('color');
let colorPicker = document.getElementById('colorPicker');
let coloresGuardados = [];

//EVENTO OBTENER COLORES.

colorPicker.addEventListener(('change'), (e) => {

    // colores.array.forEach(element => {
    //     element.style.backgroundColor = e.target.value;
    // });

    if(colores[0].style.backgroundColor === ""){

        color1.style.backgroundColor = e.target.value;
        coloresGuardados.push(e.target.value);
        
    }else if(colores[1].style.backgroundColor === ""){

        color2.style.backgroundColor = e.target.value;
        coloresGuardados.push(e.target.value);

    }else if(colores[2].style.backgroundColor === ""){

        colores[2].style.backgroundColor = e.target.value;
        coloresGuardados.push(e.target.value);

    }else if(colores[3].style.backgroundColor === ""){

        colores[3].style.backgroundColor = e.target.value;
        coloresGuardados.push(e.target.value);
        
        sessionStorage.setItem("colores", coloresGuardados)

    }

})

































//     if(nombre.value != ""){

//         sessionStorage.setItem("nombre", nombre.value);

//         let dif = document.querySelector(".btn-check").checked.value;

//         sessionStorage.setItem("dificultad", dif);

//         // let stringColores = JSON.stringify(colores);

//         // sessionStorage.setItem("stringColores", colores.values);


//     }else{
//         nombre.style.borderColor = "red";
//     }



// let colorCollection = document.getElementsByClassName("color");
//     //Transformar HTMLCollection a un Array
//     let arrayColours = Array.from(colorCollection).map(item=>item.value);
// sessionStorage.setItem("colores", JSON.stringify(arrayColours));


// const changeColours=() =>{
//     let dificultad = document.querySelector('input[name="btnradio"]:checked').value;

//     switch (levelSelected){
//         case '1':
//             colours = 4;
//         break;
//         case '2':
//             colours = 5;
//         break;
//         case '3':
//             colours = 6;
//         break;
//     }
//     coloursBoard.innerHTML=""
//     for(let i=1;i<=colours;i++){

//     coloursBoard.innerHTML+=`
//     <div class="col-12 col-md-2 d-flex justify-content-ce