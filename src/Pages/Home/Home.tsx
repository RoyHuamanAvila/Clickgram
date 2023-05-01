import React from 'react';
import './styles/Home.scss';
import { AccountWidget } from '../../Components/AccountWidget';
import SuggestionContainer from '../../Components/Suggestions/SuggestionContainer';
import { PostProps } from '../../interfaces';
import PostContainer from '../../Components/Post/PostContainer';
export interface HomeProps {
	posts: PostProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	return (
		<div className='home'>
			{
				posts.map(post => <PostContainer post={post} />)
			}
			<div className="home-accountinfo">
				<AccountWidget owner={{ fullname: 'User', picture: '', username: 'royandresdev' }} />
			</div>
		</div >
	);
};

export default Home;
