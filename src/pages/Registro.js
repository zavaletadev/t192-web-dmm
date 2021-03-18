import React from 'react';
import { NavLink } from 'react-router-dom';

const Registro = (props) => {
	return (
		<div className='container'>
			<div className='d-flex justify-content-center'>
				<div
					className='col-12 col-sm-8 col-md-6 col-lg-4'
					style={{ marginTop: '20%' }}
				>
					<div className='card'>
						<img
							src='images/signup.png'
							className='card-img-top m-auto py-5'
							alt='...'
							style={{
								maxWidth: '100px',
							}}
						/>
						<div className='card-body'>
							<h3 className='text-center card-title'>
								Registro
							</h3>
							<hr />
							<form className='row'>
								<div className='col-12'>
									<div className='input-group mb-3'>
										<span className='input-group-text'>
											<i className='fa fa-user' />
										</span>
										<input
											className='form-control'
											type='email'
										/>
									</div>
								</div>

								<div className='col-12'>
									<div className='input-group mb-3'>
										<span className='input-group-text'>
											<i className='fa fa-lock' />
										</span>
										<input
											className='form-control'
											type='password'
										/>
									</div>
								</div>

								<div className='d-flex justify-content-end'>
									<a
										className='btn btn-dark'
										href='#'
									>
										<i className='fas fa-check-circle' />
										&nbsp; Registrarse
									</a>
								</div>
							</form>
						</div>
						<div className='card-footer'>
							<NavLink to='/login'>
								¿Ya tienes una cuenta?,{' '}
								<strong>
									Inicia sesión
								</strong>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registro;
