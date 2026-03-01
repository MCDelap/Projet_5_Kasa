import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_header.svg';
import './Layout.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa"/>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;