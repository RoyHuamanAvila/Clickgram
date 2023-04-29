import React from 'react';
import './AccountWidget.scss';
import { UserPicture } from '../UserPicture';
import { User } from '../../interfaces';
import { useAppSelector } from '../../hooks';

export type AccountWidgetProps = {
	owner: User;
}

const AccountWidget: React.FC<AccountWidgetProps> = ({ owner }) => {
	const user = useAppSelector(state => state.application.user);
	return (
		<div className='AccountWidget'>
			<div className="AccountWidget-ownerinfo">
				<UserPicture picture={owner.picture} username='royandresdev' />
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
