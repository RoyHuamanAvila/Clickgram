import React from 'react';
import './styles/Comment.scss';
import { PostOwner } from '../../interfaces';
import { UserPicture } from '../UserPicture';
export interface CommentProps {
	owner: PostOwner;
	content?: string;
}

const Comment: React.FC<CommentProps> = ({ owner, content }) => {
	return (
		<div className='comment'>
			<UserPicture picture={owner.picture} username={owner.username} />
			<p><span className='fw-bold'>{owner.username}</span> {content}</p>
		</div>
	);
};

export default Comment;
