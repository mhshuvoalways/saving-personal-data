import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectValue {
  id: number;
  value: string;
}

export interface FormState {
  firstForm: {
    firstName: string;
    lastName: string;
    birthDate: Date | null;
    gender: string;
    image: string;
  };
  secondForm: {
    title: string;
    shortDescription: string;
    whoWeAre: string;
    goal: string;
    targetAudience: string;
    whatWeDo: string;
    specialty: string;
  };
  thirdForm: {
    timeSchedule: string;
    street: string;
    number: string;
    roomNumber: string;
    postalCode: string;
    city: string;
    other: string;
    tagItems: string[];
    image: string;
    selectValues: SelectValue[];
  };
}

type FirstFormPayload = {
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  gender: string;
  image: string;
};

type SecondFormPayload = {
  title: string;
  shortDescription: string;
  whoWeAre: string;
  goal: string;
  targetAudience: string;
  whatWeDo: string;
  specialty: string;
};

type ThirdFormPayload = {
  timeSchedule: string;
  street: string;
  number: string;
  roomNumber: string;
  postalCode: string;
  city: string;
  other: string;
  image: string;
  tagItems: string[];
  selectValues: SelectValue[];
};

const initialState: FormState = {
  firstForm: {
    firstName: "",
    lastName: "",
    birthDate: null,
    gender: "",
    image: "",
  },
  secondForm: {
    title: "",
    shortDescription: "",
    whoWeAre: "",
    goal: "",
    targetAudience: "",
    whatWeDo: "",
    specialty: "",
  },
  thirdForm: {
    timeSchedule: "",
    street: "",
    number: "",
    roomNumber: "",
    postalCode: "",
    city: "",
    other: "",
    image: "",
    tagItems: [],
    selectValues: [],
  },
};

export const formFeature = createSlice({
  name: "forms",
  initialState,
  reducers: {
    personalInfo: (state, action: PayloadAction<FirstFormPayload>) => {
      state.firstForm = action.payload;
    },
    projectInfo: (state, action: PayloadAction<SecondFormPayload>) => {
      state.secondForm = action.payload;
    },
    whenWhereInfo: (state, action: PayloadAction<ThirdFormPayload>) => {
      state.thirdForm = action.payload;
    },
  },
});

export const { personalInfo, projectInfo, whenWhereInfo } = formFeature.actions;

export default formFeature.reducer;
