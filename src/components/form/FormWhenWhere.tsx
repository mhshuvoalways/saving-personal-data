import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FormCard from "./FormCard";
import FormTitle from "./FormTitle";
import SearchInputField from "./inputs/SearchInputField";
import TextAreaField from "./inputs/TextAreaField";
import CheckBoxField from "./inputs/CheckBoxField";
import InputField from "./inputs/InputField";
import SelectField from "./inputs/select";
import PhotoForm from "./upload/PhotoForm";
import Tags from "./tags";
import Button from "./inputs/Button";
import { whenWhereInfo } from "../../store/features/formFeatures";

interface FormValues {
  timeSchedule: string;
  street: string;
  number: string;
  roomNumber: string;
  postalCode: string;
  city: string;
  other: string;
}

interface SelectFormValues {
  firstValue: string;
  secondValue: string;
}

interface AddressObject {
  address_components: {
    short_name: string;
    types: string[];
  }[];
}

const Index: React.FC = () => {
  const [checkboxSelected, setCheckboxSelected] = useState<string[]>([]);
  const [image, setImage] = useState<File[]>([]);
  const [formValues, setFormValues] = useState<FormValues>({
    timeSchedule: "",
    street: "",
    number: "",
    roomNumber: "",
    postalCode: "",
    city: "",
    other: "",
  });
  const [selectComPre, setSelectComPre] = useState<SelectFormValues>({
    firstValue: "",
    secondValue: "",
  });
  const [tagItems, setTagItems] = useState<string[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkHandler = (value: string) => {
    const temp = [...checkboxSelected];
    if (temp.includes(value)) {
      const newArray = temp.filter((el) => el !== value);
      setCheckboxSelected(newArray);
    } else {
      temp.push(value);
      setCheckboxSelected(temp);
    }
  };

  const imageHandler = (acceptedFiles: File[]) => {
    setImage(acceptedFiles);
  };

  const onChangeInputForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeForm = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeSelectForm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectComPre({
      ...selectComPre,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeGoogle = (obj: AddressObject) => {
    const postalCode = obj.address_components.find((el) =>
      el.types.includes("postal_code")
    );
    setFormValues({
      ...formValues,
      city: obj.address_components[1].short_name,
      postalCode: postalCode ? postalCode.short_name : "",
    });
  };

  const formSubmit = () => {
    const obj = {
      timeSchedule: formValues.timeSchedule,
      street: formValues.street,
      number: formValues.number,
      roomNumber: formValues.roomNumber,
      postalCode: formValues.postalCode,
      city: formValues.city,
      other: formValues.other,
      image,
      selectComPre,
      tagItems,
    };
    dispatch(whenWhereInfo(obj));
    navigate("/");
  };

  return (
    <form>
      <FormCard cardWidth="w-[78%]">
        <>
          <FormTitle title="3.1 Where & When" />
          <TextAreaField
            title="Time schedule:"
            description="When do you normally meet?"
            placeholder="Example: In general, we meet every Thursday at 14:00 o’clock during the lunch break."
            name="timeSchedule"
            formValues={formValues.timeSchedule}
            onChangeForm={onChangeForm}
            valueLength={400}
          />
          <CheckBoxField
            title="Meeting place:"
            description="Where is the meeting happening?"
            checkboxSelected={checkboxSelected}
            checkHandler={checkHandler}
          />
          {checkboxSelected.includes("inperson") && (
            <>
              <SearchInputField
                onChangeGoogle={onChangeGoogle}
                title="ADDRESS"
                placeholder="Search your address..."
              />
              <div className="flex gap-3 flex-wrap md:flex-nowrap justify-between items-center">
                <div className="w-full">
                  <InputField
                    label="Street"
                    placeholder="Street name"
                    name="street"
                    formValues={formValues.street}
                    onChangeForm={onChangeInputForm}
                  />
                </div>
                <div className="block md:flex gap-3 flex-wrap md:flex-nowrap w-full items-center">
                  <InputField
                    label="Number"
                    placeholder="Number"
                    name="number"
                    formValues={formValues.number}
                    onChangeForm={onChangeInputForm}
                  />
                  <InputField
                    label="Room Number"
                    placeholder="Room number"
                    name="roomNumber"
                    formValues={formValues.roomNumber}
                    onChangeForm={onChangeInputForm}
                  />
                </div>
              </div>
              <div className="flex gap-3 flex-wrap md:flex-nowrap justify-between items-center">
                <div className="w-full">
                  <InputField
                    label="Postal code"
                    placeholder="Postal code"
                    name="postalCode"
                    formValues={formValues.postalCode}
                    onChangeForm={onChangeInputForm}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    label="City"
                    placeholder="City"
                    name="city"
                    formValues={formValues.city}
                    onChangeForm={onChangeInputForm}
                  />
                </div>
              </div>
            </>
          )}
          {checkboxSelected.includes("online") && (
            <SelectField
              title="Communication Preferences:"
              description="What platform(s) do you use for your online meetings?"
              formValues={selectComPre}
              onChangeForm={onChangeSelectForm}
            />
          )}
          <motion.p
            className="text-base leading-6 text-[#9CA3AF] mt-[20px] cursor-pointer font-bold inline-block"
            whileTap={{ scale: 0.9 }}
          >
            + Add a communication tool
          </motion.p>
        </>
      </FormCard>
      <FormCard cardWidth="w-[78%]">
        <>
          <FormTitle title="3.2 Other Information" />
          <div className="my-[31px]">
            <p className="text-lg leading-7 font-bold">Cover Image:</p>
            <p className="text-lg leading-7 font-normal">
              Select a cover image for you CAS Project
            </p>
          </div>
          {image.length ? (
            <img
              src={URL.createObjectURL(image[0])}
              alt=""
              className="bg-white h-[290px] shadow-md rounded-xl w-full"
            />
          ) : (
            <PhotoForm formHeight="290px" imageHandler={imageHandler} />
          )}
          <Tags tagItems={tagItems} setTagItems={setTagItems} />
          <TextAreaField
            title="Other (optional)"
            placeholder="Is there anything else you would like to say about your CAS Project?"
            name="other"
            formValues={formValues.other}
            onChangeForm={onChangeForm}
            valueLength={800}
          />
        </>
      </FormCard>
      <Button formSubmit={formSubmit} btn />
    </form>
  );
};

export default Index;
