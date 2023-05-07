import React from 'react';
import './ButtonEditProfile.scss';
import { EditProfileModal } from '../../EditProfileModal';

export type ButtonEditProfileProps = {
}

const ButtonEditProfile: React.FC<ButtonEditProfileProps> = () => {
	return (
		<div className="editprofile-container">
			<button className='ButtonEditProfile' data-bs-toggle="modal" data-bs-target="#editProfileModal">Editar Perfil</button>
			<EditProfileModal id='editProfile' />
		</div>
	);
};

export default ButtonEditProfile;
