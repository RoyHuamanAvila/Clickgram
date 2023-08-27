import { FC } from "react";
import { PostProps } from "../../interfaces";
import { PostHeader } from "../PostHeader";
import './styles/Post.scss';
import { Carousel } from "../Carousel";
import { InputComment } from "../InputComment";
import { PostModal } from "../Modals";
import PostControls from "../PostControls/PostControls";
interface PostViewProps {
	data: PostProps;
	handleLike: () => void;
}

const PostView: FC<PostViewProps> = ({ data, handleLike }) => {
	return (
		<div className="post">
			<PostHeader owner={data.owner} />
			<div className="post-content">
				<Carousel contents={data.content} id={data._id} />
			</div>
			<p className="px-2 m-0"><span className="fw-semibold">{data.owner.username}</span> {data.description}</p>
			<PostControls handleLike={handleLike} data={data} />
			<button type="button" className="post-comments" data-bs-toggle="modal" data-bs-target={`#${data._id}modal`} title='View More'>
				Ver los {data.comments?.length} comentarios
			</button>
			<InputComment />
			<PostModal
				Carousel={<Carousel contents={data.content} id={`${data._id}.carousel.modal`} />}
				PostHeader={<PostHeader owner={data.owner} />}
				PostControls={<PostControls data={data} handleLike={handleLike} />}
				data={data}
			/>
		</div>
	)
}

export default PostView;
