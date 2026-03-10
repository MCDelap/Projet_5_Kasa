import { useState } from 'react';
import arrowAbout from '../../assets/dropdown_arrow.svg';

function Collapse({ title, content }) {
  // Un seul state pour savoir si c'est ouvert ou non
  const [isOpen, setIsOpen] = useState(false);

  const arrowClass = isOpen ? "arrow rotate" : "arrow";
  const contentClass = isOpen ? "collapse_content show" : "collapse_content hide";

  return (
    <div className="collapse_item">
      <div className="collapse_header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img src={arrowAbout} alt="Ouvrir/Fermer" className={arrowClass} />
      </div>
      
      <div className={contentClass}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;