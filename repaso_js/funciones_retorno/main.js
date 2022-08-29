const calcular_tension = (a,b) =>{

    const t = a*b
    return t  


}

const operar = () =>{
    let r = document.getElementById("inp_r").value 
    let i = document.getElementById("inp_i").value

    //invocar a la funcion
 let respuesta =  calcular_tension(r,i)
 alert(respuesta)
}


document.getElementById("btn_operar").addEventListener("click",operar)