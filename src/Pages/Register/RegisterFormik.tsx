import React from 'react';
import './Register.scss';
import { BrandRAD } from '../../Components/BrandRAD';
import { Link } from 'react-router-dom';
import { RegisterAuthDto } from '../../interfaces/dto';
import { FormikForm } from '../../interfaces/FormikCustomTypes';

const RegisterFormik: React.FC<FormikForm<RegisterAuthDto>> = ({ formik }) => {
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
			<div className="register">
				<form className='register-form' onSubmit={formik.handleSubmit}>
					<img className='register-form-logo' src="Logo.svg" alt="Logo" />
					<p className='register-form-message'>Regístrate para ver fotos y videos de tus amigos.</p>
					<div className="register-form-inputs">
						<input
							type="email"
							name='email'
							placeholder='Correo electrónico'
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						<input
							type="text"
							name='fullname'
							placeholder='Nombre completo'
							onChange={formik.handleChange}
							value={formik.values.fullname}
						/>
						<input
							type="text"
							name='username'
							placeholder='Nombre de usuario'
							onChange={formik.handleChange}
							value={formik.values.username}
						/>
						<input
							type="password"
							name='password'
							placeholder='Contraseña'
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</div>
					<button type='submit' className='btn btn-secondary text-primary'>Registrarse</button>
				</form>
				<div className="redirect">
					<p className='m-0'>¿Tienes una cuenta? <Link to='/login' className='text-decoration-none'>Inicia sesión</Link></p>
				</div>
			</div>
		</div>
	);
};

export default RegisterFormik;
