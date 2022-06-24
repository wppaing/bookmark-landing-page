import { Container } from "./HeaderElements";
import Logo from "./../../images/logo-bookmark.svg";
import NavToggler from "./../../images/icon-hamburger.svg";

export default function Header() {
  const handleClick = () => {
    const nav = document.querySelector(".navigation");
    nav.classList.toggle("show");
  };

  return (
    <Container>
      <div>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav>
        <ul className="navigation">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#" className="btn-login">
              LOGIN
            </a>
          </li>
        </ul>

        <button id="nav-toggler" onClick={handleClick}>
          <img src={NavToggler} alt="navigation" />
        </button>
      </nav>
    </Container>
  );
}
