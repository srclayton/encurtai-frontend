import { Github, Linkedin } from "lucide-react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row ">
          <div className="six columns">
            <h1>
              <span className="logo">
                <img src="/logo-trans.svg" alt="company_logo" height={35} />
              </span>
              <span>Encurtaí</span>
            </h1>
          </div>
          <div className="six columns">
            <div className="row">
              <div className="twelve columns">
                <div className="flex">
                  <a
                    href="https://github.com/srclayton"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <Github color="white" />
                  </a>
                  <a
                    href="http://linkedin.com/in/srclayton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin color="white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="twelve columns">
            <p>
              <small>
                Feito com <span className="heart">❤</span> por{" "}
                {"Clayton Rocha"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
