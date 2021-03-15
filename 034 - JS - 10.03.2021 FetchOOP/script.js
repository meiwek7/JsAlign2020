const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#search_btn');
const content = document.querySelector('.content');

class Movie {
    constructor(url, response = []) {
        this.url = url;
        this.response = response;
    }

    getData() {
        if (searchInput.value.length === 0) {
            content.innerHTML = 'Movie not found'
        } else
            fetch(this.url)
                .then((response => response.json()))
                .then(data => {
                        let searchMovie = new Render(data.Search);
                        searchMovie.render()
                    }
                )
    }
}

class Render {

    constructor(data) {
        this.data = data
    }

    render() {
        content.innerHTML = '';
        this.data.forEach((film) => {
            content.innerHTML += `<div data-movieId="${film.imdbID}" class="film">
            <img src="${film.Poster}">
            <h2>${film.Title}</h2>
            <p>${film.Year}</p>
            </div>`;
        })
    }
}

class SingleMovie {
    constructor(movies) {
        this.movies = movies;
        console.log(this.movies.length)
    }
    render() {
        this.movies.addEventListener('click', (film)=>{

        })
    }
}

let singleUrl = `http://www.omdbapi.com/?apikey=`

searchBtn.addEventListener('click', (e) => {
    const url = `http://www.omdbapi.com/?apikey=ae256541&s=${searchInput.value}`;
    let movie = new Movie(url);
    movie.getData();

    setTimeout(() =>{

        let movieCollection = document.querySelectorAll('.film');

        console.log(movieCollection);

        let singleMovie = new SingleMovie(movieCollection);

    });



});