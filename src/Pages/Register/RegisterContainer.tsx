import { useNavigate } from "react-router";
import { axiosRegister } from "../../features/application/authSlice";
import { useAppDispatch } from "../../hooks"
import { RegisterAuthDto } from "../../interfaces/dto"
import Register from "./Register"

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

  return <Register handleRegister={handleRegister} />
}

export default RegisterContainer
