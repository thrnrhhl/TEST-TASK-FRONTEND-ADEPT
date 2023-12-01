import { toggleSelectAllEmployees } from "@/src/entities/employee/model/emplyee-slice";
import { Employee } from "@/src/shared/config/model";
import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";

interface SelectAllEmployeesProps extends Pick<Employee, 'companyId'> { };

export const SelectAllEmployees: FC<SelectAllEmployeesProps> = ({ companyId }) => {
    const dispatch = useDispatch();

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleSelectAllEmployees({ companyId, checked: ev.target.checked }))
    };

    return (
        <label>
            <input type="checkbox" onChange={handleChange} />
            Выбрать все
        </label>
    );
};