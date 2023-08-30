import React from "react";
import UserPhoto from "./UserPhoto";
import PhotoForm from "./PhotoForm";

interface Props {
  image: File[];
  imageData?: string;
  setImage(data: File[]): void;
}

const Index: React.FC<Props> = ({ image, imageData, setImage }) => {
  const imageHandler = (acceptedFiles: File[]) => {
    setImage(acceptedFiles);
  };

  return (
    <div className="flex justify-center lg:justify-between items-center gap-5 lg:flex-nowrap flex-wrap">
      <UserPhoto image={image} imageData={imageData} />
      <PhotoForm imageHandler={imageHandler} />
    </div>
  );
};

export default Index;
