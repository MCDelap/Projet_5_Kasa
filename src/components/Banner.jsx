const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="Paysage naturel" className="banner__image" />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}

export default Banner