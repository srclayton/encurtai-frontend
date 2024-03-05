import "./Header.css";
function Header() {
  return (
    <nav>
      <div className="nav__logo">
        <a href="#">
          <img src="/logo-trans.svg" alt="Company logo." />
        </a>
      </div>
      <div className="nav__itens">
        <a href="/"> Inicio </a>
        <a href="/sobre"> Sobre </a>
        <a href="/contato"> Contato </a>
      </div>
    </nav>
  );
}

export default Header;
