const Card = ({ title, cover }) => {
  return (
    <article className="card">
      <img src={cover} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </article>
  );
};

export default Card;