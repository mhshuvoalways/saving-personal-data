import React from "react";

interface SelectOption {
  id: number;
  name: string;
}

interface SelectValue {
  id: number;
  value: string;
}

interface Props {
  title: string;
  description?: string;
  selectArray: SelectOption[];
  handleSelectChange(index: number, value: string): void;
  selectValues: SelectValue[];
  selectedOptions: string[];
}

const Index: React.FC<Props> = ({
  title,
  description,
  selectArray,
  handleSelectChange,
  selectValues,
  selectedOptions,
}) => {
  return (
    <div className="mt-[50px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      {selectValues.map((select, index) => (
        <select
          key={select.id}
          value={selectedOptions[index]}
          onChange={(e) => handleSelectChange(index, e.target.value)}
        >
          {selectArray.map(
            (el) =>
              !selectedOptions.includes(el.name) && (
                <option
                  key={el.id}
                  value={el.name}
                  className="mt-[20px] outline-0 w-6/12 h-[55px] rounded-2xl border-[#00000066] border-[1px] px-[22px] block"
                >
                  {el.name}
                </option>
              )
          )}
        </select>
      ))}
    </div>
  );
};

export default Index;
