import { Link } from 'react-router-dom'
import imageError from '../../assets/error_404.png'
import './Error.scss'

function Error() {
  return (
    <main className="error">
      <img src={imageError} alt="Erreur 404" className="error__image" />

      <p className="error__message">Oups ! La page que vous demandez n'existe pas.</p>
      
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error
