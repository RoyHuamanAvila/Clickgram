import React from 'react';
import './ButtonEditProfile.scss';

export type ButtonEditProfileProps = {
}

const ButtonEditProfile: React.FC<ButtonEditProfileProps> = () => {
	return <button className='ButtonEditProfile'>Editar Perfil</button>;
};

export default ButtonEditProfile;
