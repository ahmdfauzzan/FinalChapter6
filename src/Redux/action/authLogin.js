import { useNavigate } from "react-router";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import http3 from "../../utils/http3";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth/authLogin";
import { reduxLoginUser } from "../../services/auth/login_user";

export const LoginUser = (input) => async (dispatch) => {
  try {
    const result = await reduxLoginUser(input);
    CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {
    alert(err.response.data.message);
    console.log(err.response.data.message);
    return false;
  }
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookiesKeys.AuthToken);
};

// ya kayak gini mangilanya
// export const LoginUser = (input) => (dispatch) => {
//   http3
//     .post(API_ENDPOINT.LOGIN_USER, input)
//     .then((result) => {
//       //  value / data yang kalaian akan dapet ketika api berhasil di jalankan
//       CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
//       // simpan di redux
//       dispatch(setToken(result.data.data.token));
//       // dispatch(setIsLoggedIn(true));
//       // dispatch(setUser("salto"))
//       window.location.href = "/";
//     })
//     .catch((err) => {
//       // value yang kalian akan dapat ketika api erorr / gagal di jalankan
//     });
// };

// export const GetTokenFromCookie = () => (dispatch) => {
//   const token = CookieStorage.get(CookiesKeys.AuthToken);
//   if (token) {
//     dispatch(setToken(token));
//   } else {
//     console.error("Token not found in cookie!"); // Tambahkan debugging log ini
//   }
// };
