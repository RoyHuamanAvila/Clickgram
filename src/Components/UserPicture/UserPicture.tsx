import React from 'react';
import './styles/UserPicture.scss';
import { Link } from 'react-router-dom';
export interface UserPictureProps {
	picture: string;
	username: string;
	size: "sm" | "md";
}

const UserPicture: React.FC<UserPictureProps> = ({ picture, username, size }) => {
	return (
		<Link to={`/${username}`} className={`userpicture userpicture-${size}`} >
			{
				picture && <img src={picture} alt="User Picture" />
			}
		</Link>
	);
};

export default UserPicture;
