import { employeesCompany } from "@/src/shared/config/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddEmployee, IDeleteEmployee, IInitialsState, IToggleSelectAllEmployees, IToggleSelectEmployee, IUpdateField } from "./model";

const initialState: IInitialsState = {
    list: employeesCompany
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {

        // Добавление сотрудника
        addEmployee: (state, action: PayloadAction<IAddEmployee>) => {
            const { companyId, ...payload } = action.payload;
            if(state.list[companyId]) {
                state.list[companyId].push({id: Date.now(), companyId, ...payload});
            }
        },

        // Обновление поля в объекте сотрудника
        updateField: (state, action: PayloadAction<IUpdateField>) => {
            const { fieldName, value, companyId, employeeId } = action.payload;
            const updateCompanies = [];

            for(let i = 0; i < state.list[companyId].length; i++) {
                let item = state.list[companyId][i];
                if(item.id === employeeId) {
                    item[fieldName] = value as string;
                }
                updateCompanies.push(item);
            }

            state.list[action.payload.companyId] = updateCompanies;
        },

        // Тугл выбора всех сотрудников
        toggleSelectAllEmployees: (state, action: PayloadAction<IToggleSelectAllEmployees>) => {
            const { companyId, checked } = action.payload;
            if(state.list[companyId]) {
                state.list[companyId] = state.list[companyId].map((key) => ({...key, selected: checked}))                
            }
        },

        // Тугл выбора одного сотрудника
        toggleSelectEmployee: (state, action: PayloadAction<IToggleSelectEmployee>) => {
            const { companyId, id, checked } = action.payload;
            if(state.list[companyId]) {
                state.list[companyId] = state.list[companyId].map((key) => {
                    if(key.id === id) key.selected = checked
                    return key
                })
            }
        },

        // Удаление сотрудника
        deleteEmployees: (state, action: PayloadAction<IDeleteEmployee>) => {
            const { companyId } = action.payload;
            if(state.list[companyId]) {
                state.list[companyId] = state.list[companyId].filter(item => item.selected !== true);
            }
        }
    }
});
export const { updateField, addEmployee, toggleSelectEmployee, toggleSelectAllEmployees, deleteEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;