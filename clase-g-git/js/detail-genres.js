window.addEventListener("load",function(){

//Validar Formularios
let formulario = document.querySelector ('form')
let inputField = document.querySelector ('#navegador')

formulario.addEventListener ('submit', function (event) {
    event.preventDefault()
    if (inputField.value == "") {
        alert('La busqueda no puede estar vacía')
    } else if (inputField.value.length < 3) {
        alert('El termino buscado debe tener al menos 3 caracteres')
    } else {
        this.submit ()
    }
})

    let qs = location.search;
    let qsto = new URLSearchParams(qs)
    let id = qsto.get("id")
    let name = qsto.get("name")
    let categoria = qsto.get("categoria")
    let tituloPagina = document.querySelector ('title')
    let peliculas = document.querySelector('.peliculas')
    let articlegeneros = document.querySelector('.articlegeneros')

    if (categoria == "pelicula") {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US&sort_by=popularity.desc&with_genres=${id}`)

        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data);
            let info = data.results
            let listadoPelis = ''

        articlegeneros.innerHTML += `<h2>Usted esta viendo peliculas del genero: ${name}</h2>`
        tituloPagina.innerText = `${name} - Moovify`

    
        for (let i = 0; i < 12; i++) {
            listadoPelis += `<article class="art-pelicula">
                                <a href="../html/detail-movies.html?id=${info[i].id}" class="pelicula"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}">
                                    <p class="titulopelicula">${info[i].title}</p> 
                                </a>
                                <br>
                            </article>`

            peliculas.innerHTML = listadoPelis
        }
            
        })     

        .catch(function(error){
            console.log(error);
        })  
    } 
    
    else {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=38d8aa65e8dac91d5716d80acccd64eb&language=en-US&sort_by=popularity.desc&with_genres=${id}`)

        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data);
            let info = data.results
            let listadoSeries = ''

        articlegeneros.innerHTML += `<h2>Usted esta viendo series del genero: ${name}</h2>`
        tituloPagina.innerText = `${name} - Moovify`

    
        for (let i = 0; i < 12; i++) {
            listadoSeries += `<article class="art-pelicula">
                                <a href="../html/detail-series.html?id=${info[i].id}" class="pelicula"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].name}">
                                    <p class="titulopelicula">${info[i].name}</p> 
                                </a>
                                <br>
                            </article>`

            peliculas.innerHTML = listadoSeries
        }
        })

        .catch(function(error){
            console.log(error);
        })   
    }
})    