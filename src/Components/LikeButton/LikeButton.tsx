import React, { useEffect } from 'react';
import './styles/LikeButton.scss';
import { useToggle } from '../../hooks';
export interface LikeButtonProps { }

const LikeButton: React.FC<LikeButtonProps> = () => {
	const { active, handleToggle } = useToggle();

	//Like
	useEffect(() => {
		if (active) {
			console.log('like')
		} else {
			console.log('dislike')
		}
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
