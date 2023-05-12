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
	const ChangePictureUser = withChangePicture(UserPicture, { size: '77px', picture: user?.picture! });
	const ChangePictureUser_MD = withChangePicture(UserPicture, { size: '150px', picture: user?.picture! });

	return (
		<div className="profile">
			<div className="d-flex px-md-3 pb-md-3 justify-content-center">
				<div className='flex-grow-1 d-none d-md-block'>
					<div className="d-flex justify-content-center">
						{
							isOwner ? <ChangePictureUser_MD /> : <UserPicture picture={user?.picture} username={user?.username} size='150px' />
						}
					</div>
				</div>
				<header className='profile-header gap-3 flex-grow-2'>
					<section className='d-flex gap-3 align-items-center w-100 px-3'>
						<div className='d-md-none'>
							{
								isOwner ? <ChangePictureUser size='77px' /> : <UserPicture picture={user?.picture} username={user?.username} size='77px' />
							}
						</div>
						<div className="d-flex flex-column flex-md-row gap-3 flex-grow-1 align-items-md-center">
							<p className='fs-5 m-0'>{user?.username}</p>
							<button className='border-0 py-2 rounded-3 fw-semibold'>Editar perfil</button>
						</div>
					</section>
					<section className='lh-sm px-3 order-md-1'>
						<p className='fw-semibold m-0'>{user?.fullname}</p>
						<p className=''>
							🇵🇪 Web developer <br />
							Si no puedes soportar este lugar llévate a ti mismo a lugares más altos 📈
						</p>
					</section>
					<section className='profile-stats px-md-3'>
						<p className='flex-grow-1 text-center text-md-start m-0'>
							<span className='fw-semibold d-block d-md-inline'>{user?.posts.length}</span> publicaciones
						</p>
						<p className='flex-grow-1 text-center text-md-start m-0'>
							<span className='fw-semibold d-block d-md-inline'>{user?.followers.length}</span> seguidores
						</p>
						<p className='flex-grow-1 text-center text-md-start m-0'>
							<span className='fw-semibold d-block d-md-inline'>{user?.follows.length}</span> seguidos
						</p>
					</section>
				</header>
			</div>
			<nav className='d-flex border-top'>
				<div className="flex-grow-1 text-center profile-navbar-item active">
					<i className="bi bi-grid-3x3"></i> <span className='d-none d-md-inline'>PUBLICACIONES</span>
				</div>
				<div className="flex-grow-1 text-center profile-navbar-item">
					<i className="bi bi-bookmark"></i> <span className='d-none d-md-inline'>GUARDADO</span>
				</div>
			</nav>
			<div className="profile-posts pt-2">
				{
					user?.posts.map(post => <div>
						<img src={post.content[0]} alt='Post' />
					</div>)
				}
			</div>
		</div>
	);
};

export default Profile;
