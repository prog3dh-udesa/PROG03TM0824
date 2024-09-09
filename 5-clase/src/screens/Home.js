import React from "react";
import Saludar from '../components/Saludar'
import Navbar from "../components/Navbar";
import Fichas from "../components/Fichas";
import Categorias from "../components/Categorias";
import Footer from '../components/Footer'
import miJson from '../rickandmorty'
import Contador from "../components/Contador";

function Home(){
    console.log('Este es mi jSon', miJson)
    return(
        <React.Fragment>
            <Contador valor={0} />
            <h1>My App in React</h1>
            <main>
                <Fichas />
                <h2>Categories in database</h2>
                <Categorias />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Home