import React from 'react';
import './styles/PostHeader.scss';
import { User } from '../../interfaces';
import { UserPicture } from '../UserPicture';
export interface PostHeaderProps {
	owner: User;
}

const PostHeader: React.FC<PostHeaderProps> = ({ owner }) => {
	return (
		<div className="post-header">
			<div className="post-ownerinfo">
				<UserPicture username={owner.username} picture={owner.picture} />
				<p className='ownerinfo-name'>{owner.username}</p>
			</div>
			<i className="bi bi-three-dots fs-5"></i>
		</div>
	);
};

export default PostHeader;
