import React from 'react';
import './styles/UserPicture.scss';
export interface UserPictureProps {
	picture: string;
}

const UserPicture: React.FC<UserPictureProps> = ({ picture }) => {
	return (
		<div className="userpicture">
			<img src={picture} alt="User Picture" />
		</div>
	);
};

export default UserPicture;
