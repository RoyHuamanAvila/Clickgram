import React from 'react';
import './PagesContainer.scss';
import { NavbarContainer, NavbarItem } from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';

export type PagesContainerProps = {
}

const PagesContainer: React.FC<PagesContainerProps> = () => {
	return (
		<div className='PagesContainer'>
			<NavbarContainer>
				<NavbarItem label='Home' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
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
