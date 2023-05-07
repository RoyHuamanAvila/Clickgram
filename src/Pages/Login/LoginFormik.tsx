import React from 'react';
import './Login.scss';
import { BrandRAD } from '../../Components/BrandRAD';
import { Link } from 'react-router-dom'
import { LoginAuthDto } from '../../interfaces/dto';
import { FormikForm } from '../../interfaces/FormikCustomTypes';

const LoginFormik: React.FC<FormikForm<LoginAuthDto>> = ({ formik }) => {
	return (
		<div className='min-vh-100 min-vw-100 d-flex align-items-center justify-content-center'>
			<div className='d-flex align-items-center gap-4'>
				<img src="/Phone.png" alt="Phone clickgram" className='phone-img' />
				<div className='form'>
					<form className='login-form' onSubmit={formik.handleSubmit}>
						<img className='login-form-logo' src="/Logo.svg" alt="Logo" />
						<div className="login-form-inputs">
							<input
								type="email"
								placeholder='Correo electrónico'
								title='Email'
								name='email'
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							<input
								type="password"
								placeholder='Contraseña'
								title='Password'
								name='password'
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
						</div>
						<button type='submit' className='login-form-button'>Iniciar sesión</button>
						<a href="" className='text-center text-decoration-none'>¿Olvidaste tu contraseña?</a>
					</form>
					<div className="redirect">
						<p className='m-0'>¿No tienes cuenta? <Link to='/register' className='text-decoration-none'>Registrate</Link></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginFormik;
