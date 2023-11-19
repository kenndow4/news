
const Publicacion=async()=>{

    // esta es la url de la api
    const  url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
    // aqui estoy acediendo al estado del input

    const resultado = await fetch(url);

    // aqui lo estoy transformando a json
    const datos = await resultado.json();

    console.log(datos);
}

export default Publicacion ;