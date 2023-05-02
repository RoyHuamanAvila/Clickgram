import { FC } from 'react'
import Post from './PostView'
import { PostProps } from '../../interfaces'

export interface PostContainerProps {
  post: PostProps;
}

const PostContainer: FC<PostContainerProps> = ({ post }) => {
  return <Post {...post} />
}

export default PostContainer
