import React from "react";

interface SelectOption {
  id: number;
  name: string;
}

interface Props {
  items: SelectOption[];
  name: string;
  handleSelectChange: { index: number; value: string };
}

const SelectField: React.FC<Props> = ({ items, name }) => {
  return (
    <select
      className="mt-[20px] outline-0 w-6/12 h-[55px] rounded-2xl border-[#00000066] border-[1px] px-[22px] block"
      name={name}
    >
      {items.map((item: SelectOption) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
};

export default SelectField;
