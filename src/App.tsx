import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
