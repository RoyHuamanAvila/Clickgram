import { useEffect, useState } from "react"
import Profile from "./Profile"
import { UserLogged } from "../../interfaces"
import { useAppDispatch } from "../../hooks";
import { axiosGetUser, axiosGetUserByUsername } from "../../features/user/userSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileContainer = () => {
  const [user, setUser] = useState<UserLogged>();
  const dispatch = useAppDispatch();
  const { username } = useParams();

  const handleGetUser = async () => {
    const response = await axios.get(`http://localhost:3000/user/username/${username}`);
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    if (username) handleGetUser();
  }, [username])

  return <Profile user={user} />
}

export default ProfileContainer
