import Row from './components/Row'
import './App.css'
import requests from './components/requests'
import Footer from './components/footer/Footer';
import Banner from './components/Banner'
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
    <Banner />
    <Row tittle="Netflix Original" fetchUrl={requests.NetflixOriginals} isLargeRow/>
    <Row tittle="Trending Now" fetchUrl={requests.Trending}/>

    <Row tittle="Top Rated" fetchUrl={requests.TopRatedMovies}/>
    <Row tittle="Action Movies " fetchUrl={requests.ActionMovies}/>
    <Row tittle="Comedy Movies" fetchUrl={requests.ComedyMovies}/>
    <Row tittle="Horror Movies" fetchUrl={requests.HorrorMovies}/>
    <Row tittle="Romance Movies" fetchUrl={requests.RomanceMovies}/>
    <Row tittle="Documentry movies" fetchUrl={requests.Documentaries}/>
    <Footer />
    </div>
  );
}

export default App;
