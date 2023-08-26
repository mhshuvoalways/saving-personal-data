import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const BulletPoint: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  const count = useSelector((state: RootState) => state.formFeature);

  useEffect(() => {
    if (
      Object.entries(count.thirdForm).length &&
      Object.entries(count.secondForm).length &&
      Object.entries(count.firstForm).length
    ) {
      setPercentage(100);
    } else if (Object.entries(count.thirdForm).length) {
      setPercentage(100);
    } else if (Object.entries(count.secondForm).length) {
      setPercentage(100);
    } else if (Object.entries(count.firstForm).length) {
      setPercentage((100 / 2) * 1);
    }
  }, [count]);

  return (
    <div className="bg-gradient-to-l bg-gray-200 h-[5px] w-[56.76%] mx-auto relative mt-9">
      <div
        className={`bg-gradient-to-l from-[#20FF87] to-[#00CC9E] h-[5px]`}
        style={{
          width: `${percentage}%`,
        }}
      >
        <div className="flex items-center gap-2 justify-between absolute inset-0 -bottom-[2px]">
          <p
            className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
              Object.entries(count.firstForm).length
                ? "bulet-point"
                : "bg-gray-200"
            }`}
          >
            1
          </p>
          <p
            className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
              Object.entries(count.secondForm).length
                ? "bulet-point"
                : "bg-gray-200"
            }`}
          >
            2
          </p>
          <p
            className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
              Object.entries(count.thirdForm).length
                ? "bulet-point"
                : "bg-gray-200"
            }`}
          >
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default BulletPoint;
