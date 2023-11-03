// import { useQuery } from "@tanstack/react-query";
// import { API_ENDPOINT } from "../utils/api-endpoints";
// import http3 from "../utils/http3";

import { API_ENDPOINT } from "../utils/api-endpoints";
import http3 from "../utils/http3";

export const fetchPopularMoviesAPI = async () => {
 
  return await http3.get(`${API_ENDPOINT.POPULAR}?language=en-US&page=${1}`);
  
};

// //untuk hit API
// const fetchDataMoviePopular = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http3.get(_key, { params: _params });

//   return data;
// };

// //untuk Dinamis handle
// const useMovieDataPopular = (options) => {
//   return useQuery([API_ENDPOINT.POPULAR, options], fetchDataMoviePopular);
// };

// export { fetchDataMoviePopular, useMovieDataPopular };
