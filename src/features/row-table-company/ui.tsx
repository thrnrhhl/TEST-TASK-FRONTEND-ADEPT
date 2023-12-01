import { toggleSelectCompany, updateFieldCompany } from "@/src/entities/company/model/company-slice";
import { Company } from "@/src/shared/config/model";
import classNames from "classnames";
import { ChangeEvent, FC, memo } from "react";
import { useDispatch } from "react-redux";

interface RowTableCompanyProps extends Company {
    selected?: boolean;
    quantityEmployees: number;
};

export const RowTableCompany: FC<RowTableCompanyProps> = memo(({ id, name, address, selected, quantityEmployees }) => {
    const dispatch = useDispatch();
    const classes = classNames('border', {
        ['bg-[green]']: selected
    });

    // Изменение значения в полях строки
    const handleChangeValue = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateFieldCompany({
            companyId: id,
            fieldName: ev.target.name as keyof Omit<Company, 'id'>,
            value: ev.target.value
        }));
    };

    // Изменение чекбокса
    const handleChangeCheckbox = (ev: ChangeEvent<HTMLInputElement>) => {
        ev.stopPropagation();
        dispatch(toggleSelectCompany({ id: id, checked: ev.target.checked }));
    }

    return (
        <tr className={classes}>
            <td className="border">
                <input
                    type="checkbox"
                    className="input"
                    data-id={id}
                    checked={!!selected}
                    readOnly
                    onChange={handleChangeCheckbox}
                />
            </td>
            <td className="border text-xs">
                <input
                    type="text"
                    className="input"
                    value={name}
                    name="name"
                    onChange={handleChangeValue} />
            </td>
            <td>{quantityEmployees}</td>
            <td className="border text-xs">
                <input
                    type="text"
                    className="input"
                    value={address}
                    name="address"
                    onChange={handleChangeValue} />
            </td>
        </tr>
    );
});