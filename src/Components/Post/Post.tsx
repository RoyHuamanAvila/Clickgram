import React, { useState } from 'react';
import './styles/Post.scss';
import { LikeButton } from '../LikeButton';
export interface PostProps { }

const Post: React.FC<PostProps> = () => {
	const [likeCount, setLikeCount] = useState<number>(44077);

	const handleLikeCount = (liked: boolean) => {
		setLikeCount(liked ? likeCount + 1 : likeCount - 1)
	}

	function formatNumber(num: number) {
		return num.toLocaleString('es-ES', { useGrouping: true, maximumFractionDigits: 2 });
	}

	return (
		<div className='post dark'>
			<div className="post-header">
				<div className="post-ownerinfo">
					<div className="ownerinfo-picture">
						<img src="/LogoKFC.jpg" alt="" />
					</div>
					<p className='ownerinfo-name'>kfc.es</p>
				</div>
				<i className="bi bi-three-dots fs-4"></i>
			</div>
			<div className="post-content">
				<img src="/PostKFC.jpg" alt="" />
			</div>
			<div className="post-interactive">
				<div className='post-interactive-section'>
					<LikeButton handleLikeCount={handleLikeCount} />
					<i className="bi bi-chat comments"></i>
					<i className="bi bi-send"></i>
				</div>
				<i className="bi bi-bookmark"></i>
			</div>
			<p className='post-countlikes'>{formatNumber(likeCount)} Me gusta</p>
			<p className='post-description'><span>kfc.es</span> compaltan 😡</p>
			<p className='post-comments'>Ver los 98 comentarios</p>
			<p className='post-addcomment'>Agrega un comentario...</p>
		</div >
	);
};

export default Post;
