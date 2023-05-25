import React, { FormEvent } from 'react';
import './CreatePostModal.scss';
import { Carousel } from '../../Carousel';
import { UserLogged } from '../../../interfaces';
import { UserPicture } from '../../UserPicture';
import { FormikCustom } from '../../../interfaces/FormikCustomTypes';
import { CreatePostDto } from '../../../interfaces/dto';

export type CreatePostModalProps = {
	imagePaths: string[];
	selectFiles: (e: FormEvent<HTMLInputElement>) => void;
	cleanPaths: () => void;
	user: UserLogged;
	formik: FormikCustom<CreatePostDto>;
}

const CreatePostModalView: React.FC<CreatePostModalProps> = ({ imagePaths, selectFiles, user, cleanPaths, formik }) => {
	return (
		<div className="modal fade createPostModal" id="createPostModal" tabIndex={-1} aria-labelledby="createPostModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content flex-column pt-4">
					<form onSubmit={formik.handleSubmit}>
						{
							imagePaths.length > 0 ?
								<div className='d-flex flex-column gap-3'>
									<div className="d-flex align-items-center justify-content-between px-3">
										<button className='btn p-0' onClick={cleanPaths}>
											<i className="bi bi-arrow-left fs-3"></i>
										</button>
										<p className='fs-4 fw-semibold text-center m-0'>Crea una nueva publicación</p>
										<button className='btn btn-transparent text-primary p-0' type='submit'>Compartir</button>
									</div>
									<Carousel contents={imagePaths} id='createPostCarousel' />
									<div className='px-3'>
										<div className="d-flex gap-2 pb-2">
											<UserPicture picture={user.picture} username={user.username} size='30px' />
											<p className='fw-semibold m-0'>{user.username}</p>
										</div>
										<textarea
											className='border-0 w-100 outline-0'
											placeholder='Escribe una descripción'
											name="description"
											id="description"
											onChange={formik.handleChange}
											value={formik.values.description}
										/>
										<p className='text-error fw-semibold'>{formik.errors.description}</p>
									</div>
								</div> :
								<div className="d-flex flex-column align-items-center">
									<p className='fs-4 fw-semibold'>Crea una nueva publicación</p>
									<div className="d-flex flex-column align-items-center gap-3 py-5">
										<img className='searchImagesIcon' src="/SearchImageIcon.svg" alt="Search images icon" />
										<p className='m-0'>Sube las fotos aquí</p>
										<button className='btn btn-secondary text-primary fw-semibold position-relative overflow-hidden'>
											Seleccionar desde el dispositivo
											<input
												role='button'
												className='position-absolute start-0 top-0 w-100 h-100 opacity-0'
												type="file"
												name="files"
												id="files"
												accept='image/jpeg, image/png'
												multiple
												onChange={selectFiles}
											/>
										</button>
										{
											formik.errors.files && <p className='text-error fw-semibold'>{formik.errors.files}</p>
										}
									</div>
								</div>
						}
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreatePostModalView;
