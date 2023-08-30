import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFormCheck from "../../hooks/useFormCheck";

const BulletPoint: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const { isFirstForm, isSecondForm, isThirdForm } = useFormCheck();

  useEffect(() => {
    if (isThirdForm && isSecondForm && isFirstForm) {
      setPercentage(100);
    } else if (isThirdForm) {
      setPercentage(100);
    } else if (isSecondForm) {
      setPercentage(100);
    } else if (isFirstForm) {
      setPercentage((100 / 2) * 1);
    }
  }, [isFirstForm, isSecondForm, isThirdForm]);

  return (
    <div className="bg-gradient-to-l bg-gray-200 h-[5px] w-[56.76%] mx-auto relative mt-9">
      <div
        className={`bg-gradient-to-l from-[#20FF87] to-[#00CC9E] h-[5px]`}
        style={{
          width: `${percentage}%`,
        }}
      >
        <div className="flex items-center gap-2 justify-between absolute inset-0 -bottom-[2px]">
          <Link to="/">
            <p
              className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
                isFirstForm ? "bulet-point" : "bg-gray-200"
              }`}
            >
              1
            </p>
          </Link>
          <Link to={isFirstForm ? "/personalproject" : ""}>
            <p
              className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
                isSecondForm ? "bulet-point" : "bg-gray-200"
              }`}
            >
              2
            </p>
          </Link>
          <Link to={isFirstForm && isSecondForm ? "/whenwhere" : ""}>
            <p
              className={`w-9 h-[34px] rounded-full text-base leading-6 font-bold text-white flex justify-center items-center ${
                isThirdForm ? "bulet-point" : "bg-gray-200"
              }`}
            >
              3
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BulletPoint;
