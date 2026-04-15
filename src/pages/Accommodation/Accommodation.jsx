import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";

import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./Accommodation.scss";

import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

function Accommodation() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="accommodation">
      <Slideshow pictures={logement.pictures} />

      <section className="accommodation__header">
        <div>
          <h1 className="accommodation__title">{logement.title}</h1>
          <p className="accommodation__location">{logement.location}</p>
          <div className="accommodation__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="accommodation__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="accommodation__host-and-rating">
          <div className="accommodation__host">
            <p className="accommodation__host-name">{logement.host.name}</p>
            <img
              className="accommodation__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={
                  star <= parseInt(logement.rating) ? starActive : starInactive
                }
                alt={
                  star <= parseInt(logement.rating)
                    ? "Étoile active"
                    : "Étoile inactive"
                }
                className="accommodation__star"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="accommodation__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </section>
    </main>
  );
}

export default Accommodation;
