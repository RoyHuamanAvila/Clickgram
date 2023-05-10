import React, { useCallback, useEffect } from 'react';
import './styles/LikeButton.scss';
import { useToggle } from '../../hooks';
export interface LikeButtonProps {
	handleLikePost: () => void;
	liked: boolean;
	likeCounter: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ handleLikePost, liked }) => {
	return (
		<button className='likebutton' title='Like' onClick={handleLikePost}>
			{
				liked ? <i className="bi bi-heart-fill likebutton-animation"></i> : <i className="bi bi-heart like"></i>
			}
		</button>
	);
};

export default LikeButton;
