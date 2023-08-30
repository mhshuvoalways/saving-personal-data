import { useSelector } from "react-redux";
import { RootState } from "../store";

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

  const isThirdForm = Object.values(forms.thirdForm).some((value) => {
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
