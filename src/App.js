import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top-left, #007dr5 0%, #007dr5 40%, #007dr5, #0f574e 100%);
  background-color: transparent;
  background-size: 300px;
  font-family: Arial, Helvetica, sans serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;




function App() {


  // State de frases

  const [ frase, guardarFrase ] = useState({});


  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();

    guardarFrase(frase[0]);    

  }

  // Cargar una frase // Cuando carga el componente -> useEffects. Cuando carga la página, llama una frase.

  useEffect(() => {
    consultarApi()
  }, [])


  return (

    <Contenedor>

        <Frase 
          frase = {frase}
        />

        <Boton
          onClick= { () => consultarApi() }
        >
          Obtener Frase
        </Boton>

    </Contenedor>
  );
}

export default App;
