import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
	return (
		<div className='container'>
			<div className='d-flex justify-content-center'>
				<div
					className='col-12 col-sm-8 col-md-6 col-lg-4'
					style={{ marginTop: '20%' }}
				>
					<div className='card'>
						<img
							src='images/login.png'
							className='card-img-top m-auto py-5'
							alt='...'
							style={{
								maxWidth: '100px',
							}}
						/>
						<div className='card-body'>
							<h3 className='text-center card-title'>
								Iniciar sesión
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
									<NavLink
										className='btn btn-dark'
										to='admin/'
									>
										Acceder &nbsp;
										<i className='fas fa-sign-in-alt' />
									</NavLink>
								</div>
							</form>
						</div>
						<div className='card-footer'>
							<NavLink to='/registro'>
								¿No tienes una cuenta?,{' '}
								<strong>Rgístrate</strong>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
