window.addEventListener ('load',function () {


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


//Pagina Principal

let qs = location.search //obtengo la qs de la url
let qsto = new URLSearchParams (qs) //la transformo en un objeto literal
let search = qsto.get('search') //Obtengo el valor de search

let resultado = document.querySelector ('.conResultados')
let tituloPagina = document.querySelector ('title')

resultado.innerText += ` ${search}`
tituloPagina.innerHTML += `${search} - Moovify`

//Busqueda
let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1&include_adult=false&query=${search}`
let urlSerie = `https://api.themoviedb.org/3/search/tv?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1&include_adult=false&query=${search}`



fetch (urlMovie)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        //Capturo DOM y creo array para ir rellenando
        let displayPeli = document.querySelector ('.resultadosPeli')
        let resultadosDeBusquedaPeli = ''
        let pelisEncontradas = data.results

        if (pelisEncontradas.length == 0) {
            displayPeli.innerText = `No se han encontrado peliculas para: ${search}` 
        } else {

        //Uso un for para recorrer el array de resultados
        for (let i = 0; i < 6; i++) {
            resultadosDeBusquedaPeli += 
                                        `<article class="art-peli">
                                            <a class="peli" href="./detail-movies.html?id=${pelisEncontradas[i].id}" > 
                                            <img src=https://image.tmdb.org/t/p/w154/${pelisEncontradas[i].poster_path} alt="${pelisEncontradas[i].title}">
                                            <p class="titulopeli">${pelisEncontradas[i].title}</p>
                                            <p class="fecha">${pelisEncontradas[i].release_date}</p>
                                            </a>
                                        </article>`  
        //Actualizo el DOM
        displayPeli.innerHTML = resultadosDeBusquedaPeli;
    }
}
    })
    .catch (function (error) {
        console.log(error);
    })

fetch (urlSerie)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        //Capturo DOM y creo array para ir rellenando
        let displaySerie = document.querySelector ('.resultadosSerie')
        let resultadosDeBusquedaSerie = ''
        let seriesEncontradas = data.results

        if (seriesEncontradas.length == 0) {
            displaySerie.innerText = `No se han encontrado series para: ${search}` 
        } else {

        //Uso un for para recorrer el array de resultados
        for (let i = 0; i < 6; i++) {
            resultadosDeBusquedaSerie += 
                                        `<article class="art-peli">
                                            <a class="peli" href="./detail-series.html?id=${seriesEncontradas[i].id}">
                                                <img src=https://image.tmdb.org/t/p/w154/${seriesEncontradas[i].poster_path} alt="${seriesEncontradas[i].name}">
                                                <p class="titulopeli">${seriesEncontradas[i].name}</p>  
                                                <p class="fecha">${seriesEncontradas[i].first_air_date}</p>
                                            </a>
                                         </article>`  
        //Actualizo el DOM
        displaySerie.innerHTML = resultadosDeBusquedaSerie;
    }
}

})
 
})