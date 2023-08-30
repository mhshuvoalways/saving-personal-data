import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ThirdForm {
  timeSchedule: string;
  meetingPlace: {
    isOnline: boolean;
    isInPerson: boolean;
  };
}

const useFormCheck = () => {
  const forms = useSelector((state: RootState) => state.formFeature);

  const isFirstForm = Object.values(forms.firstForm).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    } else {
      return value !== null && value !== "";
    }
  });

  const isSecondForm = Object.values(forms.secondForm).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    } else {
      return value !== null && value !== "";
    }
  });

  const isThirdForm = Object.keys(forms.thirdForm).some((key) => {
    if (key === "meetingPlace") {
      return false;
    }
    const value = forms.thirdForm[key as keyof ThirdForm];
    if (Array.isArray(value)) {
      return value.length > 0;
    } else {
      return value !== null && value !== "";
    }
  });

  return {
    forms,
    isFirstForm,
    isSecondForm,
    isThirdForm,
  };
};

export default useFormCheck;
