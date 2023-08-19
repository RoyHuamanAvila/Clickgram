import { FC } from 'react';
import './ButtonFollow.scss';

export type ButtonFollowProps = {
	isFollowed: boolean;
	loading: boolean;
	handleFollow: () => void;
	handleUnfollow: () => void;
}

const ButtonFollow: FC<ButtonFollowProps> = ({ handleUnfollow, handleFollow, isFollowed, loading }) => {
	return (
		isFollowed ?
			<button className='ButtonUnfollow' onClick={handleUnfollow} disabled={loading}>
				{
					loading ? <div className="spinner-border spinner-border-sm" role="status">
						<span className="visually-hidden">Loading...</span>
					</div> : <>Siguiendo</>
				}
			</button> :
			<button className='ButtonFollow' onClick={handleFollow} disabled={loading}>
				{
					loading ? <div className="spinner-border spinner-border-sm" role="status">
						<span className="visually-hidden">Loading...</span>
					</div> : <>Seguir</>
				}
			</button>
	);
};

export default ButtonFollow;
