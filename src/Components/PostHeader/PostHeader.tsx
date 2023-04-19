import React from 'react';
import './styles/PostHeader.scss';
import { User } from '../../interfaces';
export interface PostHeaderProps {
	owner: User;
}

const PostHeader: React.FC<PostHeaderProps> = ({ owner }) => {
	return (
		<div className="post-header">
			<div className="post-ownerinfo">
				<div className="ownerinfo-picture">
					<img src={owner.picture} alt="post owner" />
				</div>
				<p className='ownerinfo-name'>{owner.name}</p>
			</div>
			<i className="bi bi-three-dots fs-5"></i>
		</div>
	);
};

export default PostHeader;
