import "./Header.css";
function Header() {
  return (
    <>
      <nav>
        <div className="nav__logo">
          <a href="#">
            <img src="/logo-trans.svg" alt="Company logo." />
          </a>
        </div>
        <div className="nav__itens">
          <a href="#"> Home </a>
          <a href="#"> About </a>
          <a href="#"> Services </a>
          <a href="#"> Contact </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
