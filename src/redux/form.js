/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
const categoriesList = [
  "Tất cả",
  "Trái cây",
  "Rau củ",
  "Thịt",
  "Hải sản",
  "Đồ nướng",
  "Nước uống",
];
export const Formslice = createSlice({
  name: "form",
  initialState: {
    form: null,
    typeForm: "",
    typePage: "",
    typeCategoriesList: "Tất cả",
    categoriesList: categoriesList,
  },
  reducers: {
    saveFormData: (state, action) => {
      state.form = action.payload;
    },
    setTypeForm: (state, action) => {
      state.typeForm = action.payload;
    },
    setTypePage: (state, action) => {
      state.typePage = action.payload;
    },
    setTypeCategoriesList: (state, action) => {
      state.typeCategoriesList = action.payload;
    },
  },
});

export const { saveFormData, setTypeForm, setTypePage, setTypeCategoriesList } =
  Formslice.actions;
export default Formslice.reducer;
