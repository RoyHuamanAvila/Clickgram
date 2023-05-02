import React from 'react';
import './Register.scss';
import { BrandRAD } from '../../Components/BrandRAD';
import { Link } from 'react-router-dom';
import { RegisterAuthDto } from '../../interfaces/dto';
import { FormikForm } from '../../interfaces/FormikCustomTypes';

const RegisterFormik: React.FC<FormikForm<RegisterAuthDto>> = ({ formik }) => {
	return (
		<div className='register-page'>
			<div className='register'>
				<img className='register-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Logo Clickgram" />
				<p className='register-text'>Regístrate para ver fotos y videos de tus amigos.</p>
				<form className='register-form' onSubmit={formik.handleSubmit}>
					<input
						type="email"
						title='email'
						name='email'
						id='email'
						placeholder='Correo electronico'
						onChange={formik.handleChange}
						value={formik.values.email}
						required
					/>
					<p className='error-message'>{formik.errors.email}</p>
					<input
						type="text"
						title='fullname'
						name='fullname'
						id='fullname'
						placeholder='Nombre completo'
						onChange={formik.handleChange}
						value={formik.values.fullname}
						required
					/>
					<p className='error-message'>{formik.errors.fullname}</p>
					<input
						type="text"
						title='username'
						name='username'
						id='username'
						placeholder='Nombre de usuario'
						onChange={formik.handleChange}
						value={formik.values.username}
						required
					/>
					<p className='error-message'>{formik.errors.username}</p>
					<input
						type="password"
						title='password'
						name='password'
						id='password'
						placeholder='Contraseña'
						onChange={formik.handleChange}
						value={formik.values.password}
						required
					/>
					<p className='error-message'>{formik.errors.password}</p>
					<button type='submit' className='register-btn-submit'>Registrarte</button>
				</form>
			</div>
			<div className='toLogin-container'>
				<p>¿Ya tienes cuenta?</p>
				<Link to='/login' className='link-toLogin'>Inicia Sesion</Link>
			</div>
			<BrandRAD />
		</div>
	);
};

export default RegisterFormik;
