 import { mockCompanies } from "@/src/shared/config/constants/index";
import { Company } from "@/src/shared/config/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, initialStateActiveCompany, IUpdateField, TypeChecked } from "./model";

const initialState: IInitialState = {
    list: [],
    activeCompany: initialStateActiveCompany
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {

        // Фейковая загрузка компаний
        fakeLoadCompanies: (state) => {
            state.list.push(...mockCompanies.slice(state.list.length, state.list.length + 20));
        },

        // Очистка блока с текущей компанией
        clearActiveCompany: (state) => {
            state.activeCompany = initialStateActiveCompany;
        },

        // Тугл выбора компаний
        toggleSelectAllCompanies: (state, action: PayloadAction<TypeChecked>) => {
            const { checked } = action.payload;
            state.list = state.list.map((key) => ({ ...key, selected: checked }));
        },

        // Отменить выделение
        toggleSelectCompany: (state, action: PayloadAction<Pick<Company, 'id'> & TypeChecked>) => {
            const { id, checked } = action.payload;
            state.list = state.list.map((key) => {
                if(key.id === id) {                        
                    key.selected = checked;

                    // Если чекбокс выбран, то заменяем компанию на новую
                    if(checked) state.activeCompany = key;
                    
                    // Если чекбокс не выбран и id равен id компании то мы закрываем вкладку с компанией
                    if(id === state.activeCompany.id && !checked) state.activeCompany = initialStateActiveCompany;
                }
                return key;
            });
        },

        // Добавление компаний
        addCompany: (state, action: PayloadAction<Omit<Company, 'id'>>) => {
            state.list.push({id: Date.now(), ...action.payload});
        },

        // Обновление записи компании
        updateFieldCompany: (state, action: PayloadAction<IUpdateField>) => {
            const { fieldName, companyId, value } = action.payload;
            state.list = state.list.map((key) => {
                if(key.id === companyId) {
                    if(state.activeCompany.id === companyId) {
                        state.activeCompany[fieldName] = value as string;
                    }
                    key[fieldName] = value as string;
                }
                return key
            })
        },

        // Удаление выбранных компаний
        deleteCompanies: (state) => {
            state.list = state.list.filter(item => {
                // Если id элемента равен id текущей компании которая открыта то очищаем
                item.id === state.activeCompany.id && (state.activeCompany = initialStateActiveCompany);
                return item.selected !== true
            });
        },
    }
});
export const { fakeLoadCompanies,toggleSelectAllCompanies, toggleSelectCompany, addCompany, updateFieldCompany, deleteCompanies, clearActiveCompany } = companySlice.actions;
export default companySlice.reducer;