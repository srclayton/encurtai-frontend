import { useLocation } from "react-router-dom";
import api from "../../lib/api";
import TokenServices from "../../services/TokenServices";

function NotFound() {
  const { pathname } = useLocation();
  if (!pathname) return null;
  const fetchData: () => void = async () => {
    try {
      const response = await api.get(`/url/get${pathname}`);
      window.location.replace(response.data.originalUrl);
    } catch (e) {
      const expiredTokenRegex =
        /The token has expired at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      // eslint-disable-next-line
    // @ts-ignore
      if (expiredTokenRegex.test(e.response.data.message)) {
        const refreshResponse = await TokenServices.refreshToken();
        if (refreshResponse) {
          return fetchData();
        }
      }
      return window.location.replace("/");
    }
  };
  fetchData();
  return null;
}

export default NotFound;
