"use client";

import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../(Kambaz)/Courses/[cid]/Assignments/reducer";
import accountReducer from "../(Kambaz)/Account/reducer";
import modulesReducer from "../(Kambaz)/Courses/[cid]/Modules/reducer";
import coursesReducer from "../(Kambaz)/Courses/reducer";

export const store = configureStore({
  reducer: {
    assignments: assignmentsReducer,
    accountReducer: accountReducer,
    assignmentsReducer: assignmentsReducer,
    modulesReducer: modulesReducer,
    coursesReducer: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;