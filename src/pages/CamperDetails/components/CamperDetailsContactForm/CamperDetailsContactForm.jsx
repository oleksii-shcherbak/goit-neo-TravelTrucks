import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../../components/FormInput/FormInput';
import Textarea from '../../../../components/Textarea/Textarea';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import Button from '../../../../components/Button/Button';
import toast from 'react-hot-toast';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  bookingDate: Yup.date()
    .min(new Date(), 'Booking date must be in the future')
    .required('Booking date is required'),
  comment: Yup.string()
    .min(3, 'Comment must be at least 3 characters')
    .max(500, 'Comment must be less than 500 characters'),
});

export default function CamperDetailsContactForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Booking submitted:', values);
    toast.success('Booking request sent successfully!');
    resetForm();
  };

  return (
    <div className="border rounded-[10px] p-6">
      <h3 className="text-h3 mb-2">Book your campervan now</h3>
      <p className="text-text mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: null,
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <FormInput name="name" label="Name*" />
            <FormInput name="email" type="email" label="Email*" />
            <Datepicker name="bookingDate" label="Booking date*" />
            <Textarea name="comment" label="Comment" />
            <Button type="submit" isLoading={isSubmitting} className="w-full">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
