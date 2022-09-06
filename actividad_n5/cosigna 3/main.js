const objeto = async () => {

    const framework = {
        titulo: "Framework utilizado en la actualidad",
        nombre: "Angular",
        caracteristicas: {
          lenguaje: 'TypeScript',
          patron: 'MVVM',
          spa: "spa",
        },
      };
    
    const { lenguaje, patron, spa } = framework.caracteristicas;
    console.log(`
    Caracteristicas:
    Lenguaje: ${lenguaje}
    Patron: ${patron}
    Spa: ${spa}
    `);
    
      



}

document.getElementById("btn_mostrar").addEventListener("click",objeto)