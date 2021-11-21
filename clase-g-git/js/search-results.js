//Funciones buscador
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

console.log(inputField);
//Pagina Principal

let resultado = document.querySelector ('.conResultados')

resultado.innerText += value

//Busqueda
let url = `https://api.themoviedb.org/3/search/multi?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1&include_adult=false`


fetch (url)
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);

        //Capturo DOM
        let display = document.querySelector ('.resultados')
        let resultadosDeBusqueda = ''

        //Uso un for para recorrer el array de resultados
        for (let i = 0; i < 10; i++) {
            resultadosDeBusqueda += `<article class="art-series">
                                        <a class="peli" href="./detail-series.html?id=${data[i].id}" > 
                                            <img src=https://image.tmdb.org/t/p/w154/${data[i].poster_path} alt="${data[i].name}">
                                            <p class="titulopeli">${data[i].name}</p>
                                            <p class="fecha">${data[i].first_air_date}</p>
                                        </a>
                                    </article>`  
        }

        //Actualizo el DOM
        display.innerHTML += resultadosDeBusqueda;

    })
    .catch (function (error) {
        console.log(error);
    })
 
