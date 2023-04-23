import React from 'react';
import './styles/Sidebar.scss';
export interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<div className="sidebar-container">
			<div className='sidebar'>
				<img className='sidebar-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Logo" />
				<div className="sidebaritem-container">
					<SidebarItem title='Home'>
						<i className="bi bi-house-door-fill"></i>
					</SidebarItem>
				</div>
			</div >
		</div>
	);
};

export interface SidebarItemProps {
	children: React.ReactNode;
	title: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, title }) => {
	return (
		<button className="sidebaritem">
			{children} <p>{title}</p>
		</button>
	)
}

export default Sidebar;
