import { useEffect, useState } from "react"
import Profile from "./ProfileView"
import { UserLogged } from "../../interfaces"
import { useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfileContainer = () => {
  const [user, setUser] = useState<UserLogged>();
  const { username } = useParams();
  const userLogged = useAppSelector(state => state.user.data);
  const [isOwner, setIsOwner] = useState<boolean>(false);

  const handleGetUser = async () => {
    const response = await axios.get(`http://localhost:3000/user/username/${username}`);
    const data = await response.data;
    setUser(data);
  }

  useEffect(() => {
    if (username) {
      if (userLogged.username === username) {
        setUser(userLogged)
        setIsOwner(true)
      } else {
        handleGetUser();
      }
    }
  }, [username, userLogged])

  return <Profile user={user} isOwner={isOwner} />
}

export default ProfileContainer
