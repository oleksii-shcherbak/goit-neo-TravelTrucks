import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icon from '../Icon/Icon';
import { createPortal } from 'react-dom';

export default function Datepicker({ name, label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const CalendarContainer = ({ children }) => {
    const portal = document.getElementById('datepicker-portal');
    return createPortal(
      <div className="react-datepicker-popper">{children}</div>,
      portal
    );
  };

  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <DatePicker
          {...field}
          {...props}
          selected={field.value}
          onChange={val => setFieldValue(name, val)}
          dateFormat="dd.MM.yyyy"
          minDate={new Date()}
          placeholderText={label}
          autoComplete="off"
          calendarContainer={CalendarContainer}
          className="w-full px-[18px] py-4 bg-inputs rounded-[10px] border-none outline-none"
        />
        <Icon
          name="calendar"
          className="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>
      {meta.touched && meta.error && (
        <div className="text-button text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
}
