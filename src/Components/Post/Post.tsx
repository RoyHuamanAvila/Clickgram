import React, { useCallback, useState } from 'react';
import './styles/Post.scss';
import { PostProps } from '../../interfaces';
import { InputComment } from '../InputComment';
import { Carousel } from '../Carousel';
import { PostModal } from '../PostModal';
import { PostHeader } from '../PostHeader';
import { PostInteractive } from '../PostInteractive';
import { useToggle } from '../../hooks';

const Post: React.FC<PostProps> = (post) => {
	const { owner, likeCount, comments, contents, description } = post;
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
		<div className='post dark'>
			<PostHeader owner={owner} />
			<div className="post-content">
				<Carousel contents={contents} id={owner.name} />
			</div>
			<PostInteractive likeButton={{ handleLikePost, liked, likeCounter }} />
			<p className='post-description'><span>{owner.name}</span> {description}</p>
			<p className='post-comments'>
				Ver los {comments?.length} comentarios
				<button type="button" className="post-buttonmodal" data-bs-toggle="modal" data-bs-target={`#${owner.name}modal`} title='View More' />
			</p>
			<InputComment />
			<PostModal postData={post} likeButton={{ handleLikePost, liked, likeCounter }} />
		</div >
	);
};

export default Post;
