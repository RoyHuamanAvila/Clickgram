import React, { ComponentType } from 'react';
import './WithChangePicture.scss';

export type ChangePictureConfig = {
	size: 'sm' | 'md';
}

export function withChangePicture<T extends {}>(WrappedComponent: ComponentType<T & ChangePictureConfig>, config: ChangePictureConfig) {
	return (props: T) => {
		return (
			<div className={`inputChangePicture inputChangePicture-${config.size}`}>
				<input type='file' title='Cambiar foto' />
				<WrappedComponent {...props} size={config.size} />
				<div className="inputChangePicture-message">
					<p>Cambiar Foto</p>
				</div>
			</div>
		)
	}
}

