import React from "react";
import { motion } from "framer-motion";
import DoneIcon from "../../../assets/images/icons/done.svg";

interface Props {
  title: string;
  description?: string;
  checkboxSelected: string[];
  checkHandler: (value: string) => void;
}

const TextAreaField: React.FC<Props> = ({
  title,
  description,
  checkboxSelected,
  checkHandler,
}) => {
  return (
    <div className="mt-[31px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      <div className="flex items-center sm:gap-[45px] mt-[10px] flex-wrap gap-2">
        <motion.div
          className="flex items-center gap-[15px]"
          onClick={() => checkHandler("online")}
          whileTap={{ scale: 0.95 }}
        >
          {checkboxSelected.includes("online") ? (
            <img src={DoneIcon} className="cursor-pointer" />
          ) : (
            <span className="w-[26px] h-[26px] cursor-pointer m-1 inline-flex justify-center items-center rounded-md border-[#10B981] border-2"></span>
          )}
          <p className="cursor-pointer">Online</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-[15px]"
          onClick={() => checkHandler("inperson")}
          whileTap={{ scale: 0.95 }}
        >
          {checkboxSelected.includes("inperson") ? (
            <img src={DoneIcon} className="cursor-pointer" />
          ) : (
            <span className="w-[26px] h-[26px] cursor-pointer m-1 inline-flex justify-center items-center rounded-md border-[#10B981] border-2"></span>
          )}
          <p className="cursor-pointer">In Person</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TextAreaField;
