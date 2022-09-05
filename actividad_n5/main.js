let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' ,'Cronos','Solana']

// Agregar al inicio del arreglo la criptomoneda ‘Stellar’


criptos.unshift('stellar');
console.log(criptos)


//Eliminar las criptomonedas Shiba Inu y Tron respectivamente

let indice2 = criptos.indexOf('Shiba Inu')
criptos.splice(indice2,2)
console.log(criptos)


//Agregar la criptomoneda ‘Gate’ al final del arreglo.

criptos.push('Gate')
console.log(criptos)


async function parrafo(){
    let longitud = criptos.length

    let ultimo = (longitud-1)

    let indice = criptos.indexOf('Helium')
    let indice2 =(criptos[indice])

    let parrafos = [];
    let parrafo= `
    <p>
        la longitud es ${longitud}<br>

        el ultimo elemento es ${ultimo}<br>

        el elemento es : ${indice2}



        
    </p>
    `
    parrafos.push(parrafo);
    document.getElementById("parrafo").innerHTML = parrafos.join("")
}

document.getElementById("btn_mostrar").addEventListener("click",parrafo)



async function lista(){

    let listacriptos = [];

    criptos.forEach((element) =>{
        
        let guardarcripto = `
        <li class="list-group-item">${element}</li>
        `
        listacriptos.push(guardarcripto)
    });

    document.getElementById("lista_cripto").innerHTML = listacriptos.join("") 

}

document.getElementById("btn_lista").addEventListener("click",lista)