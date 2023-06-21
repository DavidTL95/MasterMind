let nombre = document.getElementById("nombre");

let mostrarNombre = document.getElementById("mostrarNombre");
let mostrarColor1 = document.getElementById("mostrarColor1");

let colorPicker = document.getElementById("colorPicker");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let colores = []


const dificultad = () => {

    window.location.href = "../pages/dificultad.html"

}

colorPicker.addEventListener('change', (e) => {

    if(color1.style.backgroundColor === ""){

        color1.style.backgroundColor = e.target.value;
        //colores.push(e.target.value);
        
    }else if(color2.style.backgroundColor === ""){

        //colores.push(e.target.value);
        color2.style.backgroundColor = e.target.value;

    }else if(color3.style.backgroundColor === ""){

        //colores.push(e.target.value);
        color3.style.backgroundColor = e.target.value;
    }else{
        //colores.push(e.target.value);
        color4.style.backgroundColor = e.target.value;
    }
})

const guardarDatos = () => {

    if(nombre.value != ""){

        sessionStorage.setItem("nombre", nombre.value);

        sessionStorage.setItem("colores", colores.values);

        window.location.href = "../pages/juego.html"

    }else{
        nombre.style.borderColor = "red";
    }

}

mostrarNombre.innerHTML = sessionStorage.getItem("nombre")
mostrarColor1.style.backgroundColor = sessionStorage.getItem(colores[0])



// let colorCollection = document.getElementsByClassName("color");
//     //Transformar HTMLCollection a un Array
//     let arrayColours = Array.from(colorCollection).map(item=>item.value);
// sessionStorage.setItem("colores", JSON.stringify(arrayColours));


// const changeColours=() =>{
//     let levelSelected = valorActivo = document.querySelector('input[name="radioButton"]:checked').value;

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

//         coloursBoard.innerHTML+=`
//         <div class="col-12 col-md-2 d-flex justify-content-ce