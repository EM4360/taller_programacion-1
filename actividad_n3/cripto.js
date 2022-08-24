export default class Cripto{

 constructor(){}

 
    async obtener_cripto(){
        const cripto = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

        const lista_cripto =  await cripto.json();
        let filas = [];
        lista_cripto.forEach((element,index) => {
        let fila = `
        <tr>
            <td>${index+1}</td>
            <td><img src="${element.image}"></td>
            <td>${element.name}</td>
            <td>${element.symbol}</td>
            <td>${element.current_price}</td>
            <td>${element.total_volume}</td>
        </tr>
        `;
    filas.push(fila);
    document.getElementById("tbl_body").innerHTML = filas.join("");
  });
    }
        

}  


   