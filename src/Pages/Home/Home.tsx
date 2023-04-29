import React from 'react';
import './styles/Home.scss';
import { Posts } from '../../Data/Posts';
import { Post } from '../../Components';
import { NavbarContainer, NavbarItem } from '../../Components/Navbar';
import { Header } from '../../Components/Header';
import { AccountWidget } from '../../Components/AccountWidget';
import SuggestionContainer from '../../Components/Suggestions/SuggestionContainer';
export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const posts = Posts;
	return (
		<div className='home'>
			<Header />
			<SuggestionContainer />
			{/* <div className="home-posts">
				{
					posts.map(post => <Post {...post} />)
				}
			</div> */}
			<NavbarContainer>
				<NavbarItem label='Home' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
				</NavbarItem>
			</NavbarContainer>
			<div className="home-accountinfo">
				<AccountWidget owner={{ fullname: 'User', picture: '', username: 'royandresdev' }} />
			</div>
		</div >
	);
};

export default Home;
