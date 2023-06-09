import React from 'react';
import './styles/Comment.scss';
import { User } from '../../interfaces';
import { UserPicture } from '../UserPicture';
export interface CommentProps {
	owner: User;
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
