import React from "react";

interface Props {
  items: string[];
  name: string;
  formValues?: string;
  onChangeForm(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const SelectField: React.FC<Props> = ({
  items,
  onChangeForm,
  formValues,
  name,
}) => {
  return (
    <select
      className="mt-[20px] outline-0 w-6/12 h-[55px] rounded-2xl border-[#00000066] border-[1px] px-[22px] block"
      onChange={onChangeForm}
      value={formValues}
      name={name}
    >
      {items.map((item: string) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default SelectField;
