import React from "react"
import "../hojas-de-estilos/Card.css"
function Card({ children }) {
	return <div className="card-body">{children}</div>
}
export default Card
