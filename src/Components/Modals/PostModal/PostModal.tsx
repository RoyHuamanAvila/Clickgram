import { FC, ReactNode } from 'react';
import './styles/PostModal.scss';
import { PostProps } from '../../../interfaces';
import { InputComment } from '../../InputComment';
import { Comment } from '../../Comment';
export interface PostModalProps {
	data: PostProps;
	PostHeader: ReactNode;
	Carousel: ReactNode;
	PostControls: ReactNode;
}

const PostModal: FC<PostModalProps> = ({ data, Carousel, PostHeader, PostControls }) => {
	const { owner, description, _id } = data;

	return (
		<>
			<div className="modal modal-xl fade" id={`${_id}modal`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-content-section">
							{Carousel}
						</div>
						<div className="modal-content-section">
							<div className="p-3 border-bottom mb-2">
								{PostHeader}
							</div>
							<div className="modal-comments">
								<Comment owner={owner} content={description} />
							</div>
							<div className="p-3 border ">
								{PostControls}
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
