import { FC } from "react";
import { PostProps } from "../../interfaces";
import { SavePostButton } from "../SavePostButton";
import PostLikeButton from "../PostLikeButton/PostLikeButton";

interface PostControlsProps {
  data: PostProps;
  handleLike: () => void;
}

const PostControls: FC<PostControlsProps> = ({ handleLike, data }) => {
  const { likeCount, liked, _id } = data;
  return (
    <div className="px-2">
      <p className="mb-2">{likeCount} Me gusta</p>
      <div className="d-flex justify-content-between">
        <div className="d-flex fs-4 align-items-center gap-2">
          <PostLikeButton handleLike={handleLike} liked={liked} />
          <button type='button' className="bi bi-chat border-0 bg-transparent" data-bs-toggle="modal" data-bs-target={`#${_id}modal`} title='View comments'></button>
          <i className="bi bi-send"></i>
        </div>
        <SavePostButton saved={false} />
      </div>
    </div>
  )
}

export default PostControls;
