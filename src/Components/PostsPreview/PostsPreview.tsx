import React from 'react';
import './PostsPreview.scss';
import { PostProps } from '../../interfaces';

export type PostsPreviewProps = {
	posts: PostProps[];
}

const PostsPreview: React.FC<PostsPreviewProps> = ({ posts }) => {
	return (
		<div className='Profile-posts'>
			{
				posts.map(post => <img src={post.content[0]} alt='Profile post' />)
			}
		</div>
	);
};

export default PostsPreview;
