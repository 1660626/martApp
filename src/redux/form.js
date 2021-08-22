/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
const categoriesList = [
  "Tất cả",
  "Sản Phẩm Tươi Sống",
  "Rau Củ Tươi",
  "Thịt Tươi Sống",
  "Hải Sản Tươi Sống",
  "Thực Phẩm Lạnh & Đông Lạnh",
  "Đồ Uống",
  "Thực Phẩm Chế Biến Sẵn",
  "Nguyên Liệu Nấu Ăn & Gia Vị"

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
