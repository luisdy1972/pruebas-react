import React from "react"
import "../hojas-de-estilos/Calculadora.css"
import BotonCalculadora from "./BotonCalculadora"
function Calculadora(props) {
	return (
		<div className="card-body">
			<h2 className="card-title">Calculadora</h2>
			<input className="display-calculadora"></input>
			<div className="teclado-callculadora">
				<div className="filla-calculadora">
					<BotonCalculadora>1</BotonCalculadora>
					<BotonCalculadora>2</BotonCalculadora>
					<BotonCalculadora>3</BotonCalculadora>
					<BotonCalculadora>-</BotonCalculadora>
				</div>
				<div className="filla-calculadora">
					<BotonCalculadora>4</BotonCalculadora>
					<BotonCalculadora>5</BotonCalculadora>
					<BotonCalculadora>6</BotonCalculadora>
					<BotonCalculadora>+</BotonCalculadora>
				</div>
				<div className="filla-calculadora">
					<BotonCalculadora>7</BotonCalculadora>
					<BotonCalculadora>8</BotonCalculadora>
					<BotonCalculadora>9</BotonCalculadora>
					<BotonCalculadora>*</BotonCalculadora>
				</div>
			</div>
		</div>
	)
}

export default Calculadora
