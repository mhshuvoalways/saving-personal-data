import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormCard from "./FormCard";
import FormTitle from "./FormTitle";
import InputField from "./inputs/InputField";
import TextAreaField from "./inputs/TextAreaField";
import Button from "./inputs/Button";
import { projectInfo } from "../../store/features/formFeatures";

interface FormValues {
  title: string;
  shortDescription: string;
  whoWeAre: string;
  goal: string;
  targetAudience: string;
  whatWeDo: string;
  specialty: string;
}

const Index: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    shortDescription: "",
    whoWeAre: "",
    goal: "",
    targetAudience: "",
    whatWeDo: "",
    specialty: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const formSubmit = () => {
    if (
      formValues.title &&
      formValues.shortDescription &&
      formValues.whoWeAre &&
      formValues.whatWeDo
    ) {
      const obj = {
        title: formValues.title,
        shortDescription: formValues.shortDescription,
        whoWeAre: formValues.whoWeAre,
        goal: formValues.goal,
        targetAudience: formValues.targetAudience,
        whatWeDo: formValues.whatWeDo,
        specialty: formValues.specialty,
      };
      dispatch(projectInfo(obj));
      navigate("/whenwhere");
    }
  };

  return (
    <form>
      <FormCard cardWidth="w-[78%]">
        <>
          <FormTitle title="2.1 Overview Information" />
          <InputField
            label="Title *"
            placeholder="The main title of your CAS Project"
            maxLength={70}
            required
            name="title"
            formValues={formValues.title}
            onChangeForm={onChangeInputForm}
          />
          <TextAreaField
            title="Short Description: *"
            description="Summarise your CAS Project and why students should join?"
            placeholder="Example: Do you like buildings? Then, you’re exactly right in our reading group about modern architecture. Come and join us!&#10;&#10;We meet online to discuss the newest constructions in town. "
            required
            name="shortDescription"
            formValues={formValues.shortDescription}
            onChangeForm={onChangeForm}
          />
          <TextAreaField
            title="Who we are: *"
            description="Summarise your CAS Project and why students should join?"
            placeholder="Example: Hey!&#10;Thanks for being curious about Amnesty International! We're a bunch of students who really care about making things fair and equal for everyone."
            required
            name="whoWeAre"
            formValues={formValues.whoWeAre}
            onChangeForm={onChangeForm}
          />
          <TextAreaField
            title="Goal:"
            description="What is the vision of your CAS Project?"
            placeholder="Example for Amnesty International: We want to reduce injustice and uphold the humans right whether in our local communities or by supporting international initiatives."
            name="goal"
            formValues={formValues.goal}
            onChangeForm={onChangeForm}
          />
        </>
      </FormCard>
      <FormCard cardWidth="w-[78%]">
        <>
          <FormTitle title="2.2 Further Project Information" />
          <TextAreaField
            title="Target audience:"
            description="Who fits this CAS Project well?"
            name="targetAudience"
            formValues={formValues.targetAudience}
            onChangeForm={onChangeForm}
          />
          <TextAreaField
            title="What we do: *"
            description="What do you do in the project on a weekly basis?"
            required
            name="whatWeDo"
            formValues={formValues.whatWeDo}
            onChangeForm={onChangeForm}
          />
          <TextAreaField
            title="Specialty:"
            description="What sets your Project apart from others?"
            required
            name="specialty"
            formValues={formValues.specialty}
            onChangeForm={onChangeForm}
          />
        </>
      </FormCard>
      <Button formSubmit={formSubmit} btn />
    </form>
  );
};

export default Index;
