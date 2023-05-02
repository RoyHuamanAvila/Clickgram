import React from 'react';
import './styles/Home.scss';
import { AccountWidget, Suggestions, Post } from '../../Components';
import { PostProps } from '../../interfaces';
export interface HomeProps {
	posts: PostProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	return (
		<div className='home'>
			<div className="home-content">
				{
					posts.map(post => <Post post={post} />)
				}
			</div>
			<div className="home-accountinfo">
				<AccountWidget owner={{ fullname: 'User', picture: '', username: 'royandresdev' }} />
			</div>
		</div >
	);
};

export default Home;
