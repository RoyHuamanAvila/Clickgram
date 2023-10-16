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
  const { isAuthenticated, status } = useAppSelector((state) => state.application);


  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleLogin(values)
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingresa un email válido').required('Ingresa tu email'),
      password: Yup.string().required('Ingresa una contraseña'),
    }), initialStatus: status
  })

  const handleLogin = async (userObject: LoginAuthDto) => {
    formik.setStatus('pending')
    await dispatch(axiosLogin(userObject)).then((fulfilled) => {
      if (fulfilled.payload.user) {
        const userId = fulfilled.payload.user._id;
        dispatch(axiosGetUser(userId));
      }
    }).catch(() => {
      formik.setStatus('idle')
    })
    formik.setStatus('idle')
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return <Login formik={formik} />
}

export default LoginContainer
