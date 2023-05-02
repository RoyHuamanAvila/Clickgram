import { useEffect, useState } from "react"
import Profile from "./Profile"
import { UserLogged } from "../../interfaces"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { axiosGetUser, axiosGetUserByUsername } from "../../features/user/userSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileContainer = () => {
  const [user, setUser] = useState<UserLogged>();
  const dispatch = useAppDispatch();
  const { username } = useParams();
  const userLogged = useAppSelector(state => state.user.data);
  const [isOwner, setIsOwner] = useState<boolean>(false);

  const handleGetUser = async () => {
    const response = await axios.get(`http://localhost:3000/user/username/${username}`);
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    if (username) handleGetUser();
    setIsOwner(userLogged.username === username)
  }, [username])

  return <Profile user={user} isOwner={isOwner} />
}

export default ProfileContainer
