import React from "react";

interface Props {
  title: string;
}

const FormTitle: React.FC<Props> = ({ title }) => {
  return (
    <p className="text-2xl leading-8 font-bold text-center border-b-[3px] border-[#10B981] w-full mx-auto">
      {title}
    </p>
  );
};

export default FormTitle;
