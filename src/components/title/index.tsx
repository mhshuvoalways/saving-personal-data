import React from "react";
import Titles from "./Titles";
import BulletPoint from "./BulletPoint";

interface Props {
  title: string;
}

const index: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Titles title={title} />
      <BulletPoint />
    </>
  );
};

export default index;
