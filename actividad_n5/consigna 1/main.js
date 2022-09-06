const obtener_api = async () => {
    const casas = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
  
    const lista_casas = await casas.json();
  
    let filas = [];
    lista_casas.forEach((element,index) => {
      let fila = `
          <tr>
              <td>${element.casa.compra}</td>
              <td>${element.casa.venta}</td>
              <td>${element.casa.nombre}</td>
          </tr>
      `;
      filas.push(fila);
    });
  
    document.getElementById("tbl_body").innerHTML = filas.join("");
  };

  obtener_api();