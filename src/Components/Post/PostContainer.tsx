import { FC, useState } from 'react'
import { PostProps } from '../../interfaces'
import PostView from './PostView';

export interface PostContainerProps {
  post: PostProps;
}

export const PostContainer: FC<PostContainerProps> = ({ post }) => {
  const [data, setData] = useState(post);

  const handleLike = () => {
    if (data.liked) {
      setData({ ...data, liked: false, likeCount: post.likeCount })
    } else {
      setData({ ...data, liked: true, likeCount: post.likeCount + 1 })
    }
  }

  return <PostView data={data} handleLike={handleLike} />
}

export default PostContainer;
