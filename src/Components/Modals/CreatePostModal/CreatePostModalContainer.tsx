import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector, useImagePreview } from '../../../hooks'
import CreatePostModalView from './CreatePostModaView'
import { useFormik } from 'formik';
import { CreatePostDto } from '../../../interfaces/dto';
import * as yup from 'yup';
import { axiosCreatePost } from '../../../features/user/userSlice';

const initialValues: CreatePostDto = {
  description: '',
  files: []
}

const CreatePostModalContainer = () => {
  const { imagesPaths, selectFiles, cleanPaths, files } = useImagePreview();
  const user = useAppSelector(state => state.user.data);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object().shape({
      files: yup.array()
        .required('Debe seleccionar un archivo')
        .test('fileType', 'Tipo de archivo no valido', (value) => {
          const allowedTypes = ['image/jpeg', 'image/png'];
          return value.every((file: File) => allowedTypes.includes(file.type))
        }),
      description: yup.string()
        .max(150, "La descripcion no debe ser mayor de 150 caracteres")
        .required("Escribe una descripción")
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(axiosCreatePost(values));
      resetForm();
      cleanPaths();
    }
  })

  const setFiles = async (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      formik.setFieldValue('files', Array.from(e.currentTarget.files));
      selectFiles(e);
    }
  }

  return <CreatePostModalView imagePaths={imagesPaths} selectFiles={setFiles} user={user} cleanPaths={cleanPaths} formik={formik} />
}

export default CreatePostModalContainer
