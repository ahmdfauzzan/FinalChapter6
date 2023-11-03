import { useQuery } from "@tanstack/react-query";
import http3 from "../utils/http3";
import { API_ENDPOINT } from "../utils/api-endpoints";

//untuk hit API
// const fetchDataMovieDetail = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http3.get(_key, { params: _params });
// }
//   return data;
// };

// //untuk Dinamis handle
// const useMovieDataDetail = (options) => {
//   return useQuery([API_ENDPOINT.DETAIL, options], fetchDataMovieDetail);
// };

// export { fetchDataMovieDetail, useMovieDataDetail };

// Adjust the function to take an id parameter
// export const reduxDetailMovie = async (id) => {
//   return await http3.get(`${API_ENDPOINT.DETAIL}${id}&append_to_response=videos`);
// };

export const reduxDetailMovie = async (id) => {
  return await http3.get(API_ENDPOINT.DETAIL + id);
};

