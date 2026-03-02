import logo from '../../assets/logo_footer.svg';
import './Layout.scss';

function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt="logo Kasa" className="footer__logo" />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;