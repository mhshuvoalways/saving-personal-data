import React from "react";
import User1 from "../../../assets/images/users/user1.svg";
import User2 from "../../../assets/images/users/user2.svg";
import User3 from "../../../assets/images/users/user3.svg";

const PhotoExample: React.FC = () => {
  return (
    <div>
      <p className="text-base leading-6 font-normal text-center mt-[23px]">
        Not sure what we mean?
        <br />
        Here are a few good profile photo examples:
      </p>
      <div className="flex items-center justify-center gap-4 mt-[27px] flex-wrap">
        <img src={User1} />
        <img src={User2} />
        <img src={User3} />
      </div>
    </div>
  );
};

export default PhotoExample;
