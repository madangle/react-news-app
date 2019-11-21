import Actions from '../Actions/Actions';
class API {
    searchMovies(movie) {
        fetch('https://omdbapi.com/?apikey=35a22b41&s=' + movie.title)
            .then(response => response.json())
            .then(data => {
                let movies = data.Search ? data.Search : [];
                Actions.showMovieResults(movies);
                console.log(data);
            });
    }
}
export default new API();