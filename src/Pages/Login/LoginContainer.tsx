import { useEffect } from "react";
import { axiosLogin } from "../../features/application/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { LoginAuthDto } from "../../interfaces/dto"
import Login from "./LoginFormik";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues: LoginAuthDto = {
  email: '',
  password: ''
}

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const isAuthenticated = useAppSelector((state) => state.application.isAuthenticated);

  const handleLogin = (userObject: LoginAuthDto) => {
    dispatch(axiosLogin(userObject));
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleLogin(values)
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingresa un email válido').required('Ingresa tu email'),
      password: Yup.string().required('Ingresa una contraseña'),
    })
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return <Login formik={formik} />
}

export default LoginContainer
