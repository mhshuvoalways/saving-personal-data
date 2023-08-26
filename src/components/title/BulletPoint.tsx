import React from "react";

const BulletPoint: React.FC = () => {
  const logics = {
    first: false,
    second: false,
    third: false,
  };

  return (
    <div className="bg-gradient-to-l from-[#20FF87] to-[#00CC9E] h-[5px] w-[56.76%] mx-auto relative mt-9">
      <div className="flex items-center gap-2 justify-between absolute inset-0 -bottom-[2px]">
        <p className="bulet-point w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center">
          1
        </p>
        <p className="bulet-point w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center">
          2
        </p>
        <p className="bulet-point w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center">
          3
        </p>
        <p className="bulet-point w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center">
          4
        </p>
      </div>
    </div>
  );
};

export default BulletPoint;
