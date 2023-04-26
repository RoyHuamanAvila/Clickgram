import React from 'react';
import './styles/PostModal.scss';
import { PostProps } from '../../interfaces';
import { PostHeader } from '../PostHeader';
import { Carousel } from '../Carousel';
import { PostInteractive } from '../PostInteractive';
import { LikeButtonProps } from '../LikeButton/LikeButton';
import { InputComment } from '../InputComment';
import { Comment } from '../Comment';
export interface PostModalProps {
	postData: PostProps;
	likeButton: LikeButtonProps;
}

const PostModal: React.FC<PostModalProps> = ({ postData, likeButton }) => {
	const { contents, likeCount, owner, comments, description } = postData;

	return (
		<>
			<div className="modal modal-xl fade" id={`${owner.name}modal`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content dark">
						<div className="modal-content-section">
							<Carousel contents={contents} id={`${owner.name}carouselmodal`} />
						</div>
						<div className="modal-content-section">
							<div className="modal-header">
								<PostHeader owner={owner} />
							</div>
							<div className="modal-comments">
								<Comment owner={owner} content={description} />
							</div>
							<div className="modal-interactive">
								<PostInteractive likeButton={likeButton} idPost={owner.name} />
							</div>
							<div className="modal-input">
								<InputComment />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostModal;
