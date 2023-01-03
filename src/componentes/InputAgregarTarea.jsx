import React from "react"
function InputAgregarTarea() {
	return (
		<form className="contenedorForm">
			<input
				className="agregarTarea"
				type="text"
				placeholder="Agrega una Tarea"
			/>
			<input className="botonAgregarTareas" type="button" value="+" />
		</form>
	)
}

export default InputAgregarTarea
