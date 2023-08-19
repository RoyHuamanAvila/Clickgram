import { FC } from "react";
import { useAppDispatch, useAppSelector, useLoading, useToggle } from "../../../hooks"
import { axiosFollowUser, axiosUnfollowUser } from "../../../features/user/userSlice";
import ButtonFollow from "./ButtonFollowView";

export interface ButtonFollowContainerProps {
  idUser: string;
  username: string;
}

const ButtonFollowContainer: FC<ButtonFollowContainerProps> = ({ idUser }) => {
  const follows = useAppSelector(state => state.user.data.follows);
  const dispatch = useAppDispatch();
  const { active: followed, handleToggle: handleToggleFollow } = useToggle(follows.includes(idUser));
  const { loading, setLoadingState } = useLoading(false);

  const handleFollow = async () => {
    setLoadingState(true);
    const response = await dispatch(axiosFollowUser(idUser));
    const { requestStatus } = response.meta;
    if (requestStatus !== "rejected") {
      handleToggleFollow();
    }
    setLoadingState(false);
  }

  const handleUnfollow = async () => {
    setLoadingState(true)
    const response = await dispatch(axiosUnfollowUser(idUser));
    const { requestStatus } = response.meta;
    if (requestStatus !== "rejected") {
      handleToggleFollow();
    }
    setLoadingState(false)
  }

  return <ButtonFollow handleFollow={handleFollow} handleUnfollow={handleUnfollow} isFollowed={followed} loading={loading} />
}

export default ButtonFollowContainer
