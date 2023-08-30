import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormCard from "./FormCard";
import UserPhotoForm from "./upload";
import PhotoExample from "./upload/PhotoExample";
import InputField from "./inputs/InputField";
import DatePickerField from "./inputs/DatePickerField";
import Radio from "./inputs/radio";
import Button from "./inputs/Button";
import { personalInfo } from "../../store/features/formFeatures";
import useFormCheck from "../../hooks/useFormCheck";

interface FormValues {
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  gender: string;
}

const Index: React.FC = () => {
  const [imageData, setImageData] = useState<string | undefined>();
  const [image, setImage] = useState<File[]>([]);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    birthDate: null,
    gender: "Male",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { forms, isFirstForm } = useFormCheck();

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (value: string) => {
    if (formValues.firstName) {
      const obj = {
        image: imageData || "",
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        birthDate: formValues.birthDate,
        gender: formValues.gender,
      };
      dispatch(personalInfo(obj));
      value !== "save" && navigate("/personalproject");
    }
  };

  useEffect(() => {
    if (image.length) {
      const result = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(image[0]);
      });
      result.then((res) => setImageData(res)).catch((err) => console.log(err));
    }
  }, [image]);

  useEffect(() => {
    if (isFirstForm) {
      setImageData(forms.firstForm.image);
      setFormValues({
        firstName: forms.firstForm.firstName,
        lastName: forms.firstForm.lastName,
        birthDate: forms.firstForm.birthDate,
        gender: forms.firstForm.gender,
      });
    }
  }, [forms, isFirstForm]);

  return (
    <form>
      <FormCard>
        <>
          <UserPhotoForm
            image={image}
            setImage={setImage}
            imageData={imageData}
          />
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
    </form>
  );
};

export default Index;
