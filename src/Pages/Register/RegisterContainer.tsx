import { useNavigate } from "react-router";
import { axiosRegister } from "../../features/application/authSlice";
import { useAppDispatch } from "../../hooks"
import { RegisterAuthDto } from "../../interfaces/dto"
import RegisterFormik from "./RegisterFormik"
import * as Yup from 'yup';
import { useFormik } from "formik";

const initialValues: RegisterAuthDto = {
  email: '',
  fullname: '',
  username: '',
  password: ''
}

const RegisterContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (userObject: RegisterAuthDto) => {
    try {
      const response = await dispatch(axiosRegister(userObject));
      if (axiosRegister.fulfilled.match(response)) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Ingresa un email válido').required('Ingresa tu email'),
      fullname: Yup.string().required('Ingresa tu nombre completo'),
      username: Yup.string().required('Ingresa tu nombre de usuario'),
      password: Yup.string().required('Ingresa una contraseña'),
    }),
    onSubmit: (values) => {
      handleRegister(values);
    }
  })

  return <RegisterFormik formik={formik} />
}

export default RegisterContainer
