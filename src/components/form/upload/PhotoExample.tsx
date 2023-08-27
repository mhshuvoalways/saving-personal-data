import React from "react";
import User1 from "../../../assets/images/users/user1.png";
import User2 from "../../../assets/images/users/user2.png";
import User3 from "../../../assets/images/users/user3.png";
import Done from "../../../assets/images/users/done.svg";

const PhotoExample: React.FC = () => {
  return (
    <div>
      <p className="text-base leading-6 font-normal text-center mt-[23px]">
        Not sure what we mean?
        <br />
        Here are a few good profile photo examples:
      </p>
      <div className="flex items-center justify-center gap-4 mt-[27px] flex-wrap">
        <div className="relative">
          <img src={User1} />
          <img src={Done} className="absolute -bottom-3 right-0" />
        </div>
        <div className="relative">
          <img src={User2} />
          <img src={Done} className="absolute -bottom-3 right-0" />
        </div>
        <div className="relative">
          <img src={User3} />
          <img src={Done} className="absolute -bottom-3 right-0" />
        </div>
      </div>
    </div>
  );
};

export default PhotoExample;
