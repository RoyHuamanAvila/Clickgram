import './InputChangePicture.scss';

const InputChangePicture = () => {
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
