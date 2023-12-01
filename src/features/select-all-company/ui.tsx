import { toggleSelectAllCompanies } from "@/src/entities/company/model/company-slice";
import { ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";

export const SelectAllCompany = memo(() => {
    const dispatch = useDispatch();

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleSelectAllCompanies({ checked: !!ev.target.checked }))
    }

    return (
        <label>
            <input type="checkbox" onChange={handleChange} />
            Выбрать все
        </label>
    );
});