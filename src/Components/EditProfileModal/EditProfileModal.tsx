import React from 'react';
import './EditProfileModal.scss';

export type EditProfileModalProps = {
	id: string;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ id }) => {
	return (
		<div className="modal fade" id={`${id}Modal`} tabIndex={-1} aria-labelledby={`${id}Label`} aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content flex-column">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id={`${id}Label`}>Editar perfil</h1>
						<button type="button" className="btn text-white" data-bs-dismiss="modal" aria-label="Close">
							<i className="bi bi-x-lg"></i>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="mb-3 row">
								<label htmlFor="userPresentation" className='col-sm-2 col-form-label'>Presentación</label>
								<div className="col-sm-10">
									<textarea name="userPresentation" id="userPresentation" className='form-control-plaintext border ms-2' cols={30} rows={10}></textarea>
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">Guardar cambios</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileModal;
