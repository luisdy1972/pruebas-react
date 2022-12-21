import React from "react"
import { useState } from "react"
import "./App.css"
import Navbar from "./componentes/Navbar"
import Card from "./componentes/Card"
import Contador from "./componentes/Contador"

function App() {
	const [display, EnviarDisplay] = useState(0)

	function Evento() {
		return EnviarDisplay(display + 1)
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
					<Contador display={display} evento={Evento}></Contador>
				</div>
			</div>
		</div>
	)
}
export default App
