import {string, object} from 'yup';

export const schema = object().shape({
  email: string().email('invalid_email').required('required'),
  password: string().required('required'),
});
