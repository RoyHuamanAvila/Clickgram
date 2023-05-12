import React from 'react';
import './styles/UserPicture.scss';
import { Link } from 'react-router-dom';
export interface UserPictureProps {
	picture?: string;
	username?: string;
	size?: string;
}

const UserPicture: React.FC<UserPictureProps> = ({ picture, username, size }) => {
	return (
		<Link to={`/${username}`} className='userpicture' style={{ height: size, width: size }}>
			{
				picture && <img src={picture} alt="User Picture" />
			}
		</Link>
	);
};

export default UserPicture;
