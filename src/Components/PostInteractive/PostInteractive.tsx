import React from 'react';
import './styles/PostInteractive.scss';
import { LikeButton } from '../LikeButton';
import { SavePostButton } from '../SavePostButton';
import { LikeButtonProps } from '../LikeButton/LikeButton';
import { formatNumber } from '../../utils/formats';
export interface PostInteractiveProps {
	likeButton: LikeButtonProps;
	idPost: string;
}

const PostInteractive: React.FC<PostInteractiveProps> = ({ likeButton, idPost }) => {
	const { handleLikePost, liked, likeCounter } = likeButton;
	return (
		<div className="post-interactive">
			<div className='post-interactive-buttons'>
				<div className='d-flex align-items-center'>
					<LikeButton handleLikePost={handleLikePost} liked={liked} likeCounter={likeCounter} />
					<button type='button' className="bi bi-chat btn-showcomments" data-bs-toggle="modal" data-bs-target={`#${idPost}modal`} title='View comments'></button>
					<i className="bi bi-send"></i>
				</div>
				<SavePostButton saved={false} />
			</div>
			<p className='post-countlikes'>{formatNumber(likeCounter)} Me gusta</p>
		</div>
	);
};

export default PostInteractive;
