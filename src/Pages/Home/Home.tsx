import React from 'react';
import './styles/Home.scss';
import { Posts } from '../../Data/Posts';
import { Post } from '../../Components';
export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const posts = Posts;
	return (
		<div className='home row'>
			<div className='col-3'>

			</div>
			<div className='col-9'>
				{
					posts.map((post, index) => <Post key={index} {...post} />)
				}
			</div>
		</div >
	);
};

export default Home;
