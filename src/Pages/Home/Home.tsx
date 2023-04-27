import React from 'react';
import './styles/Home.scss';
import { Posts } from '../../Data/Posts';
import { Post } from '../../Components';
import { NavbarContainer, NavbarItem } from '../../Components/Navbar';
export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const posts = Posts;
	return (
		<div className='home'>
			<div className="home-posts">
				{
					posts.map(post => <Post {...post} />)
				}
			</div>
			<NavbarContainer>
				<NavbarItem label='Home' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
				</NavbarItem>
			</NavbarContainer>
		</div >
	);
};

export default Home;
