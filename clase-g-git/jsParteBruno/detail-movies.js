let qs = location.search; //Obtengo la qs de la url
let qtso = new URLSearchParams(qs); //Transformar la qs en un objeto literal
let id = qtso.get('id'); //Obtener el dato de id del objeto literal

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`

fetch (url)
    .then (function (response) {
        return response.json()
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
        let imgLaptop = document.querySelector ('.imgLaptop');
        let imgMobile = document.querySelector ('.imgMobile')

        //Actualizo el DOM
        title.innerText = data.title;
        rating.innerText = `Rating: ${data.vote_average}/10`;
        releaseDate.innerText = `${data.release_date},`;
        duration.innerText = `${data.runtime} minutes,`
        sinopsis.innerText = data.overview

        let string = ''
        for (let i = 0; i < data.genres.length; i++) {
            const element = data.genres[i];
            
            string += `<a href="./detail-genres.html?id=${element.id}&name=${element.name}&categoria=pelicula">${element.name}</a> `
        }

        genre.innerHTML = string



        imgLaptop.src = `https://image.tmdb.org/t/p/w154/${data.poster_path}`
        imgLaptop.alt = data.title;
        imgMobile.src = `https://image.tmdb.org/t/p/w154/${data.poster_path}`
        imgMobile.alt = data.title




    })
    .catch (function (error) {
        console.log(error);
    })

    //Backdrop para mobile, poster para laptop


 
//Boton de Favoritos

//Creo array a rellenar de peliculas favoritas
let peliculasFav = []

//Recupero el storage
let recuperoStorage = localStorage.getItem ('peliculasFav');

//Reviso si el id ya esta en favoritos
if (recuperoStorage != null) { //Sucede si hay datos en el storage
    
    peliculasFav = JSON.parse(recuperoStorage);

}

//Capturo el elemento en el DOM
let fav = document.querySelector ('.favoritos');
let botonFav = document.querySelector ('.botonFav')

if (peliculasFav.includes(id)) {
    botonFav.innerText = 'Quitar de favoritos'
} 


fav.addEventListener ('click', function (evento) {
    evento.preventDefault();

    //En el caso de que la pelicula ya este en favoritos y el usuario quiera sacarla
    if (peliculasFav.includes(id)) { 
        let indice = peliculasFav.indexOf(id);
        peliculasFav.splice(indice, 1);
        botonFav.innerText = 'Agregar a favoritos'


    } else {
    //En el caso de que la pelicula no este en favoritos
        peliculasFav.push(id);
        botonFav.innerHTML = 'Quitar de Favoritos';
    }

    console.log(peliculasFav);
    //Guardo el array en el storage
    let favsToStirng = JSON.stringify(peliculasFav); //Se transforma al array en una cadena de texto
    
    localStorage.setItem('peliculasFav', favsToStirng) //Guardo la info en el storage

}) 
 