import React, { FormEvent, useState } from 'react';
import './styles/InputComment.scss';
import { removeExtraSpaces, verifyTextNotBlank } from '../../utils/verify';
export interface InputCommentProps { }

const InputComment: React.FC<InputCommentProps> = () => {
	const [comment, setComment] = useState<string>('');

	const handleUpdateComment = (e: FormEvent<HTMLTextAreaElement>) => {
		setComment(e.currentTarget.value);
	}

	const handleSendComment = () => {
		let newComment = removeExtraSpaces(comment);
		console.log(newComment)
	}

	return (
		<div className='inputcomment dark'>
			<textarea title='Comment' placeholder='Agrega un commentario...' onChange={handleUpdateComment} value={comment} rows={1} />
			{
				verifyTextNotBlank(comment) && <button onClick={handleSendComment}>Comment</button>
			}
		</div >
	);
};

export default InputComment;
