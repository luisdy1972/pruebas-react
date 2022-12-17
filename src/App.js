import "./App.css"
import Card from "./componentes/Card"
import Navbar from "./componentes/Navbar"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Card
				nombre="Luis Ayala"
				cargo="Auxiliar de sistema"
				presentacion='"Los técnicos laborales como Auxiliares de Sistemas Informáticos operan equipos de cómputo, monitorean la operación de sistemas de computación y redes, coordinan su uso y producen reportes de operación."'
				link="https://jw.org"
			/>
			<Card
				nombre="Luis Ayala"
				cargo="Auxiliar de sistema"
				presentacion='"Los técnicos laborales como Auxiliares de Sistemas Informáticos operan equipos de cómputo, monitorean la operación de sistemas de computación y redes, coordinan su uso y producen reportes de operación."'
				link="https://jw.org"
			/>
		</div>
	)
}
export default App
