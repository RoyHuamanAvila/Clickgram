import React from 'react';
import './Register.scss';
import { BrandRAD } from '../../Components/BrandRAD';

export type RegisterProps = {
}

const Register: React.FC<RegisterProps> = () => {
	return (
		<div className='register-page'>
			<div className='register'>
				<img className='register-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Logo Clickgram" />
				<p className='register-text'>Regístrate para ver fotos y videos de tus amigos.</p>
				<form className='register-form'>
					<input type="text" title='email' name='email' placeholder='Telefono, usuario o correo electronico' />
					<input type="text" title='fullname' name='fullname' placeholder='Nombre completo' />
					<input type="text" title='username' name='username' placeholder='Nombre de usuario' />
					<input type="text" title='password' name='password' placeholder='Contraseña' />
					<button className='register-btn-submit'>Registrarte</button>
				</form>
			</div>
			<div className='toLogin-container'>
				<p>¿Ya tienes cuenta?</p>
				<button className='btn-toRegister'>Inicia Sesion</button>
			</div>
			<BrandRAD />
		</div>
	);
};

export default Register;
