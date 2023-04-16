import React, { useEffect } from 'react';
import './styles/LikeButton.scss';
import { useToggle } from '../../hooks';
export interface LikeButtonProps {
	handleLikeCount: (active: boolean) => void
}

const LikeButton: React.FC<LikeButtonProps> = ({ handleLikeCount }) => {
	const { active, handleToggle } = useToggle(false);

	//Like
	useEffect(() => {
		handleLikeCount(active);
	}, [active])

	return (
		<button className='likebutton' title='Like' onClick={handleToggle}>
			{
				active ? (
					<i className="bi bi-heart-fill likebutton-like"></i>
				) : (
					<i className="bi bi-heart like"></i>
				)
			}
		</button>
	);
};

export default LikeButton;
