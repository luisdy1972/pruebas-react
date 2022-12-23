import React from "react"
import "../hojas-de-estilos/Calculadora.css"
import PantallaCalculadora from "./PantallaCalculadora"
import BotonCalculadora from "./BotonCalculadora"
import BotonBorrar from "./BotonBorrar"
import { useState } from "react"
function Calculadora() {
	const [input, enviarInput] = useState("")
	const agregarInput = (valor) => {
		enviarInput(input + valor)
	}
	const BorrarInput = () => {
		enviarInput("")
	}

	return (
		<div className="card-body">
			<h2 className="card-title">Calculadora</h2>
			<PantallaCalculadora input={input} />
			<div className="teclado-callculadora">
				<div className="filla-calculadora">
					<BotonCalculadora eventoClic={agregarInput}>
						1
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						2
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						3
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						-
					</BotonCalculadora>
				</div>
				<div className="filla-calculadora">
					<BotonCalculadora eventoClic={agregarInput}>
						4
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						5
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						6
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						+
					</BotonCalculadora>
				</div>
				<div className="filla-calculadora">
					<BotonCalculadora eventoClic={agregarInput}>
						7
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						8
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						9
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						*
					</BotonCalculadora>
				</div>
				<div className="filla-calculadora">
					<BotonCalculadora eventoClic={agregarInput}>
						=
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						0
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						.
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						/
					</BotonCalculadora>
				</div>
				<BotonBorrar eventoClicLimpiar={BorrarInput} />
			</div>
		</div>
	)
}

export default Calculadora
