import React from "react"
import { useState } from "react"
import "./App.css"
import Navbar from "./componentes/Navbar"
import Card from "./componentes/Card"
import Contador from "./componentes/Contador"
import Calculadora from "./componentes/Calculadora"

function App() {
	let [displayContador, EnviarDisplay] = useState(0)

	function EventoSuma() {
		return EnviarDisplay(displayContador + 1)
	}
	function EventoRestart() {
		return EnviarDisplay(0)
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
				<div>
					<Contador
						displayContador={displayContador}
						eventoSuma={EventoSuma}
						eventoRestart={EventoRestart}
					/>
				</div>
				<div>
					<Calculadora />
				</div>
			</div>
		</div>
	)
}
export default App
