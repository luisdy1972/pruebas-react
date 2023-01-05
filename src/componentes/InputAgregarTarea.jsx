import React from "react"
function InputAgregarTarea(props) {
	return (
		<form className="contenedorForm">
			<input
				className="agregarTarea"
				type="text"
				placeholder="Agrega una Tarea"
			/>
			<button className="botonAgregarTareas" type="button">
				Ok
			</button>
		</form>
	)
}

export default InputAgregarTarea
