import React from 'react';
import './Login.scss';
import { BrandRAD } from '../../Components/BrandRAD';

export type LoginProps = {
}

const Login: React.FC<LoginProps> = () => {
	return (
		<div className='login-page'>
			<div className='login'>
				<img className='login-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Logo Clickgram" />
				<form className='login-form'>
					<input type="text" title='email' name='email' placeholder='Telefono, usuario o correo electronico' />
					<input type="text" title='password' name='password' placeholder='Contraseña' />
					<button className='login-btn-submit'>Iniciar Sesion</button>
				</form>
				<a className='login-rememberPassword'>¿Olvidaste tu contraseña?</a>
			</div>
			<div className='toRegister-container'>
				<p>¿No tienes cuenta?</p>
				<button className='btn-toRegister'>Registrate</button>
			</div>
			<BrandRAD />
		</div>
	);
};

export default Login;
