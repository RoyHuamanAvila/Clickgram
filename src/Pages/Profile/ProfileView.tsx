import React from 'react';
import './Profile.scss';
import { InputChangePicture, UserPicture } from '../../Components';
import { UserLogged } from '../../interfaces';
import { ButtonEditProfile, ButtonFollow } from '../../Components/Buttons'
import { withChangePicture } from '../../HOC_Components/WithChangePicture/WithChangePicture';


export type ProfileProps = {
	user?: UserLogged;
	isOwner: boolean;
}

const Profile: React.FC<ProfileProps> = ({ user, isOwner }) => {
	const ChangePictureUser_MD = withChangePicture(UserPicture, { size: 'md' });

	return (
		user ?
			<div className="Profile">
				<header className="Profile-header">
					<div className="userpicture-container-md">
						<ChangePictureUser_MD picture={user.picture} username={user.username} size='md' />
					</div>
					<section className='Profile-section'>
						<div className="Profile-UserContainer">
							<div className="userpicture-container-sm">
								<UserPicture picture={user.picture} username={user.username} size='sm' />
							</div>
							<div className='d-flex flex-column align-items-start flex-md-row gap-md-3'>
								<p className='user-username'>{user.username}</p>
								{
									isOwner ? <ButtonEditProfile /> : <ButtonFollow idUser={user._id} username={user.username} />
								}
							</div>
						</div>
						<section className='usercontainer-user'>
							<section className='user-identifiers'>
								<p className='user-fullname'>{user.fullname}</p>
								<p className='user-description'>🇵🇪 Web developer
									Si no puedes soportar este lugar llévate a ti mismo a lugares más altos 📈</p>
							</section>
							<div className="user-stats">
								<p><span>0</span> publicaciones</p>
								<p><span>{user.followers.length}</span> seguidores</p>
								<p><span>{user.follows.length}</span> seguidos</p>
							</div>
						</section>
					</section>
				</header>
				<div className="Profile-content">
				</div>
			</div> : <></>
	);
};

export default Profile;
