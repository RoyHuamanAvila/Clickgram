import React from 'react';
import './InputChangePicture.scss';

export type InputChangePictureProps = {
}

const InputChangePicture: React.FC<InputChangePictureProps> = () => {
	return (
		<div className='InputChangePicture'>
			<input
				id='changePictureProfile'
				type='file'
				className='InputChangePicture-input'
				name='changePictureProfile'
				title='Cambiar photo de perfil'
			/>
		</div>
	)
};

export default InputChangePicture;
