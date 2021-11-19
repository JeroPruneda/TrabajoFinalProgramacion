window.addEventListener("load",function(){


fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US`)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log(datos);
      let generospeliculas = document.querySelector('.generospeliculas')
    datos.genres.forEach(datos => {generospeliculas.innerHTML +=`<a  href="../html/detail-genres.html?id=${datos.id}&name=${datos.name}&categoria=pelicula" class="titulogenero">${datos.name}</a>`
        
    });        
    
    })

    .catch(function(error){
        console.log(error);
    })


fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US`)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log(datos);
      let generosseries = document.querySelector('.generosseries')
    datos.genres.forEach(datos => {generosseries.innerHTML +=`<a  href="../html/detail-genres.html?id=${datos.id}&name=${datos.name}&categoria=serie" class="titulogenero">${datos.name}</a>`
        
    });        
    
    })
    
    .catch(function(error){
        console.log(error);
    })
})