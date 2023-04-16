import React, { FormEvent, useState } from 'react';
import './styles/InputComment.scss';
import { removeExtraSpaces, verifyTextNotBlank } from '../../utils/verify';
export interface InputCommentProps { }

const InputComment: React.FC<InputCommentProps> = () => {
	const [comment, setComment] = useState<string>('');
	const [newComments, setNewComments] = useState<string[]>([]);

	const handleUpdateComment = (e: FormEvent<HTMLTextAreaElement>) => {
		setComment(e.currentTarget.value);
	}

	const handleAddComment = (comment: string) => {
		setNewComments(newComments.concat(comment));
	}

	const handleSendComment = () => {
		let trimmedComment = removeExtraSpaces(comment);
		handleAddComment(trimmedComment);
		setComment('')
	}

	return (
		<div className='inputcomment dark'>
			{
				newComments.map((comment, index) => <p key={index}>{comment}</p>)
			}
			<div className="inputcomment-input">
				<textarea title='Comment' placeholder='Agrega un commentario...' onChange={handleUpdateComment} value={comment} rows={1} />
				{
					verifyTextNotBlank(comment) && <button onClick={handleSendComment}>Comment</button>
				}
			</div>
		</div >
	);
};

export default InputComment;
