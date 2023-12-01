import { addCompany } from "@/src/entities/company/model/company-slice";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { initialState, IFormValues } from "./model";

export const FormAddCompany = () => {

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
        dispatch(addCompany(form));
        formRef.current?.reset();
    };

    return (
        <form ref={formRef} action="#" onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <div className="form__field">
                <label htmlFor="name" className="text-sm col-span-4">Название компании</label>
                <input
                    type="text"
                    className="input col-span-8"
                    id="name"
                    name="name"
                    placeholder="Введите название компании"
                    required
                    onChange={handleChangeField} />
            </div>
            <div className="form__field">
                <label htmlFor="address" className="text-sm col-span-4">Адрес</label>
                <input
                    type="text"
                    className="input col-span-8"
                    id="address"
                    name="address"
                    placeholder="Введите адрес"
                    required
                    onChange={handleChangeField} />
            </div>
            <input type="submit" value="Добавить компанию" className="button button--primary" />
        </form>
    );
};