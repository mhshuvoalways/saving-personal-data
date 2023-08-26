import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  btnLink?: string;
  formSubmit(): void;
}

const Button: React.FC<Props> = ({ btnLink, formSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-[36px] flex justify-between items-center gap-6 flex-wrap">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="w-full sm:w-[100px] h-[34px] rounded-[38px] bg-[#E5E7EB] text-[#4B5563] text-base leading-6 font-bold"
        onClick={() => navigate(-1)}
      >
        Go Back
      </motion.button>
      <div className="w-full sm:w-8/12 flex justify-end items-center gap-[23px] flex-wrap">
        <motion.button
          className="w-full sm:w-[158px] h-[34px] rounded-[38px] bg-[#E5E7EB] text-[#4B5563] text-base leading-6 font-bold"
          whileTap={{ scale: 0.9 }}
          onClick={formSubmit}
        >
          Save for later
        </motion.button>
        <Link
          to={btnLink ? `/${btnLink}` : "/personalproject"}
          className="w-full sm:w-[91px]"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-[91px] rounded-[38px] bg-gradient-to-l from-[#20FF87] to-[#00CC9E] text-white text-base leading-6 font-bold  text-center py-[5px] px-[27px]"
            onClick={formSubmit}
          >
            Next
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Button;
