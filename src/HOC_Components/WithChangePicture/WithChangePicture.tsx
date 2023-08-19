import React, { ComponentType, FormEvent } from 'react';
import './WithChangePicture.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { axiosUpdatePicture } from '../../features/user/userSlice';

export type ChangePictureConfig = {
	size: string;
	picture: string;
}

export function withChangePicture<T extends object>(WrappedComponent: ComponentType<T>, config: ChangePictureConfig) {
	return (props: T) => {
		const user = useAppSelector(state => state.user.data);
		const dispatch = useAppDispatch();

		const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
			const { files } = e.currentTarget;
			if (!files) return;

			const fileImage = files[0];
			dispatch(axiosUpdatePicture(fileImage));
		}

		return (
			<div className='inputChangePicture' style={{ height: config.size, width: config.size }}>
				<input type='file' title='Cambiar foto' onChange={handleOnChange} />
				<WrappedComponent {...props} size={config.size} picture={user.picture} />
				<div className="inputChangePicture-message">
					<p>Cambiar Foto</p>
				</div>
			</div>
		)
	}
}

