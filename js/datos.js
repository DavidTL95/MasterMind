let nombre = document.getElementById("nombre");

const guardarDatos = () => {

    sessionStorage.setItem("nombre", nombre.value);

    window.location.href = "../pages/dificultad.html"

}