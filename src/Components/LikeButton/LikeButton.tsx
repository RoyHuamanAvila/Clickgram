import React, { useCallback, useEffect } from 'react';
import './styles/LikeButton.scss';
import { useToggle } from '../../hooks';
export interface LikeButtonProps {
	handleLikeCount: (active: boolean) => void
}

const LikeButton: React.FC<LikeButtonProps> = ({ handleLikeCount }) => {
	const { active, handleToggle, executeOnToggle } = useToggle(false);

	//Like
	useEffect(() => {
		handleLikeCount(active);
	}, [active])

	const handleLikePost = useCallback(() => {
		executeOnToggle((active) => {
			if (active) {
				console.log('Unlike');
			} else {
				console.log('Like')
			}
		})
		handleToggle();
	}, [executeOnToggle, handleToggle])

	return (
		<button className='likebutton' title='Like' onClick={handleLikePost}>
			{
				active ? <i className="bi bi-heart-fill likebutton-like"></i> : <i className="bi bi-heart like"></i>
			}
		</button>
	);
};

export default LikeButton;
