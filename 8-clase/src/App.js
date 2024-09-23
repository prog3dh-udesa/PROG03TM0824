import Home from './screens/Home'
import {Switch, Route} from 'react-router-dom'
import AboutUs from './screens/AboutUs';
import Personajes from './screens/Personajes';
import UnPersonaje from './screens/UnPersonaje';
import NotFound from './screens/NotFound';
import Favoritos from './screens/Favoritos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Results from './screens/Results';
function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Navbar />
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/personajes' exact={true} component={Personajes} />
        <Route path='/results' exact={true} component={Results} />
        <Route path='/personajes/id/:id' component={UnPersonaje} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
