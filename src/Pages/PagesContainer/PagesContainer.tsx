import React from 'react';
import './PagesContainer.scss';
import { NavbarContainer, NavbarItem } from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { useAppSelector } from '../../hooks';
import { UserPicture } from '../../Components/UserPicture';

export type PagesContainerProps = {
}

const PagesContainer: React.FC<PagesContainerProps> = () => {
	const { username, picture } = useAppSelector(state => state.user.data);

	return (
		<div className='PagesContainer'>
			<NavbarContainer>
				<NavbarItem label='Inicio' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
				</NavbarItem>
				<NavbarItem label='Perfil' toPath={`/${username}`}>
					<UserPicture picture={picture} username={username} />
				</NavbarItem>
			</NavbarContainer>
			<Header />
			<div className='PagesContainer-content'>
				<Outlet />
			</div>
		</div>
	);
};

export default PagesContainer;
