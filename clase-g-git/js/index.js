  //Series populares
  //let seriesPopulares = document.querySelector ('.seriespopulares')
let urlSeries = "https://api.themoviedb.org/3/tv/popular?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&page=1 "

fetch(urlSeries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results); //Mostrame por consola.
        let info = data.results; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let series = document.querySelector('.series');
        let elementosLista = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<6; i++){
            elementosLista += `<article class="art-series">
                                    <a class="peli" href="./detail-series.html?id=${info[i].id}" > 
                                        <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt="${info[i].name}">
                                        <p class="titulopeli">${info[i].name}</p>
                                        <p class="fecha">${info[i].first_air_date}</p>
                                    </a>
                                </article>`    
        }
        

        //Paso 3: reinviar datos actualizados al DOM
        series.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })   
 
 //Peliculas Populares
//let peliculasPopulares = document.querySelector ('.peliculaspopulares')
let urlPopulares = " https://api.themoviedb.org/3/movie/popular?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&page=1"

fetch(urlPopulares)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results); //Mostrame por consola.
        let info = data.results; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let populares = document.querySelector('.peliculas');
        let elementosLista = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<6; i++){
            elementosLista += `<article class="art-peli">
                                    <a class="peli" href="./detail-movies.html?id=${info[i].id}" > 
                                        <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt="${info[i].title}">
                                        <p class="titulopeli">${info[i].title}</p>
                                        <p class="fecha">${info[i].release_date}</p>
                                    </a>
                                </article>` 
        }
    

        //Paso 3: reinviar datos actualizados al DOM
        populares.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })
 
 //Lo mas visto en peliculas
//let masVistoPeliculas = document.querySelector ('.masvistopeliculas')
let url = " https://api.themoviedb.org/3/movie/top_rated?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&page=1"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results); //Mostrame por consola.
        let info = data.results; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let visto = document.querySelector('.masvisto');
        let elementosLista = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<6; i++){
            elementosLista += `<article class="art-visto">
            <a class="peli" href="./detail-movies.html?id=${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path} alt="${info[i].title}">
                <p class="titulopeli">${info[i].title}</p>
                <p class="fecha">${info[i].release_date}</p>
            </a>
        </article>`
        }
        

        //Paso 3: reinviar datos actualizados al DOM
        visto.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    }) 
