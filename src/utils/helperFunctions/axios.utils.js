// api.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs"
import { toast } from "react-toastify";
import { getAuthenticationToken, saveAuthenticationToken } from "../../utils/helperFunctions/authManager"

function redirectToLoginPage(url) {
  window.location.href = url;
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_EXCEED_BACKEND_BASE_URL,
  headers: { 'Content-Type': "application/json" }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (request) => {
    request.headers["Accept"] = "application/json";
    if (request.headers["X-Request-without-token"] === true) return request
    const authData = getAuthenticationToken()
    if (authData && authData.access_token) {
      const tokenData = jwtDecode(authData.access_token)
      request.headers.Authorization = `Bearer ${authData.access_token}`;
      if (dayjs.unix(Number(tokenData.exp)).diff(dayjs())
        < 1) {
        try {
          const res = await axios.post(`${process.env.REACT_APP_EXCEED_BACKEND_BASE_URL}${authData.refresh_url || "tenant/auths/token_refresh"}`, {
            refresh_token: authData.refresh_token,
          })
          if (res.status === 200) {
            saveAuthenticationToken(res.data.access_token, res.data.refresh_token, authData.user_type, "/web/login")
            request.headers.Authorization = `Bearer ${authData.access_token}`;
            return request
          }
          throw new Error("Authentication revalidation Refresh ");
        } catch (error) {
          console.log(error)
          redirectToLoginPage(authData.login_url ?? "/web/login");
        }
      }

    }

    return request;
  }
);

export default axiosInstance





