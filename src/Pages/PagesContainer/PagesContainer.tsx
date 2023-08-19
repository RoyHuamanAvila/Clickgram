import React from 'react';
import './PagesContainer.scss';
import { NavbarContainer } from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { CreatePostModal } from '../../Components/Modals';

const PagesContainer = () => {
	return (
		<div className='PagesContainer'>
			<NavbarContainer />
			<CreatePostModal />
			<Header />
			<div className='PagesContainer-content'>
				<Outlet />
			</div>
		</div>
	);
};

export default PagesContainer;
