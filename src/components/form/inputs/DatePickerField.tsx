import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  label: string;
  placeholder?: string;
  birthDate: Date | null;
  formValues: object;
  setFormValues(data: object): void;
}

const DatePickerField: React.FC<Props> = ({
  label,
  placeholder,
  birthDate,
  formValues,
  setFormValues,
}) => {
  return (
    <div className="mt-[50px]">
      <p className="text-lg leading-7 font-normal text-black">{label}</p>
      <DatePicker
        selected={birthDate}
        onChange={(date) =>
          setFormValues({
            ...formValues,
            birthDate: date,
          })
        }
        className="mt-[10px] outline-0 w-full h-[55px] rounded-2xl border-[#00000066] border-[1px] px-[22px] datepicker"
        placeholderText={placeholder}
      />
    </div>
  );
};

export default DatePickerField;
