import Pitagoras from "./pitagoras.js";

function ejecutar(){

    let pitagoras = new Pitagoras()

    //A traves de las intancia accedemos a los atributos de la misma, para
    //asignarle un valor a cada una de ellas

    pitagoras.co = document.getElementById("inp_catetomenor").value 
    pitagoras.ca =  document.getElementById("inp_catetoadyacente").value

    let respuesta = pitagoras.calcular_hiponetusa()

    // invocamos al metodo que posteriormente nos entrega o retorna una respuesta. Dicha se asigna o guarda
    // en la variable "respuesta" 
    document.getElementById("resultado").textContent = ('h='+respuesta);
}
// obtenemos el H1 para asignarle y mostrar el resultado de la hipotenusa
document.getElementById("btn_mostrar").addEventListener("click",ejecutar)