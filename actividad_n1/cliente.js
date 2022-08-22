export default class Cliente {
  constructor(nombre, apellido, dni) {
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Dni = dni;
  }
  mostrar_datos_personales(){
      console.log(`
      Nombre = ${this.Nombre} 
      Apellido = ${this.Apellido} 
      DNI = ${this.Dni}`)
  }

  
}
