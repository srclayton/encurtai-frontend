import api from "../lib/api";
import TokenServices from "./TokenServices";

export default class UrlServices {
  static async shortenUrl(url: string): Promise<string | null> {
    try {
      const response = await api.post("/url", {
        originalUrl: url,
      });
      return response.data;
    } catch (e) {
      const expiredTokenRegex =
        /The token has expired at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      // eslint-disable-next-line
      // @ts-ignore
      if (expiredTokenRegex.test(e.response.data.message)) {
        const refreshResponse = await TokenServices.refreshToken();
        if (refreshResponse) {
          return UrlServices.shortenUrl(url);
        }
      }
      return null;
    }
  }
}
