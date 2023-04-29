import React from 'react';
import './Profile.scss';
import { UserPicture } from '../../Components/UserPicture';

export type ProfileProps = {
}

const Profile: React.FC<ProfileProps> = () => {
	return (
		<div className="Profile">
			<div className="Profile-UserContainer">
				<UserPicture picture='' username='royandresdev' />
			</div>
		</div>
	);
};

export default Profile;
