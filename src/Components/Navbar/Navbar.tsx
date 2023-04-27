import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

export interface NavbarContainerProps {
	children: React.ReactNode
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
	return (
		<nav className='navbar-container'>
			<img className='navbar-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Navbar logo" />
			<div>
				{children}
			</div>
		</nav>
	)
}

export interface NavbarItemProps {
	children: React.ReactNode;
	label: string;
	toPath: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, toPath, label }) => {
	return (
		<NavLink to={toPath} className="navbar-item">
			{children} <span>{label}</span>
		</NavLink>
	)
}

