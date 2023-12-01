import { deleteEmployees } from "@/src/entities/employee/model/emplyee-slice";
import { Employee } from "@/src/shared/config/model";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface DeleteEmployeeProps extends Pick<Employee, 'companyId'> { };

export const DeleteEmployee: FC<DeleteEmployeeProps> = ({ companyId }) => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(deleteEmployees({ companyId }))

    return (
        <button className="button button--danger" onClick={handleClick}>Удалить</button>
    );
};