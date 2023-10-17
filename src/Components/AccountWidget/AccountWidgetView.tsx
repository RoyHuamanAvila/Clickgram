import './AccountWidget.scss';
import { UserPicture } from '../UserPicture';
import { FC } from 'react';
import { UserLogged } from '../../interfaces';

interface AccountWidgetViewProps {
	user: UserLogged;
}

const AccountWidgetView: FC<AccountWidgetViewProps> = ({ user }) => {
	return (
		<div className='AccountWidget'>
			<div className="AccountWidget-ownerinfo">
				<UserPicture picture={user?.picture} username={user?.username} />
				<div className='ownerinfo-names'>
					<p className='ownerinfo-username' data-testid='username'>{user?.username}</p>
					<p className='ownerinfo-fullname'>{user?.fullname}</p>
				</div>
			</div>
			<button className='btn-changeaccount' role='button'>Cambiar</button>
		</div>
	);
};

export default AccountWidgetView;
