
const contenedor:any = document.getElementById("cont-publicaciones-pequeno");
const loading:any = document.querySelector(".loading");

// este es el codigo de parte del avatar
class Avatar{
    

    avatar= async(url:string)=>{
        try{
          const estado:Response= await fetch(url);
          const datos:{} = await estado.json();
          return [datos,estado];
        }catch(e){
          console.log(e);
        }
    }
   
}


// aqui llamamos la clase
const avatarc:Avatar =new Avatar();

// aqui va la parte del contenido

class Contenido{

    contenido= async(url:string)=>{
      
        try{
        const estado:Response= await fetch(url);
          const datos:{} = await estado.json();
          return "hola";
        }catch(e){
            console.log(e);
        }
    }
}

const contenido:Contenido = new Contenido();


const Publicaciones =async()=>{
    const diAvatar:any=await avatarc.avatar("https://randomuser.me/api/");
    const diContenido:any =await avatarc.avatar("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo");
    const results:string[]=diAvatar.results;
    const result:any = diContenido[0].feed;
    // aqui hago el algoritmo de sacar las fotos aleatorias
    
    
    if(diContenido[1].status == 200 && diContenido[1].ok == true){
        loading.style.display="none";

     }

     

    //  aqui va la parte de la publicacion
    
    

     for(let i:number=0; i< diContenido[0].feed.length; i++){
        let avatar:any=diAvatar[0].results[0];
        let alea:number= Math.floor(Math.random() * 2);
        
        
            if(alea === 0){
                 avatar.picture.large=`https://randomuser.me/api/portraits/men/${i}.jpg`;
               
    
            }else{
                avatar.picture.large=`https://randomuser.me/api/portraits/women/${i}.jpg`;
          
            }
    
         


        const x:any = document.createElement("div");
        x.className="publicaciones";
        
        // x.innerHTML=`
        // <p class="descripcion">${result[i].title}</p>
        // `;
  

        x.innerHTML=`
          

    

      
        <div class="fondo-datos">
          
        <img src="${avatar.picture.large}" loading="lazy" alt="Foto de perfil" class="perfil">

            <div class="div-column">
                <p class="nombre-cliente"><b>${result[i].authors[0] === undefined?"Nombre restringido por menores de 18":result[i].authors[0]}</b></p>
                <div class="datos">
                <p class="fecha">${result[i].topics[0].topic}</p>
                <div class="bolita"></div>
                <p class="lugar">${result[i].topics[0].relevance_score}</p>
                </div>
            </div>
        </div>

        <div class="cont-img-publicacion">
            <img class="img-publicacion" src="${result[i].authors[0]===undefined?"img/noSee.jpg":result[i].banner_image}" loading="lazy" alt="Publicacion" width="300px">
        </div>

        <a href="${result[i].authors[0]===undefined?"https://www.youtube.com":result[i].url}">Mas informacion</a>
        <p class="descripcion">${result[i].authors[0]===undefined?"El contenido publicado es para mayores de 18, por lo tanto lo hemos bloqueado":result[i].title}</p>
    

  
  `;
  
  contenedor.appendChild(x);

     }


}

Publicaciones();


