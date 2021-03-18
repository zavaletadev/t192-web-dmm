import React from 'react';
import { NavLink } from 'react-router-dom';

const Inicio = (props) => {
	return (
		<div className='container'>
			<div
				className='d-flex justify-content-center'
				style={{ marginTop: '7%' }}
			>
				<div className='col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3'>
					<div className='card'>
						<img
							src='images/logo.png'
							className='card-img-top m-auto py-5'
							alt='Inicio'
							style={{ maxWidth: '250px' }}
						/>

						<div className='card-body'>
							<h3 className='text-center card-title mb-5'>
								Bienvenido Appelis
							</h3>

							<NavLink
								to='/login'
								className='btn btn-lg btn-primary d-block w-100 mb-3'
							>
								<i className='fa fa-user' />{' '}
								Login
							</NavLink>

							<NavLink
								to='/registro'
								className='btn btn-lg btn-secondary d-block w-100 mb-3'
							>
								<i className='fa fa-user-plus' />{' '}
								Registro
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inicio;
