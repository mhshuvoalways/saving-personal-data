import React from "react";

interface Props {
  title: string;
  description?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  formValues?: string;
  onChangeForm(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const TextAreaField: React.FC<Props> = ({
  title,
  description,
  placeholder,
  name,
  required,
  formValues,
  onChangeForm,
}) => {
  return (
    <div className="mt-[31px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      <textarea
        placeholder={placeholder}
        className="mt-[10px] outline-0 w-full h-[168px] rounded-2xl border-[#00000066] border-[1px] px-[22px] py-[17px]"
        name={name}
        value={formValues}
        required={required}
        onChange={onChangeForm}
      />
    </div>
  );
};

export default TextAreaField;
