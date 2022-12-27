import React from "react"
import PantallaCalculadora from "./PantallaCalculadora"
import BotonCalculadora from "./BotonCalculadora"
import BotonBorrar from "./BotonBorrar"
import { useState } from "react"
import { evaluate } from "mathjs"
import "../hojas-de-estilos/Calculadora.css"
function Calculadora() {
	const [input, enviarInput] = useState("")
	const agregarInput = (valor) => {
		enviarInput(input + valor)
	}
	const BorrarInput = () => {
		enviarInput("")
	}
	const calcularResultado = () => {
		if (input || input === "Infinity") {
			enviarInput(evaluate(input))
			console.log(enviarInput)
		} else {
			enviarInput("")
			console.log(enviarInput)
		}
	}

	return (
		<div>
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
					<BotonCalculadora eventoClic={calcularResultado}>
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
				<div className="filla-calculadora">
					<BotonCalculadora eventoClic={agregarInput}>
						{"("}
					</BotonCalculadora>
					<BotonCalculadora eventoClic={agregarInput}>
						{")"}
					</BotonCalculadora>
					<BotonBorrar eventoClicLimpiar={BorrarInput} />
				</div>
			</div>
		</div>
	)
}

export default Calculadora
