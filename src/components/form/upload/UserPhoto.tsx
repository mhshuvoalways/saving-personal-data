import React from "react";
import UserImage from "../../../assets/images/icons/userphoto.svg";

interface Props {
  image: File[];
  imageData?: string;
}

const UserPhoto: React.FC<Props> = ({ image, imageData }) => {
  return (
    <>
      {imageData ? (
        <img
          src={imageData}
          alt=""
          className="w-full md:w-[191px] md:h-[180px] rounded-full shadow-md bg-white"
        />
      ) : image.length ? (
        <img
          src={URL.createObjectURL(image[0])}
          alt=""
          className="w-full md:w-[191px] md:h-[180px] rounded-full shadow-md bg-white"
        />
      ) : null}
      {!imageData && image.length === 0 ? <img src={UserImage} alt="" /> : null}
    </>
  );
};

export default UserPhoto;
