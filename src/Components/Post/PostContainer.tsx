import { FC } from 'react'
import Post from './Post'
import { PostProps } from '../../interfaces'

export interface PostContainerProps {
  post: PostProps;
}

const PostContainer: FC<PostContainerProps> = ({ post }) => {
  return <Post {...post} />
}

export default PostContainer
