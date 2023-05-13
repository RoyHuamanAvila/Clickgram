import EditProfileModal from './EditProfileModal'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useFormik } from 'formik';
import { UpdateUserDto } from '../../interfaces/dto';
import { axiosUpdateUser } from '../../features/user/userSlice';
import * as yup from 'yup';


const EditProfileModalContainer = () => {
  const user = useAppSelector(state => state.user.data);
  const initialValues: UpdateUserDto = {
    presentation: user.presentation,
  }
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      presentation: yup.string().max(150),
    }),
    onSubmit: (values) => {
      dispatch(axiosUpdateUser(values));
    }
  })

  return (
    <EditProfileModal user={user} formik={formik} />
  )
}

export default EditProfileModalContainer
