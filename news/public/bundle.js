'use strict';

document.getElementById("cont-padre-public");
const Publicacion=async()=>{

    // esta es la url de la api
    const  url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
    // aqui estoy acediendo al estado del input

    try{

        const resultado = await fetch(url);
    
        // aqui lo estoy transformando a json
        const datos = await resultado.json();
        const result = datos.feed;

        result.forEach(re => {
            console.log("ho");
        });



    }catch(e){

        console.log(e);

    }
};

Publicacion();
