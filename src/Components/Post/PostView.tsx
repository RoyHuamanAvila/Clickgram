import React, { useCallback, useState } from 'react';
import './styles/Post.scss';
import { PostProps } from '../../interfaces';
import { InputComment } from '../InputComment';
import { Carousel } from '../Carousel';
import { PostModal } from '../Modals';
import { PostHeader } from '../PostHeader';
import { PostInteractive } from '../PostInteractive';
import { useToggle } from '../../hooks';

const Post: React.FC<PostProps> = (post) => {
	const { owner, likeCount, comments, content: contents, description, _id } = post;
	const { active: liked, handleToggle: handleToggleLike, executeOnToggle: executeOnToggleLike } = useToggle(false);
	const [likeCounter, setLikeCounter] = useState<number>(likeCount);

	const handleLikePost = useCallback(() => {
		executeOnToggleLike((liked) => {
			if (liked) {
				setLikeCounter(likeCount)
				console.log('Dislike')
			} else {
				setLikeCounter(likeCount + 1)
				console.log('Like')
			}
		})
		handleToggleLike()
	}, [handleToggleLike, executeOnToggleLike])

	return (
		<div className='post'>
			<PostHeader owner={owner} />
			<div className="post-content">
				<Carousel contents={contents} id={_id!} />
			</div>
			<PostInteractive likeButton={{ handleLikePost, liked, likeCounter }} idPost={_id!} />
			<p className='post-description'><span>{owner.username}</span> {description}</p>
			<button type="button" className="post-comments" data-bs-toggle="modal" data-bs-target={`#${_id}modal`} title='View More'>
				Ver los {comments?.length} comentarios
			</button>
			<InputComment />
			<PostModal postData={post} likeButton={{ handleLikePost, liked, likeCounter }} />
		</div >
	);
};

export default Post;
