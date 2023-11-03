import { reduxDetailMovie } from "../../services/get-data-movie-detail";
import { setDetail } from "../reducers/movie/authDetailMovieSlice";

// Redux action (getMoviePopular)
export const getMovieDetail = (id) => (dispatch) => {
  reduxDetailMovie(id)
    .then((result) => {
      dispatch(setDetail(result?.data?.data));
      console.log(result, "result dari action");
    })
    .catch((err) => {
      return err;
    });
};
