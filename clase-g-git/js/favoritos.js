window.addEventListener ('load', function () { 
    
//Recupero las qs del storage

let recuperoStoragePeli = localStorage.getItem('peliculasFav');
let recuperoStorageSerie = localStorage.getItem ('seriesFav')


//Transformo las qs en objetos literales

let peliculasFav = JSON.parse(recuperoStoragePeli);
console.log(peliculasFav); 

let seriesFav = JSON.parse (recuperoStorageSerie)
console.log(seriesFav);

//Capturar el DOM de los elementos a mostar
let listaDePelisFavs = document.querySelector('.peliculas');
let listaDeSeriesFavs = document.querySelector('.series');
let listadoPelis = ''
let listadoSeries = ''


//Creo un if por si los arrays estan vacios

if (peliculasFav == null || peliculasFav.length == 0) {
    listaDePelisFavs.innerHTML = '<h3 class"seleccionados">No has agregado ninguna pelicula a favoritos</h3>'

    } else {

    for (let i = 0; i < peliculasFav.length; i++) {
        
        let urlMovie = `https://api.themoviedb.org/3/movie/${peliculasFav[i]}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`
    
    fetch (urlMovie)
        .then (function (response) {
            return response.json ();
        })
        .then (function (data) {
            console.log(data);

            listadoPelis += 
                            `<article class="art-peli">
                                <a class="peli" href="./detail-movies.html?id=${data.id}" > 
                                    <img src=https://image.tmdb.org/t/p/w154/${data.poster_path} alt="${data.title}">
                                    <p class="titulopeli">${data.title}</p>
                                    <p class="fecha">${data.release_date}</p>
                                </a>
                            </article>`

            listaDePelisFavs.innerHTML = listadoPelis
        })
        .catch (function (error) {
            console.log(error);
        })
        }
    }

if (seriesFav == null || seriesFav.length == 0) {
    listaDeSeriesFavs.innerHTML = '<h3 class="seleccionados">No has agregado ninguna serie a favoritos</h3>'
    
    } else {
    
    for (let i = 0; i < seriesFav.length; i++) {
           
        let urlSerie = `https://api.themoviedb.org/3/tv/${seriesFav[i]}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`
        
    fetch (urlSerie)
        .then (function (response) {
            return response.json ();
        })
        .then (function (data) {
            console.log(data);
    
            listadoSeries += 
                            `<article class="art-peli">
                                <a class="peli" href="./detail-series.html?id=${data.id}" > 
                                    <img src=https://image.tmdb.org/t/p/w154/${data.poster_path} alt="${data.name}">
                                    <p class="titulopeli">${data.name}</p>
                                    <p class="fecha">${data.first_air_date}</p>
                                </a>
                            </article>`
    
            listaDeSeriesFavs.innerHTML = listadoSeries
        })
        .catch (function (error) {
            console.log(error);
         })
        }
    }

})
