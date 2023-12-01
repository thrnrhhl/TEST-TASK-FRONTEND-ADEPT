import { Company } from "@/src/shared/config/model";

export interface IFormValues extends Omit<Company,'id'> {};

export const initialState = {name: '', address: ''};