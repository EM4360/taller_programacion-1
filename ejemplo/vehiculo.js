export default class Vehiculo{
    //declarando o inicializando el atributo marca
    marca = ''

    //parametro argumento
    constructor(km)
    {
        //atributo
        this.Kilometraje =  km   
    }

    //metodo
    mostrar_km()
    {
    console.log(`
    kilometraje=${this.Kilometraje}`)

       
    }

    mostrar_marca()
    {
        console.log(`Marca del vehiculo: ${this.marca}`)
    }
}