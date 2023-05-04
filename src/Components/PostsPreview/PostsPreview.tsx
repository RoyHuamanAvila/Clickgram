import React from 'react';
import './PostsPreview.scss';
import { PostProps } from '../../interfaces';

export type PostsPreviewProps = {
	posts: PostProps[];
}

const PostsPreview: React.FC<PostsPreviewProps> = ({ posts }) => {
	return (
		<div className='Profile-PostsPreview'>
			{
				posts.map(post => <PostItemPreview content={post.content[0]} />)
			}
		</div>
	);
};

interface PostItemPreviewProps {
	content: string;
}

const PostItemPreview: React.FC<PostItemPreviewProps> = ({ content }) => {
	return (
		<div className='PostPreview'>
			<img src={content} alt="Post preview" />
		</div>
	)
}

export default PostsPreview;
