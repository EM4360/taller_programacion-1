function mostrar_objeto() {
  let cliente = {
    nombre: "Pepito",
    apellido: "Pozzo",
    dni: 44798122,
    correo: {
      outlook: "superpepito@outlook.com",
      gmail: "pepis@gmail.com",
      yahoo: "elpepo@yahoo.com.ar",
    },
  };
  // forma tradicional

  /*const outlook = cliente.correo.outlook;
  const gmail = cliente.correo.outlook;
  const yahoo = cliente.correo.outlook;*/

  //forma nueva - destructuring Object

  //------------------------------
  const { outlook, gmail, yahoo } = cliente.correo;
  console.log(`
  correos de pepitos:
  outlook: ${outlook}
  gmail: ${gmail}
  yahoo: ${yahoo}
  `);
}

mostrar_objeto();

//creamos funcion flecha

const consumir_api = async () => {
  // estamos realizando mediante la funcion nativa de javascript denominada fetch, una solicitud a traves
  // del método GET de man era de obtener las publicaciones en notacion JSON
  const publicaciones = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const publicaciones_definitivas = await publicaciones.json();

  let items_totales = [];

  publicaciones_definitivas.forEach((element) => {
    let item = `<li class="list-group-item">${element.title}</li>`;
    items_totales.push(item);
  });

  document.getElementById("lista_publicaciones").innerHTML =
    items_totales.join("");
};
consumir_api();
