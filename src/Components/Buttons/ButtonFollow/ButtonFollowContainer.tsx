import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, useLoading, useToggle } from "../../../hooks"
import { axiosFollowUser, axiosUnfollowUser } from "../../../features/user/userSlice";
import ButtonFollow from "./ButtonFollow";
import { toast } from "sonner";

export interface ButtonFollowContainerProps {
  idUser: string;
  username: string;
}

const ButtonFollowContainer: FC<ButtonFollowContainerProps> = ({ idUser, username }) => {
  const follows = useAppSelector(state => state.user.data.follows);
  const dispatch = useAppDispatch();
  const { active: followed, handleToggle: handleToggleFollow } = useToggle(follows.includes(idUser));
  const { loading, setLoadingState } = useLoading(false);

  const handleFollow = async () => {
    handleToggleFollow();
    setLoadingState(true);
    await dispatch(axiosFollowUser(idUser));
    toast.success(`Siguiendo a ${username}`);
    setLoadingState(false)
  }

  const handleUnfollow = async () => {
    handleToggleFollow();
    setLoadingState(true)
    await dispatch(axiosUnfollowUser(idUser));
    toast.success(`Dejaste de seguir a ${username}`);
    setLoadingState(false)
  }

  return <ButtonFollow handleFollow={handleFollow} handleUnfollow={handleUnfollow} isFollowed={followed} loading={loading} />
}

export default ButtonFollowContainer
