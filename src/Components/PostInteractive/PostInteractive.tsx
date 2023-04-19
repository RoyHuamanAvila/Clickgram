import React from 'react';
import './styles/PostInteractive.scss';
import { LikeButton } from '../LikeButton';
import { SavePostButton } from '../SavePostButton';
import { LikeButtonProps } from '../LikeButton/LikeButton';
import { formatNumber } from '../../utils/formats';
export interface PostInteractiveProps {
	likeButton: LikeButtonProps;
}

const PostInteractive: React.FC<PostInteractiveProps> = ({ likeButton }) => {
	const { handleLikePost, liked, likeCounter } = likeButton;
	return (
		<div className="post-interactive">
			<div className='post-interactive-buttons'>
				<div>
					<LikeButton handleLikePost={handleLikePost} liked={liked} likeCounter={likeCounter} />
					<i className="bi bi-chat comments"></i>
					<i className="bi bi-send"></i>
				</div>
				<SavePostButton saved={false} />
			</div>
			<p className='post-countlikes'>{formatNumber(likeCounter)} Me gusta</p>
		</div>
	);
};

export default PostInteractive;
