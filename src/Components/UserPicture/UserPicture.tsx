import React from 'react';
import './styles/UserPicture.scss';
import { Link } from 'react-router-dom';
export interface UserPictureProps {
	picture: string;
	username: string;
}

const UserPicture: React.FC<UserPictureProps> = ({ picture, username }) => {
	return (
		<Link to={`/${username}`} className="userpicture" >
			{
				picture && <img src={picture} alt="User Picture" />
			}
		</Link>
	);
};

export default UserPicture;
