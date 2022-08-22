import Cliente from "./cliente.js";
function ejecutar(){
    let Nombre = document.getElementById("inp_nombre").value;
    let Apellido = document.getElementById("inp_apellido").value;
    let Dni = document.getElementById("inp_dni").value;

    let cliente = new Cliente(Nombre,Apellido,Dni);
    cliente.mostrar_datos_personales()  
}
document.getElementById("btn_mostrar").addEventListener("click",ejecutar)