import React from 'react';
import './AccountWidget.scss';
import { UserPicture } from '../UserPicture';
import { User } from '../../interfaces';

export type AccountWidgetProps = {
	owner: User;
}

const AccountWidget: React.FC<AccountWidgetProps> = ({ owner }) => {
	return (
		<div className='AccountWidget'>
			<div className="AccountWidget-ownerinfo">
				<UserPicture picture={owner.picture} />
				<div className='ownerinfo-names'>
					<p className='ownerinfo-username'>{owner.name}</p>
					<p className='ownerinfo-fullname'>Full name</p>
				</div>
			</div>
			<button className='btn-changeaccount'>Cambiar</button>
		</div>
	);
};

export default AccountWidget;
