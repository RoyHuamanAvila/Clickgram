import './ButtonEditProfile.scss';
import { EditProfileModal } from '../../Modals/EditProfileModal';

const ButtonEditProfile = () => {
	return (
		<div className="editprofile-container">
			<button className='ButtonEditProfile' data-bs-toggle="modal" data-bs-target="#editProfileModal">Editar Perfil</button>
			<EditProfileModal />
		</div>
	);
};

export default ButtonEditProfile;
