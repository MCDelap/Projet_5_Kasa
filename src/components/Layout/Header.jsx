import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_header.svg';
import './Layout.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa" className="header__logo"/>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-link">Accueil</NavLink>
        <NavLink to="/about" className="header__nav-link">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;