import Home from './screens/Home'
import {Switch, Route} from 'react-router-dom'
import AboutUs from './screens/AboutUs';
import AdopcionGatos from './screens/AdopcionGatos';
import NotFound from './screens/NotFound';
import Details from './screens/Details';

import Navbar from './components/Navbar';

function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Navbar />
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/adopcion' component={AdopcionGatos} />
        <Route path='/detalle/:id' component={Details} />
        <Route path='' component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
