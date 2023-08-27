import { FC } from "react";
import './styles/LikeButton.scss'
interface PostLikeButton {
	liked: boolean;
	handleLike: () => void;
}

const PostLikeButton: FC<PostLikeButton> = ({ handleLike, liked }) => {
	return (
		<div>
			<button className='likebutton' title='Like' onClick={handleLike}>
				{
					liked ? <i className="bi bi-heart-fill likebutton-animation"></i> : <i className="bi bi-heart like"></i>
				}
			</button>
		</div>
	)
}

export default PostLikeButton;
