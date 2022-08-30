import Producto from "./producto.js";

function obtener(){
    let producto = new Producto()

    producto.categoria = document.getElementById("slt_operar").value
    producto.obtener_producto()
}


document.getElementById("slt_operar").addEventListener("change",obtener)