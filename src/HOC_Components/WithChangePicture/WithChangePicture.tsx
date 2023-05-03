import React, { ComponentType, FormEvent, useEffect, useState } from 'react';
import './WithChangePicture.scss';
import useImagePreview from '../../hooks/useImagePreview';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { axiosUpdatePicture } from '../../features/user/userSlice';

export type ChangePictureConfig = {
	size: 'sm' | 'md';
	picture: string;
}

export function withChangePicture<T extends {}>(WrappedComponent: ComponentType<T & ChangePictureConfig>, config: ChangePictureConfig) {
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
			<div className={`inputChangePicture inputChangePicture-${config.size}`}>
				<input type='file' title='Cambiar foto' onChange={handleOnChange} />
				<WrappedComponent {...props} size={config.size} picture={user.picture} />
				<div className="inputChangePicture-message">
					<p>Cambiar Foto</p>
				</div>
			</div>
		)
	}
}

