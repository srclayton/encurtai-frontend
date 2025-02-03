import { useState } from "react";
import "./Hero.css";
import HeroForm from "./HeroForm";
import Modal from "../Modal/Modal";
function Hero() {
  const [loading, setLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const copyText = () => {
    const input = document.getElementById("urlOutput");
    if (!input) return;
    // eslint-disable-next-line
    // @ts-ignore
    input.select();
    document.execCommand("copy");
    // eslint-disable-next-line
    // @ts-ignore
  };
  return (
    <>
      <section id="hero__content">
        <div className="container u-full-width">
          <div className="row">
            <div className="twelve columns">
              <h1>
                <span className="hero__title">Encurtaí</span>
              </h1>
              <h6>
                <span className="hero__subtitle">
                  Reduzindo caminhos, expandindo possibilidades: Seu atalho para
                  a web.
                </span>
              </h6>
            </div>
          </div>
          <HeroForm
            loadingHandler={setLoading}
            shortenedUrlHandler={setShortenedUrl}
            modalIsOpenHandler={setModalIsOpen}
          />

          <Modal
            modalIsOpenHandler={setModalIsOpen}
            modalIsOpen={modalIsOpen}
            shortenedUrlHandler={setShortenedUrl}
          >
            {loading && (
              <>
                <h3>Carregando...</h3>
                <hr />
                <p>Carregando...</p>
              </>
            )}
            {shortenedUrl && (
              <>
                <h3 className="strong">Sucesso!</h3>
                <hr />
                <h5 className="strong">
                  Parabéns! Sua URL foi encurtada com sucesso:
                  <input
                    className="u-full-width input__url"
                    type="url"
                    id="urlOutput"
                    readOnly
                    onClick={copyText}
                    value={`${window.location.host}/${shortenedUrl}`}
                  />
                  <button
                    onClick={copyText}
                    className="u-full-width button-primary"
                  >
                    Copiar
                  </button>
                </h5>
              </>
            )}
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Hero;
