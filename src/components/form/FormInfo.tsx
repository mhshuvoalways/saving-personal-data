import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormCard from "./FormCard";
import UserPhotoForm from "./upload";
import PhotoExample from "./upload/PhotoExample";
import InputField from "./inputs/InputField";
import DatePickerField from "./inputs/DatePickerField";
import Radio from "./inputs/radio";
import Button from "./inputs/Button";
import { personalInfo } from "../../store/features/formFeatures";

interface FormValues {
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  gender: string;
}

const Index: React.FC = () => {
  const [image, setImage] = useState<File[]>([]);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    birthDate: null,
    gender: "Male",
  });

  const dispatch = useDispatch();

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = () => {
    const obj = {
      image: image,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      birthDate: formValues.birthDate,
      gender: formValues.gender,
    };
    dispatch(personalInfo(obj));
  };

  return (
    <>
      <FormCard>
        <>
          <UserPhotoForm image={image} setImage={setImage} />
          <PhotoExample />
          <div className="mt-[78px]">
            <InputField
              label="First Name *"
              name="firstName"
              required
              formValues={formValues.firstName}
              onChangeForm={onChangeForm}
            />
            <InputField
              label="Last Name"
              name="lastName"
              formValues={formValues.lastName}
              onChangeForm={onChangeForm}
            />
            <DatePickerField
              label="Birth day"
              placeholder="DD.MM.YYYY"
              birthDate={formValues.birthDate}
              formValues={formValues}
              setFormValues={setFormValues}
            />
            <Radio
              label="Gender"
              gender={formValues.gender}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
        </>
      </FormCard>
      <Button formSubmit={formSubmit} />
    </>
  );
};

export default Index;
