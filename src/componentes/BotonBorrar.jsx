import React from "react"
function BotonBorrar({ eventoClicLimpiar }) {
	return (
		<button onClick={() => eventoClicLimpiar()} className="boton-borrar">
			Limpiar
		</button>
	)
}
export default BotonBorrar
