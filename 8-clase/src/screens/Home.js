import React from "react";
import Saludar from '../components/Saludar'
import Navbar from "../components/Navbar";
import Fichas from "../components/Fichas";
import Categorias from "../components/Categorias";
import Footer from '../components/Footer'
import miJson from '../rickandmorty'
import Contador from "../components/Contador";
import Peliculas from "../components/Peliculas";
import Buscador from "../components/Buscador";

function Home(props){
    console.log('Este es mi jSon', miJson)
    return(
        <React.Fragment>
            <Buscador history={props.history} />
            <Contador valor={0} />
            <h1>My App in React</h1>
            <main>
                <Fichas />
                <h2>Categories in database</h2>
                <Categorias />
            </main>
            <Peliculas />
            <Footer />
        </React.Fragment>
    )
}

export default Home