import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import TokenServices from "./services/TokenServices";

function App() {
  useEffect(() => {
    async function checkToken() {
      const hasToken = await TokenServices.hasTokenCookies();
      if (!hasToken) {
        await TokenServices.login();
      }
    }
    checkToken();
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
