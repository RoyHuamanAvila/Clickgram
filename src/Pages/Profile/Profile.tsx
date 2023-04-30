import React from 'react';
import './Profile.scss';
import { UserPicture } from '../../Components/UserPicture';
import { UserLogged } from '../../interfaces';
import ButtonFollowContainer from '../../Components/Buttons/ButtonFollow/ButtonFollowContainer';

export type ProfileProps = {
	user?: UserLogged;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
	return (
		user ?
			<div className="Profile">
				<header className="Profile-header">
					<div className="userpicture-container-md">
						<UserPicture picture={user.picture} username={user.username} />
					</div>
					<section className='Profile-section'>
						<div className="Profile-UserContainer">
							<div className="userpicture-container-sm">
								<UserPicture picture={user.picture} username={user.username} />
							</div>
							<div className='d-flex flex-column align-items-start flex-md-row gap-md-3'>
								<p className='user-username'>{user.username}</p>
								<ButtonFollowContainer idUser={user._id} username={user.username} />
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
