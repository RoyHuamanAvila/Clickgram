import React from 'react';
import './Profile.scss';
import { UserPicture } from '../../Components/UserPicture';

export type ProfileProps = {
}

const Profile: React.FC<ProfileProps> = () => {
	return (
		<div className="Profile">
			<header className="Profile-UserContainer">
				<div className="userpicture-container">
					<UserPicture picture='' username='royandresdev' />
				</div>
				<section className='usercontainer-user'>
					<p className='user-username'>royandresdev</p>
					<div className="user-stats">
						<p><span>0</span> publicaciones</p>
						<p><span>125</span> seguidores</p>
						<p><span>445</span> seguidos</p>
					</div>
					<p className='user-fullname'>Roy Huaman Avila</p>
					<p className='user-description'>🇵🇪 Web developer
						Si no puedes soportar este lugar llévate a ti mismo a lugares más altos 📈</p>
				</section>
			</header>
		</div>
	);
};

export default Profile;
