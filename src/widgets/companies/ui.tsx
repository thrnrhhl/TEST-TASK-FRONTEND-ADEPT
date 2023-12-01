import { fakeLoadCompanies } from '@/src/entities/company/model/company-slice';
import { DeleteCompany } from '@/src/features/delete-company';
import { FormAddCompany } from '@/src/features/form-add-company';
import { LoadedScroll } from '@/src/features/loaded-scroll';
import { SelectAllCompany } from '@/src/features/select-all-company';
import { TableRowCompany } from '@/src/features/table-row-company/ui';
import { COMPANY_HEAD_TABLE } from '@/src/shared/config/constants';
import { useAppSelector } from '@/src/shared/config/hooks';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Companies = () => {
    const companyState = useAppSelector(store => store.company);
    const employeeState = useAppSelector(state => state.employees.list);
    const classes = classNames('flex flex-col gap-[30px] border-r overflow-auto p-[10px]', {
        ['hidden md:flex md:w-[50%]']: companyState.activeCompany.id !== null,
        ['w-full']: companyState.activeCompany.id === null
    });
    const dispatch = useDispatch();

    const handleScrollEnd = () => {
        dispatch(fakeLoadCompanies());
    };

    useEffect(() => {
        dispatch(fakeLoadCompanies());
    }, [])

    return (
        <div className={classes}>
            <div className="p-[10px] shadow bg-[#fff]">
                <FormAddCompany />
            </div>
            <div className="p-[10px] shadow bg-[#fff] h-[calc(100vh-185px)]">
                <p className="font-bold text-2xl mb-[10px]">Список компаний</p>
                <div className="flex items-center justify-between mb-[10px]">
                    <SelectAllCompany />
                    <DeleteCompany />
                </div>
                <LoadedScroll className="h-[calc(100%-95px)]" onEnd={handleScrollEnd}>
                    <table className="border table w-full">
                        <thead className="">
                            <tr>
                                {COMPANY_HEAD_TABLE.map((key) => <th key={key} className="text-xs border">{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {companyState.list.map((key) =>
                                <TableRowCompany key={key.id} {...key} quantityEmployees={employeeState[key.id].length} />
                            )}
                        </tbody>
                    </table>
                </LoadedScroll>
            </div>
        </div>
    );
};