import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  btn?: boolean;
  formSubmit(value: string): void;
}

const Button: React.FC<Props> = ({ btn, formSubmit }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        btn ? "justify-between" : "justify-end"
      } mt-[36px] flex items-center gap-6 flex-wrap`}
    >
      {btn && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-full sm:w-[100px] h-[34px] rounded-[38px] bg-[#E5E7EB] text-[#4B5563] text-base leading-6 font-bold"
          onClick={() => navigate(-1)}
        >
          Go Back
        </motion.button>
      )}
      <div className="w-full sm:w-8/12 flex justify-end items-center gap-[23px] flex-wrap">
        <motion.button
          className="w-full sm:w-[158px] h-[34px] rounded-[38px] bg-[#E5E7EB] text-[#4B5563] text-base leading-6 font-bold"
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => formSubmit("save")}
        >
          Save for later
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-full sm:w-[91px] rounded-[38px] bg-gradient-to-l from-[#20FF87] to-[#00CC9E] text-white text-base leading-6 font-bold  text-center py-[5px] px-[27px]"
          type="button"
          onClick={() => formSubmit("")}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Button;
