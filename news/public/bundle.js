'use strict';

const contenedor = document.getElementById("cont-padre-public");
const Publicacion=async()=>{

    // esta es la url de la api
    const  url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
    const ht= 'https://randomuser.me/api/';
     const stado =await fetch(ht);
     const dat = await stado.json();
     const  avatar = dat.results[0];
 
     
    
    // aqui estoy acediendo al estado del input

    try{

        const resultado = await fetch(url);
    
        // aqui lo estoy transformando a json
        const datos = await resultado.json();
        const result = datos.feed;
        console.log(result[0]);

        result.forEach(re => {
            
          const x = document.createElement("div");
          x.className="contenedorPublicacion";
          x.innerHTML=`
          <img  src="${avatar.picture.large}" alt="Foto de Publicacion" width="100px">
          <p class="autor">Autor: <i>${re.authors[0]}</i></p>
          <div class="imgCont">
          <img class="imagensita" src="${re.banner_image}" alt="Foto de Publicacion" width="700px">
      </div>
      <a href="${re.url}" target="_blank"><p class="link">Mas informacion</p></a>
      <p class="descripcion">${re.title}</p>
          
          `;

       contenedor.appendChild(x);

        });



    }catch(e){

        console.log(e);

    }
};

Publicacion();
