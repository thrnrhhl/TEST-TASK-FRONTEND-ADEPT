import { deleteCompanies } from "@/src/entities/company/model/company-slice";
import { useDispatch } from "react-redux";

export const DeleteCompany = () => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(deleteCompanies())

    return (
        <button className="button button--danger" onClick={handleClick}>Удалить</button>
    );
};