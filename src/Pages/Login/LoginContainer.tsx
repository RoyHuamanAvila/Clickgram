import { useEffect } from "react";
import { axiosLogin } from "../../features/application/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { LoginAuthDto } from "../../interfaces/dto"
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const isAuthenticated = useAppSelector((state) => state.application.isAuthenticated);

  const handleLogin = (userObject: LoginAuthDto) => {
    dispatch(axiosLogin(userObject));
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return <Login handleLogin={handleLogin} />
}

export default LoginContainer
