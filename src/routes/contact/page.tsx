import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <h1>Contato</h1>
      <p>Entre em contato conosco através das seguintes informações:</p>
      <ul className="contact-list">
        <li>
          <Mail name="mail" size="24" /> clayton@srocha.io
        </li>
        <li>
          <Linkedin name="linkedin" size="24" />{" "}
          <a
            href="https://www.linkedin.com/in/srclayton"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <Github name="github" size="24" />{" "}
          <a
            href="https://github.com/srclayton"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
