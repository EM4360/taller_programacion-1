//vamos a crear un arreglo 

let lenguajes = ['java','Python','JavaScript','C++','Visual Basic','Go']

let longitud = lenguajes.length
console.log(longitud)


//Acceder al ultimo elemento de un arreglo

let ultimo = lenguajes[longitud-1]

//recorrer un arreglo

lenguaje.forEach(element,index => {
    console.log((index+1)+'-'+element)
});

//agregar un elemento al final del arreglo

lenguajes.push('Php')
console.log(lenguajes)


// como elimino el ultimo elemento del arreglo
lenguajes.pop
console.log(lenguajes)

// como agregro un elemento al inicio del arreglo

lenguajes.unshift('C#');
cnosole.log(lenguajes)

//como eliminar el primer elemento de un arreglo 

lenguajes.shift()
console.log(lenguajes)