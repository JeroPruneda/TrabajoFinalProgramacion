let qs = location.search; //Obtengo la qs de la url
let qtso = new URLSearchParams(qs); //Transformar la qs en un objeto literal
let id = qtso.get('id'); //Obtener el dato de id del objeto literal

let url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`

fetch (url)
    .then (function (response) {
        return response.JSON()
    })
    .then (function (data) {
        console.log(data);

        //Capturo los elementos del DOM
        let title = document.querySelector ('h1');
        let rating = document.querySelector ('.rating');
        let releaseDate = document.querySelector ('.fechaDeEstreno');
        let duration = document.querySelector ('.duracion');
        let sinopsis = document.querySelector ('.sinopsis');
        let genre = document.querySelector ('.genero');
        let img = document.querySelector ('.imgLaptop');

        //Actualizo el DOM

    })
    .catch (function (error) {
        console.log(error);
    })

//Boton de Favoritos

//Creo array a rellenar de peliculas favoritas
let seriesFav = []

//Recupero el storage
let recuperoStorage = localStorage.getItem ('seriesFav')

//Reviso si el id ya esta en favoritos
if (recuperoStorage =! null) { //Sucede si hay datos en el storage
    
    seriesFav = JSON.parse(recuperoStorage);

    console.log(seriesFav);
}

//Capturo el elemento en el DOM
let fav = document.querySelector ('.favoritos');

if (seriesFav.includes(id)) {
    fav.innerText = 'Quitar de Favoritos'
}

fav.addEventListener ('click', function (evento) {
    evento.preventDefault();

    //En el caso de que la pelicula ya este en favoritos y el usuario quiera sacarla
    if (seriesFav.includes(id)) { 
        let indice = seriesFav.indexOf(id);
        seriesFav.slice(indice, 1); //Saco a esa serie de la lista de favoritos
        fav.innerText = 'Agregar a favoritos'
    }
    //En el caso de que la pelicula no este en favoritos
    else {
        seriesFav.push(id); //Agrego esa serie a la lista de favo
        fav.innerText = 'Quitar de Favoritos';
    }

    //Guardo el array en el storage
    let favsToStirng = JSON.stringify(favoritos); //Se transforma al array en una cadena de texto
    
    localStorage.setItem('favoritos', favsToStirng) //Guardo la info en el storage

    console.log(localStorage);
})
