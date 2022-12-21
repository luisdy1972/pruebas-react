import React from "react"
import "../hojas-de-estilos/Card.css"
import "../hojas-de-estilos/Contador.css"
function Contador() {
	return (
		<div className="card-body">
			<h2 className="card-title">Componente contador</h2>
			<div className="display-contador">0</div>
			<div className="keyboart-contador">
				<button className="boton-contador" onClick={`suma`}>
					Clik
				</button>
				<button className="boton-contador" onClick={"restar"}>
					Reinicar
				</button>
			</div>
		</div>
	)
}
export default Contador
