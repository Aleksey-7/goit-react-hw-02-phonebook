import { Formik } from 'formik';
import {
  Label,
  Title,
  Button,
  Form,
  Field,
  ErrorMessage,
} from './ContactForm.styled';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .positive('!!! > 0 !!!')
    .min(2, 'Too Short!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          <Title>Name</Title>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="p" />
        </Label>
        <Label>
          <Title>Number</Title>
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
