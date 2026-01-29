import Input from '../Input/Input';

export default function FormInput({ field, form, ...props }) {
  return (
    <Input
      {...field}
      {...props}
      isError={form.touched[field.name] && form.errors[field.name]}
    />
  );
}
