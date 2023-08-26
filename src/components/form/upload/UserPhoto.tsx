import React from "react";
import UserImage from "../../../assets/images/icons/userphoto.svg";

interface Props {
  image: File[];
}

const UserPhoto: React.FC<Props> = ({ image }) => {
  return (
    <>
      {image.length ? (
        <img
          src={URL.createObjectURL(image[0])}
          alt=""
          className="w-full md:w-[191px] md:h-[180px] rounded-full shadow-md bg-white"
        />
      ) : (
        <img src={UserImage} alt="" />
      )}
    </>
  );
};

export default UserPhoto;
