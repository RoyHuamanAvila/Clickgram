import { useEffect } from "react";
import { axiosLogin } from "../../features/application/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { LoginAuthDto } from "../../interfaces/dto"
import Login from "./LoginFormik";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { axiosGetUser } from "../../features/user/userSlice";

const initialValues: LoginAuthDto = {
  email: '',
  password: ''
}

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.application);

  const handleLogin = async (userObject: LoginAuthDto) => {
    await dispatch(axiosLogin(userObject)).then((fulfilled) => {
      const userId = fulfilled.payload.user._id;
      dispatch(axiosGetUser(userId));
    });
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
