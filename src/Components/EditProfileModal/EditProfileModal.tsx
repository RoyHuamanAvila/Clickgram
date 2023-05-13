import React from 'react';
import './EditProfileModal.scss';
import { UserLogged } from '../../interfaces';
import { FormikCustom } from '../../interfaces/FormikCustomTypes';
import { UpdateUserDto } from '../../interfaces/dto';

export type EditProfileModalProps = {
	user: UserLogged;
	formik: FormikCustom<UpdateUserDto>
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, formik }) => {
	return (
		<>
			<button type="button" className="btn btn-stroke fw-semibold text-dark" data-bs-toggle="modal" data-bs-target="#editProfileModal">
				Editar perfil
			</button>

			<div className="modal fade" id="editProfileModal" tabIndex={-1} aria-labelledby="editProfileModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content flex-column">
						<div className="d-flex justify-content-between px-3 pt-3">
							<h1 className="modal-title fs-5" id="editProfileModalLabel">Editar perfil</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form className='d-flex flex-column align-items-start px-2 gap-4' onSubmit={formik.handleSubmit}>
								<div className="d-flex align-items-center gap-2">
									<img src={user.picture} alt="User picture" className='editprofile-userpicture' />
									<div className="editprofile-changepicture">
										<p className='fw-semibold'>{user.username}</p>
										<p className='text-primary'>Cambiar foto del perfil</p>
									</div>
								</div>
								<div className='d-flex w-100 gap-2'>
									<p className='fw-semibold'>Presentación</p>
									<textarea
										className='border-stroke p-2 flex-grow-1'
										name="presentation"
										id="presentation"
										placeholder='Añade tu presentación'
										maxLength={150}
										rows={3}
										onChange={formik.handleChange}
										value={formik.values.presentation}
									/>
								</div>
								<button type="submit" className="btn btn-secondary text-primary fw-semibold align-self-center">Enviar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProfileModal;
