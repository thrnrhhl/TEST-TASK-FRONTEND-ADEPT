import { Company, Employee } from "../model";
import { mockCompanies } from "./mock-companies";

export const employeesCompany: Record<Company['id'], Employee[]> = {};

mockCompanies.forEach((item, index) => {
    employeesCompany[item.id] = [];
    
    for(let i = 0; i < 1000; i++) {
        employeesCompany[item.id].push({ 
            id: i, 
            companyId: index, 
            surname: item.name +  Date.now().toString(36) + i,  
            name: item.name + Date.now().toString(30) + i,
            position: item.name + Date.now().toString(29) + i
        })
    }
})