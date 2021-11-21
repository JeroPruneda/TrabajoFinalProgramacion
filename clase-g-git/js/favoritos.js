/* //Peliculas favoritos
//Recupero storage
let recuperoStorage = localStorage.getItem('favoritos');

//y transformar de json en array
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos); 


//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.primer-contenedor');
let section1 = document.querySelector('.segundo-contenedor');

let personajesFavoritos = '';


//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritos == null || favoritos.length == 0){
    section.innerHTML='<p class="seleccionados">No hay favoritos seleccionados</p>'
    section1.innerHTML='<p class="seleccionados">No hay favoritos seleccionados</p>'
} else {
    //for para recorrer el array.
    for (let i=0; i<favoritos.length; i++){
        buscarYMostarFavoritos(favoritos[i]);
    }

}


function buscarYMostarFavoritos(id){
    //fetch para buscar cada elemento del array. 
    let url = "https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&sort_by=created_at.asc&page=1"
    let url1 = "https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&sort_by=created_at.asc&page=1"
    fetch(url)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos += `<article class="art-peli">
            <a class="peli" href="./detail-movies.html${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path}>
                <p class="titulopeli">${info[i].title}</p>
                <p class="fecha">${info[i].release_date}</p>
            </a>
        </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos;            
        })
        fetch(url1)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos1 += `<article class="art-series">
            <a class="peli" href="./detail-series.html${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path}>
                <p class="titulopeli">${info[i].name}</p>
                <p class="fecha">${info[i].first_air_date}</p>
            </a>
        </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos1;            
        })
        .catch( function(error){
            console.log(error);
        })

}  */

//Recupero storage
let recuperoStoragePeli = localStorage.getItem('peliculasFav');
let recuperoStorageSerie = localStorage.getItem ('seriesFav')
//y transformar de json en array
let peliculasFav = JSON.parse(recuperoStoragePeli);
console.log(peliculasFav); 

let seriesFav = JSON.parse (recuperoStorageSerie)
console.log(seriesFav);


//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.primer-contenedor');
let personajesFavoritos = '';


//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(peliculasFav == null || peliculasFav.length == 0){
    section.innerHTML='<p class="seleccionados">No hay favoritos seleccionados</p>'
} else {
    //for para recorrer el array.
    for (let i=0; i<peliculasFav.length; i++){
        buscarYMostarFavoritos(peliculasFav[i]);
    }

}


function buscarYMostarFavoritos(id){
    //fetch para buscar cada elemento del array. 
    let url = `https://api.themoviedb.org/3/movie/popular${storage[i].id}?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&page=1`

    fetch(url)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos +=  `<article class="art-peli">
            <a class="peli" href="./detail-movies.html${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path}>
                <p class="titulopeli">${info[i].title}</p>
                <p class="fecha">${info[i].release_date}</p>
            </a>
        </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos;            
        })
        .catch( function(error){
            console.log(error);
        })

}

/* 
//Series favoritos
//Recupero storage
let recuperoStorage1 = localStorage.getItem('seriesFav');
//y transformar de json en array
let favoritos1 = JSON.parse(recuperoStorage1);
console.log(favoritos1); 


//Capturar el contenedor de los elementos a mostar
let section1 = document.querySelector('.segundo-contenedor');
let personajesFavoritos1 = '';


//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritos == null || favoritos.length == 0){
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    //for para recorrer el array.
    for (let i=0; i<favoritos.length; i++){
        buscarYMostarFavoritos(favoritos[i]);
    }

}


function buscarYMostarFavoritos(id){
    //fetch para buscar cada elemento del array. 
    let url1 = "https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=3e29fc479dc4e2ffecc7ae48fa6e551d&language=en-US&sort_by=created_at.asc&page=1"

    fetch(url1)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos1 += `<article class="art-series">
            <a class="peli" href="./detail-series.html${info[i].id}" > 
                <img src=https://image.tmdb.org/t/p/w154/${info[i].poster_path}>
                <p class="titulopeli">${info[i].name}</p>
                <p class="fecha">${info[i].first_air_date}</p>
            </a>
        </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos1;            
        })
        .catch( function(error){
            console.log(error);
        })

}
//Crear un array que iremos completando con datos.
let favoritos = [];

//Recuperar storage
let recuperoStorage = localStorage.getItem('favoritos');

if(recuperoStorage != null){
    //1ro tenemos que transformarlo de cadena de texto y después lo guardamos en favoritos.
    favoritos = JSON.parse(recuperoStorage);
}

//Hacer click en el link. Primero debemos capturar el elemnto.
let fav= document.querySelector('.fav');

//Chequear que el id esté en el array de favoritos
if(favoritos.includes(id)){
    fav.innerText="Quitar de favoritos";
}

fav.addEventListener('click', function(evento){
    evento.preventDefault();

    if(favoritos.includes(id)){
        //Si el id está en el array.
        let indice = favoritos.indexOf(id);
        //Borrar a partir del índice, un elemento.
        favoritos.splice(indice, 1)
        fav.innerText="Agregar a favoritos"
    } else {
         //Agregar un dato al array.
        favoritos.push(id);
        fav.innerText="Quitar de favoritos";
    }
 
    //Guardar el array en el storage
    let favsToString = JSON.stringify(favoritos); //Transformamos el array en una cadena de texto.
    localStorage.setItem('favoritos', favsToString); //Guardamos el array en el storage.

    console.log(localStorage);

})

 */