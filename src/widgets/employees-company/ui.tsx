import { BackButton } from "@/src/features/back-button";
import { DeleteEmployee } from "@/src/features/delete-employee";
import { FormAddEmployee } from "@/src/features/form-add-employee";
import { LoadedScroll } from "@/src/features/loaded-scroll";
import { RowTableEmployee } from "@/src/features/row-table-employee";
import { SelectAllEmployees } from "@/src/features/select-all-employees";
import { EMPLOYEE_HEAD_TABLE } from "@/src/shared/config/constants";
import { useAppSelector } from "@/src/shared/config/hooks";
import { useEffect, useMemo, useState } from "react";

export const EmployeesCompany = () => {
    const companyState = useAppSelector((state) => state.company);
    const employeeState = useAppSelector((state) => state.employees.list[companyState.activeCompany.id as number] || []);

    // Счетчик для порционного скролла
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const employees = useMemo(() => {
        return employeeState.slice(0, 30 * (currentIndex + 1));
    }, [currentIndex, companyState.activeCompany.id, employeeState])

    // При скролле добавляем записи в наш стейт
    const handleScrollEnd = () => {
        setCurrentIndex(prev => prev + 1)
    }

    useEffect(() => {
        setCurrentIndex(0);
    }, [companyState.activeCompany]);

    return (
        <div className="flex flex-col h-full w-full p-[10px] md:w-[50%]">
            <div className="border-b flex items-center justify-between pb-[10px] mb-[10px]">
                <h1 className="text-3xl font-bold">{companyState.activeCompany.name}</h1>
                <BackButton />
            </div>
            <div className="shadow p-[10px] bg-[#fff] mb-[20px]">
                <FormAddEmployee companyId={companyState.activeCompany.id as number} />
            </div>
            <div className="shadow p-[10px] bg-[#fff] flex-1 overflow-hidden">
                <p className="font-bold text-2xl mb-[10px]">Список сотрудников</p>
                <div className="flex items-center justify-between mb-[10px]">
                    <SelectAllEmployees companyId={companyState.activeCompany.id as number} />
                    <DeleteEmployee companyId={companyState.activeCompany.id as number} />
                </div>
                <LoadedScroll onEnd={handleScrollEnd} className="h-[calc(100%-90px)]">
                    <table className="border table w-full">
                        <thead>
                            <tr>
                                {EMPLOYEE_HEAD_TABLE.map(key => <th key={key}>{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((key) => <RowTableEmployee key={key.id} {...key} />)}
                        </tbody>
                    </table>
                </LoadedScroll>
            </div>
        </div>
    );
};