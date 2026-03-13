import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import './Home.scss'

import data from '../../data/logements.json'
import imageHome from '../../assets/home_banner.png'

function Home () {
  return (
  <section className="home">
    <Banner image={imageHome} title="Chez vous, partout et ailleurs" />
    <div className="home__cards-grid">
    {data.map(logement => (
      <Card 
        key={logement.id} 
        id={logement.id} 
        title={logement.title} 
        cover={logement.cover} 
      />
    ))}
    </div>
  </section>
)
}

export default Home
 