import React, { useState } from 'react';
import './styles/Post.scss';
import { LikeButton } from '../LikeButton';
import { PostProps } from '../../interfaces';
import { formatNumber } from '../../utils/formats';
import { InputComment } from '../InputComment';

const Post: React.FC<PostProps> = (post) => {
	const { owner, likeCount, comments, content, description } = post;
	const [likeCounter, setLikeCounter] = useState<number>(likeCount);

	const handleLikeCount = (liked: boolean) => {
		setLikeCounter(liked ? likeCount + 1 : likeCount)
	}

	return (
		<div className='post dark'>
			<div className="post-header">
				<div className="post-ownerinfo">
					<div className="ownerinfo-picture">
						<img src={owner.picture} alt="post owner" />
					</div>
					<p className='ownerinfo-name'>{owner.name}</p>
				</div>
				<i className="bi bi-three-dots fs-5"></i>
			</div>
			<div className="post-content">
				<img src={content} alt="content post" />
			</div>
			<div className="post-interactive">
				<div className='post-interactive-section'>
					<LikeButton handleLikeCount={handleLikeCount} />
					<i className="bi bi-chat comments"></i>
					<i className="bi bi-send"></i>
				</div>
				<i className="bi bi-bookmark"></i>
			</div>
			<p className='post-countlikes'>{formatNumber(likeCounter)} Me gusta</p>
			<p className='post-description'><span>{owner.name}</span> {description}</p>
			<p className='post-comments'>Ver los {comments?.length} comentarios</p>
			<InputComment />
		</div >
	);
};

export default Post;
