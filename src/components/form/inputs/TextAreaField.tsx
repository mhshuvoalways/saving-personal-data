import React from "react";

interface Props {
  title: string;
  description?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  formValues?: string;
  valueLength?: number;
  onChangeForm(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const TextAreaField: React.FC<Props> = ({
  title,
  description,
  placeholder,
  name,
  required,
  formValues,
  valueLength,
  onChangeForm,
}) => {
  return (
    <div className="mt-[31px]">
      <p className="text-lg leading-7 font-bold">{title}</p>
      <p className="text-lg leading-7 font-normal">{description}</p>
      <div className="relative">
        <textarea
          placeholder={placeholder}
          className="mt-[10px] outline-0 w-full h-[168px] rounded-2xl border-[#00000066] border-[1px] px-[22px] py-[17px]"
          name={name}
          value={formValues}
          required={required}
          onChange={onChangeForm}
          minLength={0}
          maxLength={valueLength || 200}
        />
        <p className="text-sm leading-5 font-normal text-end absolute right-3 bottom-3 text-[#9CA3AF]">
          {formValues?.length} / {valueLength || 200}
        </p>
      </div>
    </div>
  );
};

export default TextAreaField;
