import React, { useContext } from "react";
import AvatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      className="rounded-full"
      src={user && user.photoURL ? user.photoURL : AvatarImg}
      alt="profile"
      width="30"
      height="30"
    />
  );
};

export default Avatar;
