'use strict';

// import { v4 as uuidv4 } from 'uuid';
const contenedor = document.getElementById("cont-padre-public");
const Publicacion=async()=>{

    // esta es la url de la api
    const  url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
    const ht= 'https://randomuser.me/api/';
     const stado =await fetch(ht);
     const dat = await stado.json();
     const  avatar = dat.results[0];
     console.log(avatar);

    //  const u = uuidv4();
    //  for(let i=0; i<4; i++){
       
    //     const c =dat.results[0].login.uuid="1";
    //     console.log(dat.results[0]);

    //  }
  
     
    
    // aqui estoy acediendo al estado del input
    

    try{

        

        const resultado = await fetch(url);
    
        // aqui lo estoy transformando a json
        const datos = await resultado.json();
        const result = datos.feed;
        console.log(result);
      
        for( let i =0; i< result.length; i++ ) {
            // dat.results[0].login.uuid="1";
           const alea= Math.floor(Math.random() * 2);

            if(alea === 0){
                avatar.picture.large=`https://randomuser.me/api/portraits/men/${i}.jpg`;

            }else {
                avatar.picture.large=`https://randomuser.me/api/portraits/women/${i}.jpg`;

            }

             
             
             
            
          const x = document.createElement("div");
          x.className="contenedorPublicacion";
          x.innerHTML=`
          

          <div class="contenedorDatos">
          <img class="cristianito" src="${avatar.picture.large}" alt="Foto de ususario">
          <div class="contFechaHora">
              <p class="nombreUsuario">${result[i].authors[0]}</p>
              <div class="apartadocolumn">
              <p class="fecha">${result[i].topics[0].topic}</p>
              <div class="borderuno"></div>
              <p class="hora">${result[i].topics[0].relevance_score}</p>
              <i class="fa-regular fa-clock"></i>
              </div>
          </div>
      </div>

          
          <div class="imgCont">
          <img class="imagensita" src="${result[i].banner_image}" alt="Foto de Publicacion" width="700px">
      </div>
      <a href="${result[i].url}" target="_blank"><p class="link">Mas informacion</p></a>
      <p class="descripcion">${result[i].title}</p>
          
          `;

       contenedor.appendChild(x);

        };



    }catch(e){

        console.log(e);

    }
};

// Publicacion();
