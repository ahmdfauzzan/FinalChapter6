import { fetchPopularMoviesAPI } from "../../services/get-data-movie-popular";
import { setPopular } from "../reducers/movie/authMovieSlice";

// Redux action (getMoviePopular)
export const getMoviePopular = () => (dispatch) => {
  fetchPopularMoviesAPI()
    .then((result) => {
      dispatch(setPopular(result?.data));
      console.log(result);
    })
    .catch((err) => {
      return err;
    });
};
