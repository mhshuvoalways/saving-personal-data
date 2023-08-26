import React, { useState } from "react";
import Dropzone from "react-dropzone";
import UploadArrowImage from "../../../assets/images/icons/uploadarrow.svg";

interface Props {
  formHeight?: string;
  imageHandler(acceptedFiles: File[]): void;
}

const PhotoForm: React.FC<Props> = ({ formHeight, imageHandler }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    setIsDragging(false);
    imageHandler(acceptedFiles);
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`bg-[#FFFAF1] shadow-md rounded-xl w-full py-[30px] border-dashed border-2 border-[#9CA3AF] flex items-center justify-center transition ${
            formHeight && "h-[290px]"
          } ${isDragging ? "transform scale-110" : ""}`}
        >
          <div>
            <img src={UploadArrowImage} alt="" className="mx-auto" />
            <p className="text-base leading-6 font-normal mt-6 text-center">
              {isDragging ? "Drop it!" : "Upload photo"}
            </p>
            <input {...getInputProps()} />
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default PhotoForm;
