import React from "react"
import "../hojas-de-estilos/Navbar.css"

function Navbar() {
	return (
		<nav>
			<div className="nav-contenedor">
				<span className="navbar-brand">
					<h1>Uroclinica de Cordoba</h1>
				</span>
				<ul className="menu-servicios">
					<li className="item-lista">Inicio</li>
					<li className="item-lista">SIAU</li>
					<li className="item-lista">Servicios</li>
					<li className="item-lista">Imagenologia</li>
					<li className="item-lista">Sobre Nosotros</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
