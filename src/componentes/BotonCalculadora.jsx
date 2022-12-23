import React from "react"
import "../hojas-de-estilos/BotonCalculadora.css"
function BotonCalculadora({ children, eventoClic }) {
	let claseDelBoton

	if (
		children === "(" ||
		children === ")" ||
		children === "+" ||
		children === "-" ||
		children === "*" ||
		children === "/"
	) {
		claseDelBoton = "boton-operador"
	} else claseDelBoton = "boton-calculadora"

	return (
		<button
			className={`${claseDelBoton}`}
			onClick={() => eventoClic(children)}
		>
			{children}
		</button>
	)
}

export default BotonCalculadora
