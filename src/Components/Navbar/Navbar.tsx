import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { signOff } from '../../features/application/authSlice';
import { deleteUser } from '../../features/user/userSlice';

export interface NavbarContainerProps {
}

export const NavbarContainer: React.FC<NavbarContainerProps> = () => {
	const { username, picture } = useAppSelector(state => state.user.data);
	const dispatch = useAppDispatch();

	const handleSignOff = () => {
		dispatch(signOff());
		dispatch(deleteUser)
	}

	return (
		<div className="navbar-container">
			<img className='navbar-logo' src="/Logo.svg" alt="Logo clickgram" />
			<img className='navbar-logonotext' src="/LogoNoText.svg" alt="Logo Clickgram" />
			<div className="navbar-items">
				<NavbarItem label='Inicio' toPath='/'>
					<i className="bi bi-house-door-fill"></i>
				</NavbarItem>
				<button type="button" className="p-0 bg-transparent border-0 text-primary navbar-item" data-bs-toggle="modal" data-bs-target="#createPostModal">
					<i className="bi bi-plus-square"></i> <span>Create</span>
				</button>
				<NavbarItem label='Perfil' toPath={`/${username}`}>
					{
						picture ?
							<img src={picture} alt="User photo" /> :
							<div className="placeholder-glow">
								<div className='picture-placeholder placeholder' role='status'></div>
							</div>
					}
				</NavbarItem>
			</div>
			<button className="navbar-item" onClick={handleSignOff}>
				<i className="bi bi-box-arrow-right"></i> <span>Cerrar sesión</span>
			</button>
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

