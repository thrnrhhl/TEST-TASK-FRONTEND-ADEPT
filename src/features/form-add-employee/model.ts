import { Employee } from "@/src/shared/config/model";

export interface IFormValues extends Omit<Employee,'id' | 'companyId'> {};

export const initialState = {surname: '', name: '', position: ''};