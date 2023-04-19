import React from 'react';
import './styles/PostInteractive.scss';
import { LikeButton } from '../LikeButton';
import { SavePostButton } from '../SavePostButton';
import { LikeButtonProps } from '../LikeButton/LikeButton';
export interface PostInteractiveProps {
	likeButton: LikeButtonProps;
}

const PostInteractive: React.FC<PostInteractiveProps> = ({ likeButton }) => {
	const { handleLikePost, liked } = likeButton;
	return (
		<div className="post-interactive">
			<div className='post-interactive-section'>
				<LikeButton handleLikePost={handleLikePost} liked={liked} />
				<i className="bi bi-chat comments"></i>
				<i className="bi bi-send"></i>
			</div>
			<SavePostButton saved={false} />
		</div>
	);
};

export default PostInteractive;
