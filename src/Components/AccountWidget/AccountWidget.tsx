import React from 'react';
import './AccountWidget.scss';
import { UserPicture } from '../UserPicture';
import { useAppSelector } from '../../hooks';

const AccountWidget = () => {
	const user = useAppSelector(state => state.user.data);
	return (
		<div className='AccountWidget'>
			<div className="AccountWidget-ownerinfo">
				<UserPicture picture={user?.picture} username={user?.username} />
				<div className='ownerinfo-names'>
					<p className='ownerinfo-username'>{user?.username}</p>
					<p className='ownerinfo-fullname'>{user?.fullname}</p>
				</div>
			</div>
			<button className='btn-changeaccount'>Cambiar</button>
		</div>
	);
};

export default AccountWidget;
