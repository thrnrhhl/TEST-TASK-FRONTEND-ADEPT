import { addEmployee } from "@/src/entities/employee/model/emplyee-slice";
import { Employee } from "@/src/shared/config/model";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { initialState, IFormValues } from "./model";

interface Props extends Pick<Employee, 'companyId'> { }

export const FormAddEmployee: FC<Props> = ({ companyId }) => {

    const [form, setForm] = useState<IFormValues>(initialState);
    const dispatch = useDispatch();
    const formRef = useRef<HTMLFormElement | null>(null);

    // Изменение полей в форме
    const handleChangeField = (ev: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Отправка данных
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        dispatch(addEmployee({ companyId: companyId, ...form }));
        formRef.current?.reset();
    };

    return (
        <form ref={formRef} action="#" onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-12 items-center">
                <label htmlFor="name" className="text-sm col-span-4">Фамилия</label>
                <input
                    type="text"
                    className="input col-span-8"
                    id="name"
                    name="surname"
                    placeholder="Введите фамилию"
                    required
                    onChange={handleChangeField} />
            </div>

            <div className="grid grid-cols-12 items-center">
                <label htmlFor="address" className="text-sm col-span-4">Имя</label>
                <input
                    type="text"
                    className="input col-span-8"
                    id="address"
                    name="name"
                    placeholder="Введите имя"
                    required
                    onChange={handleChangeField} />
            </div>

            <div className="grid grid-cols-12 items-center">
                <label htmlFor="address" className="text-sm col-span-4">Должность</label>
                <input
                    type="text"
                    className="input col-span-8"
                    id="address"
                    name="position"
                    placeholder="Введите должность"
                    required
                    onChange={handleChangeField} />
            </div>

            <input type="submit" value="Добавить сотрудника" className="button button--primary" />
        </form>
    );
};