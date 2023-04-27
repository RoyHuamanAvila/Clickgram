import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

export interface NavbarContainerProps {
	children: React.ReactNode
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
	return <nav className='navbar-container'>{children}</nav>
}

export interface NavbarItemProps {
	children: React.ReactNode;
	label: string;
	toPath: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, toPath }) => {
	return <NavLink to={toPath} className="navbar-item">{children}</NavLink>
}

