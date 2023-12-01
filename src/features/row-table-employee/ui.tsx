import { toggleSelectEmployee, updateField } from "@/src/entities/employee/model/emplyee-slice";
import { Employee, EmployeeRowTable } from "@/src/shared/config/model";
import classNames from "classnames";
import { ChangeEvent, FC, memo } from "react";
import { useDispatch } from "react-redux";

interface RowTableEmployeeProps extends EmployeeRowTable { };

export const RowTableEmployee: FC<RowTableEmployeeProps> = memo(({ id, surname, name, position, companyId, selected }) => {
    const dispatch = useDispatch();
    const classes = classNames('border', {
        ['bg-[green]']: selected
    })

    // Изменение полей в строке
    const handleChangeValue = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateField({
            companyId,
            employeeId: id,
            fieldName: ev.target.name as keyof Omit<Employee, 'id' | 'companyId'>,
            value: ev.target.value
        }))
    };

    // Изменение статуса чекбокса строки
    const handleChangeCheckbox = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleSelectEmployee({
            companyId, id,
            checked: ev.target.checked
        }))
    };

    return (
        <tr className={classes}>
            <td>
                <input
                    type="checkbox"
                    checked={!!selected}
                    onChange={handleChangeCheckbox} />
            </td>
            <td>
                <input
                    type="text"
                    className="input"
                    name="surname"
                    value={surname}
                    onChange={handleChangeValue} />
            </td>
            <td>
                <input
                    type="text"
                    className="input"
                    name="name"
                    value={name}
                    onChange={handleChangeValue} />
            </td>
            <td>
                <input
                    type="text"
                    className="input"
                    name="position"
                    value={position}
                    onChange={handleChangeValue} />
            </td>
        </tr>
    );
});