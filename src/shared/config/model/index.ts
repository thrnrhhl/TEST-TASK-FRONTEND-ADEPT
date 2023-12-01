export interface Company {
    id: number;
    name: string;
    address: string;
}

export interface Employee {
    id: number;
    name: string;
    surname: string;
    position: string;
    companyId: Company['id'];
}


export interface CompanyRowTable extends Company {
    selected?: boolean;
}

export interface EmployeeRowTable extends Employee {
    selected?: boolean;
}

