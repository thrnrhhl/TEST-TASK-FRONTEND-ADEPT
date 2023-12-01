import { Company, Employee, EmployeeRowTable } from "@/src/shared/config/model";

export interface IInitialsState {
    list: Record<Company['id'], EmployeeRowTable[]>;
}



export interface IUpdateField {
    fieldName: keyof Omit<Employee, 'id' | 'companyId'>;
    value: string | number;
    employeeId: Employee['id'];
    companyId: Company['id'];
}

export interface IAddEmployee extends Omit<Employee, 'id'>{
    companyId: Company['id'];
}

export interface IToggleSelectEmployee extends Pick<Employee, 'companyId' | 'id'> {
    checked: boolean;
}

export interface IDeleteEmployee extends Pick<Employee, 'companyId'> {};

export interface IToggleSelectAllEmployees extends Pick<Employee, 'companyId'> {
    checked: boolean;
}