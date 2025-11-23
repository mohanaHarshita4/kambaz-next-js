import { createSlice } from "@reduxjs/toolkit";

const modulesSlice = createSlice({
  name: "modules",
  initialState: [] as any[],
  reducers: {
    setModules: (state, { payload }) => payload,
    addModule: (state, { payload }) => {
      state.push(payload);
    },
    updateModule: (state, { payload }) =>
      state.map((m) => (m._id === payload._id ? payload : m)),
    deleteModule: (state, { payload }) =>
      state.filter((m) => m._id !== payload),
  },
});

export const { setModules, addModule, updateModule, deleteModule } =
  modulesSlice.actions;

export default modulesSlice.reducer;
