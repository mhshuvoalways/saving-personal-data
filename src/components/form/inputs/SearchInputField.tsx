import React from "react";
import SearchIcon from "../../../assets/images/icons/search.svg";

interface Props {
  title: string;
  description?: string;
  placeholder?: string;
}

const TextAreaField: React.FC<Props> = ({
  title,
  description,
  placeholder,
}) => {
  return (
    <div className="mt-[31px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      <div className="relative">
        <img src={SearchIcon} className="absolute top-[25px] left-[22px]" />
        <input
          type="text"
          placeholder={placeholder}
          className="mt-[10px] outline-0 w-full h-[55px] rounded-2xl border-[#00000066] border-[1px] pl-[56px] pr-[22px] py-[17px]"
        />
      </div>
    </div>
  );
};

export default TextAreaField;
