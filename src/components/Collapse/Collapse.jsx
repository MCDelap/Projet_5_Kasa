import { useState } from "react";
import arrowAbout from "../../assets/dropdown_arrow.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  // Un seul state pour savoir si c'est ouvert ou non
  const [isOpen, setIsOpen] = useState(false);

  const arrowClass = `collapse__arrow ${isOpen ? "collapse__arrow--rotate" : ""}`;
  const contentClass = `collapse__content ${isOpen ? "collapse__content--show" : "collapse__content--hide"}`;

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <img src={arrowAbout} alt="Ouvrir/Fermer" className={arrowClass} />
      </div>

      <div className={contentClass}>
        <div className="collapse__text">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
