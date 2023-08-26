import React from "react";
import SelectField from "./SelectField";

interface Props {
  title: string;
  description?: string;
  formValues?: { firstValue?: string; secondValue?: string };
  onChangeForm(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const Index: React.FC<Props> = ({
  title,
  description,
  formValues,
  onChangeForm,
}) => {
  return (
    <div className="mt-[50px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      <SelectField
        items={["Google Hangouts"]}
        formValues={formValues?.firstValue}
        onChangeForm={onChangeForm}
        name="firstValue"
      />
      <SelectField
        items={["Please Select"]}
        formValues={formValues?.secondValue}
        onChangeForm={onChangeForm}
        name="secondValue"
      />
    </div>
  );
};

export default Index;
