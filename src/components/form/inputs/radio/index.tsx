import React from "react";
import RadioField from "./RadioField";

interface Props {
  label: string;
  gender: string;
  formValues: object;
  setFormValues(data: object): void;
}

const Index: React.FC<Props> = ({
  label,
  formValues,
  gender,
  setFormValues,
}) => {
  const radioHandler = (value: string) => {
    setFormValues({
      ...formValues,
      gender: value,
    });
  };

  return (
    <div className="mt-[50px]">
      <p className="text-lg leading-7 font-normal text-black">{label}</p>
      <div className="flex gap-6 mt-[10px] flex-wrap">
        <RadioField
          selectBtn={gender}
          radioHandler={radioHandler}
          gender="Male"
        />
        <RadioField
          selectBtn={gender}
          radioHandler={radioHandler}
          gender="Female"
        />
      </div>
    </div>
  );
};

export default Index;
