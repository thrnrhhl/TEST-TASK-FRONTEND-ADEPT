import { clearActiveCompany } from "@/src/entities/company/model/company-slice";
import { useDispatch } from "react-redux";

export const BackButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearActiveCompany());
    };
    return <button className="button button--secondary" onClick={handleClick}>Закрыть</button>
};