import React from 'react';

function App() {
	return (
		/**
		 * En ReactJS no utilizamos class para referirnos a una clase
		 * de diseño css, en su lugar utilizamos
		 * className
		 */
		<div className='container mt-5'>
			{/**
			 * Flex peemite indicar que el contenido debe
			 * acomodarse al numero de elelemntos agregados
			 */}
			<div className='row'>
				<div className='col-lg-4 col-sm-12 mb-5'>
					<Inicio />
				</div>

				<div className='col-lg-4 col-sm-12 mb-5'>
					<Login />
				</div>

				<div className='col-lg-4 col-sm-12 mb-5'>
					<Registro />
				</div>
			</div>
		</div>
	);
}

export default App;
