import React from 'react';
import './styles/Home.scss';
import { Posts } from '../../Data/Posts';
import { Post } from '../../Components';
import { Sidebar } from '../../Components/Sidebar';
import { AccountWidget } from '../../Components/AccountWidget';
export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const posts = Posts;
	return (
		<div className='home'>
			<Sidebar />
			<section>
				<div>
					<div className='posts-container'>
						{
							posts.map((post, index) => <Post key={index} {...post} />)
						}
					</div>
					<div>
						<AccountWidget owner={{ name: 'User', picture: '/RoyAndresDev.webp' }} />
					</div>
				</div>
			</section>
		</div >
	);
};

export default Home;
