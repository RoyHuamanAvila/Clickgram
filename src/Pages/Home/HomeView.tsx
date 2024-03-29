import React from 'react';
import './styles/Home.scss';
import { AccountWidget, Post } from '../../Components';
import { PostProps } from '../../interfaces';
export interface HomeProps {
	posts: PostProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	return (
		<div className='home' id='home' data-testid='home'>
			<div className="home-content">
				{
					posts.map(post => <Post post={post} key={post._id} />)
				}
			</div>
			<aside className="home-aside">
				<AccountWidget />
				<p className='copyright'>© CLICKGRAM FROM ROYANDRESDEV</p>
			</aside>
		</div >
	);
};

export default Home;
