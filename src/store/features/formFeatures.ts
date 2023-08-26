import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  firstForm: object;
  secondForm: object;
  thirdForm: object;
}

const initialState: FormState = {
  firstForm: {},
  secondForm: {},
  thirdForm: {},
};

export const formFeature = createSlice({
  name: "forms",
  initialState,
  reducers: {
    personalInfo: (state, action: PayloadAction<object>) => {
      state.firstForm = action.payload;
    },
    projectInfo: (state, action: PayloadAction<object>) => {
      state.secondForm = action.payload;
    },
    whenWhereInfo: (state, action: PayloadAction<object>) => {
      state.thirdForm = action.payload;
    },
  },
});

export const { personalInfo, projectInfo, whenWhereInfo } = formFeature.actions;

export default formFeature.reducer;
