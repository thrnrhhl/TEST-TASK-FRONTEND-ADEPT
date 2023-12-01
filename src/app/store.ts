import { configureStore } from "@reduxjs/toolkit";
import emplyeeSlice from "../entities/employee/model/emplyee-slice";
import companySlice from '../entities/company/model/company-slice';

export const store = configureStore({
    reducer: {
        employees: emplyeeSlice,
        company: companySlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;