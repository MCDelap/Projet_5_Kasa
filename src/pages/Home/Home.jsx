import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../data/logements.json'
import imageHome from '../../assets/home_banner.png'
import './Home.scss'

const Home = () => {
  return (
    <section className="home-container">
    <Banner image={imageHome} title="Chez vous, partout et ailleurs" />
    <div className="cards-grid">
    {data.map(logement => (
      <Card 
        key={logement.id} 
        id={logement.id} 
        title={logement.title} 
        cover={logement.cover} 
        className="card"
      />
    ))}
  </div>
</section>
)
}

export default Home;
 