import React from 'react';
import './Profile.scss';
import { UserPicture } from '../../Components/UserPicture';
import { UserLogged } from '../../interfaces';

export type ProfileProps = {
	user?: UserLogged;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
	return (
		user ? <div className="Profile">
			<header className="Profile-UserContainer">
				<div className="userpicture-container">
					<UserPicture picture={user.picture} username={user.username} />
				</div>
				<section className='usercontainer-user'>
					<p className='user-username'>{user.username}</p>
					<div className="user-stats">
						<p><span>0</span> publicaciones</p>
						<p><span>{user.followers.length}</span> seguidores</p>
						<p><span>{user.follows.length}</span> seguidos</p>
					</div>
					<p className='user-fullname'>{user.fullname}</p>
					<p className='user-description'>🇵🇪 Web developer
						Si no puedes soportar este lugar llévate a ti mismo a lugares más altos 📈</p>
				</section>
			</header>
		</div> : <></>
	);
};

export default Profile;
