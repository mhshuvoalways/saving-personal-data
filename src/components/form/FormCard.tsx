import React from "react";

interface Props {
  children: React.ReactElement;
  cardWidth?: string;
}

const FormCard: React.FC<Props> = ({ children, cardWidth }) => {
  return (
    <div className="bg-[#F9FAFB] mt-[58px] rounded-xl shadow-md">
      <div className={`${cardWidth || "w-[65.5%]"} py-[45px] mx-auto`}>
        {children}
      </div>
    </div>
  );
};

export default FormCard;
