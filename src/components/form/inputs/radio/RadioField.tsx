import React from "react";
import { motion } from "framer-motion";

interface Props {
  radioHandler: (value: string) => void;
  selectBtn: string;
  gender: string;
}

const RadioField: React.FC<Props> = ({ radioHandler, selectBtn, gender }) => {
  return (
    <motion.label
      className="inline-flex items-center cursor-pointer"
      onClick={() => radioHandler(gender)}
      whileTap={{ scale: 0.95 }}
    >
      <span className="w-7 h-7 mr-2 inline-flex justify-center items-center rounded-full bg-[#10B981]">
        <span
          className={`w-[20px] border-white border-[3px] h-[20px] inline-flex justify-center items-center rounded-full ${
            selectBtn === gender ? "bg-[#10B981]" : "bg-white"
          }`}
        ></span>
      </span>
      {gender}
    </motion.label>
  );
};

export default RadioField;
