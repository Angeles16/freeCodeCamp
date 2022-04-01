import React from "react";
import '../Styles/Testimonio.css'

function Testimonios({imagen, nombre, from, cargo, empresa, texto}) {

	console.log({imagen, nombre, from, cargo, empresa, texto})
	

	return (
		<div className="contenido-testimonio">
			
			<div className="contenedor-imagen">
			<img
				className="imagen-testimonio"
				src="../images/Emma.png"
				alt="Foto Emma.png" />
			</div>
			<div className="contenedor-texto-testimonio">
				<div className="nombre-testimonio">{nombre} in {from}</div>
				<div className="cargo-testimonio">{cargo} at {empresa}</div>
				<div className="texto-testimonio">"{texto}"</div>
			</div>
		</div>
	)
}

export default Testimonios;