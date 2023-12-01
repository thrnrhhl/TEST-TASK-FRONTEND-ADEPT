import { Company } from "@/src/shared/config/model";
import { FC } from "react";

interface Props extends Omit<Company, 'address'> { }

export const CompanyItem: FC<Props> = ({ id, name }) => {
    return (
        <div key={id} className="border-l border-b p-[10px_5px] cursor-pointer hover:bg-[#00000010] text-sm">
            <p>{name}</p>
        </div>
    );
};