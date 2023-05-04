import React from 'react';
import './Profile.scss';
import { UserPicture } from '../../Components';
import { UserLogged } from '../../interfaces';
import { ButtonEditProfile, ButtonFollow } from '../../Components/Buttons'
import { withChangePicture } from '../../HOC_Components/WithChangePicture/WithChangePicture';
import { ProfileNavbar } from '../../Components/ProfileNavbar';
import { PostsPreview } from '../../Components/PostsPreview';


export type ProfileProps = {
	user?: UserLogged;
	isOwner: boolean;
}

const Profile: React.FC<ProfileProps> = ({ user, isOwner }) => {
	const ChangePictureUser_MD = withChangePicture(UserPicture, { size: 'md', picture: user?.picture! });

	return (
		user ?
			<div className="Profile">
				<header className="Profile-header">
					<div className="userpicture-container-md">
						{
							isOwner ? <ChangePictureUser_MD picture={user.picture} username={user.username} size='md' /> : <UserPicture picture={user.picture} username={user.username} size='md' />
						}
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
								<p><span>{user.posts.length}</span> publicaciones</p>
								<p><span>{user.followers.length}</span> seguidores</p>
								<p><span>{user.follows.length}</span> seguidos</p>
							</div>
						</section>
					</section>
				</header>
				<div className="Profile-content">
					<ProfileNavbar />
					{
						user.posts.length > 0 ? <PostsPreview posts={user.posts} /> : <div className='my-4'>
							<i className="bi bi-camera fs-1"></i>
							<p className='fw-bold text-white fs-2'>Comparte fotos</p>
							<p className='text-white'>Cuando compartas fots, aparecerán en tu perfil</p>
						</div>
					}
				</div>
			</div> : <></>
	);
};

export default Profile;
