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
				<Card>
					<div className="card-contenido">
						<img
							src={require("./img/uc.png")}
							className="imagen-card"
							alt="Logo de la empresa"
						></img>
						<h5 className="card-title">{"Luis Ayala"}</h5>
						<h6 className="card-cargo">{"Auxiliar de Sistema"}</h6>
						<p className="card-text">
							{
								"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem possimus tempore natus reprehenderit iusto consequatur accusantium neque enim doloribus maiores accusamus qui nobis corporis, nulla vero cumque at quis maxime?"
							}
						</p>
						<div className="enlace-website">
							<a href={"/"}>Website</a>
						</div>
					</div>
				</Card>
				<Card>
					<Contador
						displayContador={displayContador}
						eventoSuma={EventoSuma}
						eventoRestart={EventoRestart}
					/>
				</Card>
				<Card>
					<Calculadora />
				</Card>
			</div>
		</div>
	)
}
export default App
