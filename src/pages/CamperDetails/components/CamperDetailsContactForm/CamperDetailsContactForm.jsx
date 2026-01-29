import Button from '../../../../components/Button/Button';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import Textarea from '../../../../components/Textarea/Textarea';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import FormInput from '../../../../components/FormInput/FormInput';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().nullable().required('Required'),
  comment: Yup.string().min(3, 'Too Short!').max(500, 'Too Long!'),
});

export default function CamperDetailsContactForm() {
  const handleSubmit = (_, actions) => {
    toast.success('You have successfully booked your campervan!');
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ isValid, dirty, errors, touched }) => (
        <Form className="border rounded-[10px] py-[44px] px-[57px]">
          <h3 className="text-h3 mb-2">Book your campervan now</h3>
          <p className="text-gray mb-6">
            Stay connected! We are always ready to help you.
          </p>

          <div className="mb-[14px]">
            <label htmlFor="booking-name" className="sr-only">
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="booking-name"
              placeholder="Name*"
              autoComplete="name"
              component={FormInput}
            />
            <ErrorMessage name="name" />
          </div>

          <div className="mb-[14px]">
            <label htmlFor="booking-email" className="sr-only">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="booking-email"
              placeholder="Email*"
              autoComplete="email"
              component={FormInput}
            />
            <ErrorMessage name="email" />
          </div>

          <div className="mb-[14px]">
            <label htmlFor="date" className="sr-only">
              Booking date
            </label>
            <Field
              type="date"
              name="date"
              id="date"
              placeholder="Booking date*"
              component={Datepicker}
            />
            <ErrorMessage name="date" />
          </div>

          <label htmlFor="booking-comment" className="sr-only">
            Comment
          </label>
          <Field
            type="text"
            name="comment"
            id="booking-comment"
            placeholder="Comment"
            component={Textarea}
          />
          <ErrorMessage name="comment" />

          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              disabled={!isValid || !dirty || (errors.name && touched.name) || (errors.email && touched.email) || (errors.date && touched.date)}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
