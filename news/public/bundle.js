'use strict';

// import { v4 as uuidv4 } from 'uuid';
const contenedor = document.getElementById("cont-publicaciones-pequeno");
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
          x.className="publicaciones";
          x.innerHTML=`
          



      
                <div class="fondo-datos">
                    <img src="${avatar.picture.large}" alt="Foto de perfil" class="perfil">


                    <div class="div-column">
                        <p class="nombre-cliente"><b>${result[i].authors[0]}</b></p>
                        <div class="datos">
                        <p class="fecha">${result[i].topics[0].topic}</p>
                        <div class="bolita"></div>
                        <p class="lugar">${result[i].topics[0].relevance_score}</p>
                        </div>
                    </div>
                </div>

                <div class="cont-img-publicacion">
                    <img class="img-publicacion" src="${result[i].banner_image}" alt="Publicacion" width="300px">
                </div>

                <a href="${result[i].url}">Mas informacion</a>
                <p class="descripcion">${result[i].title}</p>
            

          
          `;

       contenedor.appendChild(x);

        };



    }catch(e){

        console.log(e);

    }
};

Publicacion();
