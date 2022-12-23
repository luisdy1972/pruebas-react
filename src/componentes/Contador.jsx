import React from "react"
import "../hojas-de-estilos/Contador.css"
import BotonContador from "./BotonContador"
function Contador(props) {
	return (
		<div>
			<h2 className="card-title">Contador de clicks</h2>
			<div className="display-contador">{props.displayContador}</div>
			<div className="keyboart-contador">
				<BotonContador
					texto="Sumar"
					botonSuma={true}
					evento={props.eventoSuma}
				></BotonContador>
				<BotonContador
					texto="Restart"
					botonSuma={false}
					evento={props.eventoRestart}
				></BotonContador>
			</div>
		</div>
	)
}
export default Contador
