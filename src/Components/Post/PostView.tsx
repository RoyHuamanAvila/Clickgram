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
		<div className='post dark'>
			<PostHeader owner={owner} />
			<div className="post-content">
				<Carousel contents={contents} id={_id!} />
			</div>
			<div className='px-3 px-md-0'>
				<PostInteractive likeButton={{ handleLikePost, liked, likeCounter }} idPost={_id!} />
				<p className='post-description'><span>{owner.username}</span> {description}</p>
				<p className='post-comments'>
					Ver los {comments?.length} comentarios
					<button type="button" className="post-buttonmodal" data-bs-toggle="modal" data-bs-target={`#${_id}modal`} title='View More' />
				</p>
				<InputComment />
				<PostModal postData={post} likeButton={{ handleLikePost, liked, likeCounter }} />
			</div>
		</div >
	);
};

export default Post;