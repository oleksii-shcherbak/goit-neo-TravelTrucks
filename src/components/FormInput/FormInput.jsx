import { Field, ErrorMessage } from 'formik';

export default function FormInput({ name, label, ...props }) {
    return (
        <div>
            <label htmlFor={name} className="sr-only">
                {label}
            </label>
            <Field
                id={name}
                name={name}
                className="w-full px-[18px] py-4 bg-inputs rounded-[10px] border-none outline-none"
                placeholder={label}
                {...props}
            />
            <ErrorMessage
                name={name}
                component="div"
                className="text-button text-sm mt-1"
            />
        </div>
    );
}