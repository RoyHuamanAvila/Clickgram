import React from 'react';
import './ProfileNavbar.scss';

export type ProfileNavbarProps = {
}

const ProfileNavbar: React.FC<ProfileNavbarProps> = () => {
	return (
		<div className='ProfileNavbar'>
			<p className='fw-bold'>
				<i className="bi bi-grid-3x3 me-1"></i> PUBLICACIONES
			</p>
		</div>
	);
};

export default ProfileNavbar;
