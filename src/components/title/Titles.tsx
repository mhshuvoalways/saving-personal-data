import React from "react";

interface Props {
  title: string;
}

const Titles: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <p className="font-bold text-3xl leading-9 text-center">{title}</p>
    </div>
  );
};

export default Titles;
