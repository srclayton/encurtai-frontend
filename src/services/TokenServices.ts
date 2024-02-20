import api from "../lib/api";

export default class TokenServices {
  static async hasTokenCookies() {
    try {
      const response = await api.get("/user/hasCookie");
      return response.status === 200;
    } catch (error) {
      const expiredTokenRegex =
        /The token has expired at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      // eslint-disable-next-line
        // @ts-ignore
      if (expiredTokenRegex.test(error.response.data.message)) {
        return true; // O token expirou
      }
      return false; // Outro tipo de erro
    }
  }

  static async login() {
    const username = import.meta.env.VITE_API_USERNAME as string;
    const password = import.meta.env.VITE_API_PASSWORD as string;
    const response = await api.post("/user/login", { username, password });
    if (response.status === 200) return true;
    return false;
  }

  static async refreshToken() {
    try {
      const response = await api.post("/user/refresh");
      if (response.status === 200) return true;
    } catch (error) {
      // eslint-disable-next-line
      // @ts-ignore
      document.cookie =
        "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
    }
    return false;
  }
}
