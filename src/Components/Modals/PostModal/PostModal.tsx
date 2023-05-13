import React from 'react';
import './styles/PostModal.scss';
import { PostProps } from '../../../interfaces';
import { PostHeader } from '../../PostHeader';
import { Carousel } from '../../Carousel';
import { PostInteractive } from '../../PostInteractive';
import { LikeButtonProps } from '../../LikeButton/LikeButton';
import { InputComment } from '../../InputComment';
import { Comment } from '../../Comment';
export interface PostModalProps {
	postData: PostProps;
	likeButton: LikeButtonProps;
}

const PostModal: React.FC<PostModalProps> = ({ postData, likeButton }) => {
	const { content, owner, description, _id } = postData;

	return (
		<>
			<div className="modal modal-xl fade" id={`${_id}modal`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content dark">
						<div className="modal-content-section">
							<Carousel contents={content} id={`${_id}carouselmodal`} />
						</div>
						<div className="modal-content-section">
							<div className="modal-header">
								<PostHeader owner={owner} />
							</div>
							<div className="modal-comments">
								<Comment owner={owner} content={description} />
							</div>
							<div className="modal-interactive">
								<PostInteractive likeButton={likeButton} idPost={_id!} />
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
