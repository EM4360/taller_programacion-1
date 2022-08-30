export default class Producto {
  
  categoria;
  
  constructor() {}

  async obtener_producto() {


    const producto = await fetch("https://fakestoreapi.com/products/category/"+this.categoria);
    const lista_producto = await producto.json();
    let columnas = [];
    lista_producto.forEach((element) => {
      let columna = `
            <div class="col-lg-3">
                  
                  <div class="card" >
                        <img height="330" class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.price}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>  
                    </div>
  
            </div>
        `;
      columnas.push(columna)
      document.getElementById("row").innerHTML = columnas.join("");
    });
  }

 
}
