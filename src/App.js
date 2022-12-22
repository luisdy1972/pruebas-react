import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Card from "./componentes/Card";
import Contador from "./componentes/Contador";

function App() {
  let [display, EnviarDisplay] = useState(0);

  function EventoSuma() {
    return EnviarDisplay(display + 1);
  }
  function EventoRestart() {
    return EnviarDisplay(0);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Feed">
        <Card
          nombre="Luis Ayala"
          cargo="Auxiliar de sistema"
          presentacion='"Los técnicos laboral como Auxiliares de Sistemas Informáticos operan equipos de cómputo, monitorean la operación de sistemas de computación y redes, coordinan su uso y producen reportes de operación."'
          link="https://jw.org"
        ></Card>
        <div className="contenedor-contador">
          <Contador
            display={display}
            eventoSuma={EventoSuma}
            eventoRestart={EventoRestart}
          ></Contador>
        </div>
      </div>
    </div>
  );
}
export default App;
