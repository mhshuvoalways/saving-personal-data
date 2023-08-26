import React from "react";

interface Props {
  marginTop?: string;
  label: string;
  name: string;
  placeholder?: string;
  inputType?: number;
  maxLength?: number;
  required?: boolean;
  formValues?: string;
  onChangeForm(event: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField: React.FC<Props> = ({
  marginTop,
  label,
  inputType,
  placeholder,
  maxLength,
  required,
  name,
  formValues,
  onChangeForm,
}) => {
  return (
    <div className={`${marginTop ? `mt-[${marginTop}px]` : "mt-[50px]"}`}>
      <p className="text-lg leading-7 font-normal text-black">{label}</p>
      <input
        type={typeof inputType === "number" ? "number" : "text"}
        placeholder={placeholder}
        className="mt-[10px] outline-0 w-full h-[55px] rounded-2xl border-[#00000066] border-[1px] px-[22px]"
        maxLength={maxLength}
        required={required}
        name={name}
        value={formValues}
        onChange={onChangeForm}
      />
    </div>
  );
};

export default InputField;
