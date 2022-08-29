export default class Producto {
  constructor() {}

  async obtener_producto() {
    const producto = await fetch("https://fakestoreapi.com/products");
    const lista_producto = await producto.json();
    let columnas = [];
    lista_producto.forEach((element) => {
      let columna = `
            <div class="col-lg-4">
                <div class="">           
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.tittle}</h5>
                            <p class="card-text">${element.price}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>  
                    </div>
                </div>    
            </div>
        `;
      columnas.push(columna);
      document.getElementById("row").innerHTML = columnas.join("");
    });
  }
}
