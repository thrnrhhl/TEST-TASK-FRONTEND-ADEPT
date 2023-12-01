import { Company } from "../model";

export const mockCompanies: Company[] = [];

for(let i = 0; i < 100; i++) {
    mockCompanies.push({
        id: i,
        name: `Компания - ${i}`,
        address: 'Какой-то адрес',
    })
}