import React from 'react';
import './styles/Home.scss';
import { Posts } from '../../Data/Posts';
import { Post } from '../../Components';
import { Sidebar } from '../../Components/Sidebar';
export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const posts = Posts;
	return (
		<div className='home'>
			<Sidebar />
			<div className='col-10 ms-auto'>
				{
					posts.map((post, index) => <Post key={index} {...post} />)
				}
			</div>
		</div >
	);
};

export default Home;
