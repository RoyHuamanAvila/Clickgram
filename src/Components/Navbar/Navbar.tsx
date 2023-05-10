import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';
import { useAppSelector } from '../../hooks';

export interface NavbarContainerProps {
}

export const NavbarContainer: React.FC<NavbarContainerProps> = () => {
	const { username, picture } = useAppSelector(state => state.user.data);

	return (
		<div className="navbar-container">
			<img className='navbar-logo' src="/Logo.svg" alt="Logo clickgram" />
			<img className='navbar-logonotext' src="/LogoNoText.svg" alt="Logo Clickgram" />
			<div className="navbar-items">
				<NavbarItem label='Inicio' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
				</NavbarItem>
				<NavbarItem label='Create' toPath='/create'>
					<i className="bi bi-plus-square"></i>
				</NavbarItem>
				<NavbarItem label='Perfil' toPath={`/${username}`}>
					<img src={picture} alt="User photo" />
				</NavbarItem>
			</div>
			<div className="navbar-item">
				<i className="bi bi-box-arrow-right"></i> <span>Cerrar sesión</span>
			</div>
		</div>
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

