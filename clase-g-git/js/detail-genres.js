window.addEventListener("load",function(){

    var querystring = location.search;
    var query2 = new URLSearchParams(querystring)
    var id = query2.get("id")
    let name = query2.get("name")
    let categoria = query2.get("categoria")
    if (categoria == "pelicula") {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US&sort_by=popularity.desc&with_genres=${id}`)

        .then(function(respuesta){
            return respuesta.json()
        })

        .then(function(datos){
            console.log(datos);
          let articlegeneros = document.querySelector('.articlegeneros')
          articlegeneros.innerHTML += `<h2>Usted esta viendo peliculas del genero ${name}</h2>`
        let peliculas = document.querySelector('.peliculas')
        datos.results.forEach(datos => {peliculas.innerHTML +=` <article class="art-pelicula">
        <a href="../html/detail-movies.html" class="pelicula"><img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" >
        <p class="titulopelicula">${datos.title}</p> 
        </a>
        <br>
    </article>`
            
        });        
        
        })

        .catch(function(error){
            console.log(error);
        })  
    } 
    
    else {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US&sort_by=popularity.desc&with_genres=${id}`)

        .then(function(respuesta){
            return respuesta.json()
        })

        .then(function(datos){
            console.log(datos);
          let articlegeneros = document.querySelector('.articlegeneros')
          articlegeneros.innerHTML += `<h2>Usted esta viendo series del genero ${name}</h2>`
        let peliculas = document.querySelector('.peliculas')
        datos.results.forEach(datos => {peliculas.innerHTML +=` <article class="art-pelicula">
        <a href="../html/detail-movies.html" class="pelicula"><img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" >
        <p class="titulopelicula">${datos.name}</p> 
        </a>
        <br>
        </article>`})
        
        })

        .catch(function(error){
            console.log(error);
        })   
    }
})    