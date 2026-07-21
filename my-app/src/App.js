import React from "react";
import "./App.css";

// Importe todos os testes aqui no topo
import TesteCarros from "./testes/TesteCarros";
import TesteContador from "./testes/TesteContador";
import CarrosRefac from "./testes/CarrosRefac";
import GerarElementos from "./testes/CarrosRefac";
import Usuario from "./testes/Formulario-Parte1";
import Usuario2 from "./testes/Formulario-Parte2";
import Usuario3 from "./testes/Formulario-Parte3";
import Usuario4 from "./testes/Formulario-Parte4";
import GerarElementos2 from "./testes/GerarElementos";

export default function App() {
  const minhaLista = ["Strada", "HB20", "Mobi", "Palio"];

  return (
    <div className="App">
      <h1>Laboratório de Testes</h1>

      {/* <TesteCarros /> */}
      {/* <TesteContador /> */}
      {/* <GerarElementos arrayElement={minhaLista} /> */}
      {/* <Usuario /> */}
      {/* <Usuario2 /> */}
      {/* <Usuario3 /> */}
      {/* <Usuario4 /> */}
      <GerarElementos2 />
    </div>
  );
}
