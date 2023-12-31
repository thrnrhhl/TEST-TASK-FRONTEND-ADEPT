import { Company } from "@/src/shared/config/model";
export interface ICompanyList extends Company {
    selected?: boolean;
}
export interface IInitialState {
    list: ICompanyList[];
    activeCompany: Omit<Company, 'id'> & {
        id: Company['id'] | null
    }
}
export interface IUpdateField { 
    companyId: Company['id']; 
    fieldName: keyof Omit<Company, 'id'>; 
    value: string | number; 
}

export type TypeChecked = { checked: boolean };

export const initialStateActiveCompany: Omit<Company, 'id'> & { id: Company['id'] | null } = {
    id: null,
    address: '',
    name: ''
};