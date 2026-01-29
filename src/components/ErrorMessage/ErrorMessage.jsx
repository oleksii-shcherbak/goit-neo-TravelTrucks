import { ErrorMessage as FormikErrorMessage } from 'formik';

export default function ErrorMessage({ name }) {
  return (
    <FormikErrorMessage name={name}>
      {msg => <div className="text-button ml-4 mt-1">{msg}</div>}
    </FormikErrorMessage>
  );
}
