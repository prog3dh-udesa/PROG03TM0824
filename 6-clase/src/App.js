import Home from './screens/Home'
import {Switch, Route} from 'react-router-dom'
import AboutUs from './screens/AboutUs';
import Personajes from './screens/Personajes';
import UnPersonaje from './screens/UnPersonaje';
import NotFound from './screens/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Navbar />
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/personajes' exact={true} component={Personajes} />
        <Route path='/personajes/id/:id' component={UnPersonaje} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
