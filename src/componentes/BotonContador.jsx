import React from "react"
function BotonContador({ texto, botonSuma, evento }) {
	return (
		<button
			className={botonSuma ? "boton-suma" : "boton-restart"}
			onClick={evento}
		>
			{texto}
		</button>
	)
}

export default BotonContador
