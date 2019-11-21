import AppDispatcher from '../Dispatchers/AppDispatcher';
import Constants from '../Constants/Constants';
class Actions {
    searchMovies(movie) {
        AppDispatcher.dispatch({
            actionType: Constants.SEARCH_MOVIES,
            movie: movie
        })
    }

    showMovieResults(movies) {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_MOVIE_RESULTS,
            movies: movies
        })
    }
}
export default new Actions();