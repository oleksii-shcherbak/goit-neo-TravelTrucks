import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker({ field, form, ...props }) {
  const isError = form.touched[field.name] && form.errors[field.name];

  return (
    <DatePicker
      id={field.name}
      name={field.name}
      selected={field.value}
      onChange={date => form.setFieldValue(field.name, date)}
      onBlur={() => form.setFieldTouched(field.name, true)}
      minDate={new Date()}
      dateFormat="dd.MM.yyyy"
      placeholderText={props.placeholder}
      calendarStartDay={1}
      portalId="datepicker-portal"
      autoComplete="off"
      className={clsx(
        'block w-full bg-inputs p-[18px] h-[60px] rounded-xl placeholder:text-gray text-main border transition-colors focus:outline-none focus:ring-0 cursor-pointer',
        {
          'border-button': isError,
          'border-transparent focus:border-button': !isError,
        },
        props.className
      )}
      wrapperClassName="w-full"
    />
  );
}
