import React from 'react';
import './PagesContainer.scss';
import { NavbarContainer, NavbarItem } from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { useAppSelector } from '../../hooks';
import { UserPicture } from '../../Components/UserPicture';
import { CreatePostModal } from '../../Components/Modals';

export type PagesContainerProps = {
}

const PagesContainer: React.FC<PagesContainerProps> = () => {
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
